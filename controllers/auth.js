const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/ErrorResponse")
const User = require("../models/User")
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

// @ROUTE         '/auth/register'
// @DESC          Registration
// @METHOD        POST
// @ACCESS		  Public

exports.register = asyncHandler(async (req, res) => {
	const { name, email, password, role } = req.body
	const user = await User.create({
		name,
		email,
		password,
		role
	})

	sendTokenResponse(user, 200, res)
})

// @ROUTE         '/auth/login'
// @DESC          Login controller
// @METHOD        POST
// @ACCESS		  Public

exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body

	if (!email || !password) {
		return next(
			new ErrorResponse("Please Provide an Email and Password", 400)
		)
	}

	const user = await User.findOne({ email }).select("+password")

	if (!user) {
		return next(new ErrorResponse("Invalid credentials.", 401))
	}

	const isMatched = await user.matchPassword(password)

	if (!isMatched) {
		return next(new ErrorResponse("Invalid credentials.", 401))
	}

	sendTokenResponse(user, 200, res)
})

// @ROUTE         '/auth/auto-login'
// @DESC          Auto Login Via Token
// @METHOD        POST
// @ACCESS		  Private/Admin Only

exports.autoLogin = asyncHandler(async (req, res) => {
	res.status(200).json({ success: true, user: req.user })
})

// @ROUTE         '/auth/logout'
// @DESC          Logout / Clear Cookie
// @METHOD        GET
// @ACCESS		  Public

exports.logout = asyncHandler(async (req, res) => {
	res.cookie("token", "none", {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true
	})
		.status(200)
		.json({
			success: true,
			msg: "Logged out."
		})
})

// @ROUTE         '/auth/forgot-password'
// @DESC          Forgot Password
// @METHOD        POST
// @ACCESS		  Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
	const { email } = req.body
	const user = await User.findOne({ email })

	if (!user) {
		return next(
			new ErrorResponse(`There is no user with an email of ${email}`, 404)
		)
	}

	const resetToken = await user.getResetPasswordToken()

	await user.save({ validateBeforeSave: false })
	console.log(resetToken)

	let url

	if (process.env.NODE_ENV === "production") {
		url = process.env.SITE_URL
	} else {
		url = "localhost:8080"
	}

	let resetLink = `${url}/reset-password/${resetToken}`

	let message = `Follow the link below to reset the password: \n ${resetLink} \n Please Ignore if something went wrong.`

	try {
		sendEmail({
			email: email,
			message,
			subject: "Password Reset"
		})
		res.status(200).json({
			success: true,
			msg: "Email Sent"
		})
	} catch (err) {
		console.log(err)
		user.getResetPasswordToken = undefined
		user.getResetPasswordExpire = undefined
		await user.save({ validateBeforeSave: false })
		return next(new ErrorResponse("Email could not be sent.", 500))
	}
})

// @ROUTE         '/auth/reset-password/:token'
// @DESC          Reset Password
// @METHOD        PUT
// @ACCESS		  Public If Token Provided

exports.resetPassword = asyncHandler(async (req, res, next) => {
	// Get hashed token
	const resetPasswordToken = crypto
		.createHash("sha256")
		.update(req.params.token)
		.digest("hex")

	const user = await User.findOne({
		resetPasswordToken: resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() }
	})
	if (!user) {
		return next(new ErrorResponse("Invalid token.", 400))
	}

	user.password = req.body.password
	user.getResetPasswordToken = undefined
	user.getResetPasswordExpire = undefined

	await user.save({ validateBeforeSave: false })

	sendTokenResponse(user, 200, res)
})

// @ROUTE         '/auth/update-password'
// @DESC          Update Password
// @METHOD        PUT
// @ACCESS		  Public

exports.updatePassword = asyncHandler(async (req, res, next) => {
	const { currentPassword, newPassword } = req.body

	if (!currentPassword || !newPassword) {
		return next(
			new ErrorResponse("Please fill fields before updating.", 404)
		)
	}

	const user = await User.findById(req.user.id).select("+password")

	console.log(user)

	const isMatched = await user.matchPassword(currentPassword)

	if (!isMatched) {
		return next(new ErrorResponse("Invalid Password", 401))
	}

	user.password = newPassword

	await user.save({ validateBeforeSave: false })

	// const user = await User.findByIdAndUpdate(
	// 	req.user.id,
	// 	{ password: newPassword },
	// 	{
	// 		new: true,
	// 		runValidators: true
	// 	}
	// )

	res.status(200).json({
		success: true,
		data: req.user
	})
})

// Get token from model, crate cookie and send response

const sendTokenResponse = async (user, statusCode, res) => {
	const token = await user.getSignedJwtToken()

	console.log(process.env.JWT_COOKIE_EXPIRE)
	const options = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
		),
		sameSite: "None",
		httpOnly: true,
		secure: true
	}

	if (process.env.NODE_ENV === "production") {
		options.secure = true
	}
	res.status(statusCode).cookie("token", token, options).json({
		success: true,
		user,
		token
	})
}
