const ErrorResponse = require("../utils/ErrorResponse")
const errorHandler = (err, req, res, next) => {
	let error = { ...err }

	error.message = err.message
	// Log to console for the Developer
	console.log(err)

	// Mongoose bad ObjectId
	if (err.name === "CastError") {
		const message = `Resource not found.`
		error = new ErrorResponse(message, 404)
	}

	if (err.name === "ValidationError") {
		if (!err.kind === "enum") {
			const fields = Object.keys(err.errors)
			const message = `Validation Error. Please add required fields: ${fields.join(
				", "
			)}.`
			error = new ErrorResponse(message, 400)
		}
	}
	if (err.code === 11000) {
		const message = `Duplicate field value entered: ${Object.keys(err.keyValue).join(', ')}`
		console.log(Object.keys(err))
		error = new ErrorResponse(message, 400)
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || "Server Error!"
	})
}

module.exports = errorHandler
