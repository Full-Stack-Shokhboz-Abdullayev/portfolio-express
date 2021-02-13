const crypto = require("crypto")
const { Schema, model } = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const UserSchema = new Schema({
	name: { unique: true, type: String, required: [true, "Please add name."] },
	email: {
		type: String,
		unique: true,
		required: [true, "Please add email."],
		match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	},
	password: {
		type: String,
		required: [true, "Please add password."],
		select: false
	},

	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {
		type: Date,
		default: Date.now
	},
	role: { type: String, enum: ["user"], default: "user" }
})

UserSchema.methods.getSignedJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE
	})
}
//Genereate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString("hex")

	//Hash token and set to resetPasswordToken field
	this.resetPasswordToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex")

	// Set expire
	this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

	return resetToken
}

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next()
	}
	const salt = await bcrypt.genSalt()
	this.password = await bcrypt.hash(this.password, salt)
})

module.exports = model("User", UserSchema)
