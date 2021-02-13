const jwt = require("jsonwebtoken")
const asyncHandler = require("./async")
const ErrorResponse = require("../utils/ErrorResponse")
const User = require("../models/User")

exports.protect = asyncHandler(async (req, res, next) => {
	let token
	const authHeader = req.headers.authorization
	if (authHeader && authHeader.startsWith("Bearer")) {
		token = authHeader.split(" ")[1]
	}
	else if (req.cookies.token) {
		token = req.cookies.token
	}

	//Make sure token exists
	if (!token) {
		return next(
			new ErrorResponse("Not Authorized to access this route!", 401)
		)
	}
	try {
		//verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		console.log(decoded)
		req.user = await User.findById(decoded.id)
		next()
	} catch (err) {
		//catched error
		return next(
			new ErrorResponse("Not Authorized to access this route!", 401)
		)
	}
})

exports.authorize = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new ErrorResponse(
					`User role '${req.user.role}' is unauthoraized to access this route!`,
					403
				)
			)
		}
        next()
	}
}
