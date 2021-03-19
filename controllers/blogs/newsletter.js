const Newsletter = require("../../models/blogs/Newsletter")
const asyncHandler = require("../../middleware/async")
const ErrorResponse = require("../../utils/ErrorResponse")





// @ROUTE         '/subscribers'
// @DESC          Subscribe to newsletter
// @METHOD        POST
// @ACCESS		  Public

exports.subscribeToNewsletter = asyncHandler(async (req, res) => {
	const newSubscriber = await Newsletter.create(req.body)

	if (!newSubscriber) {
		new ErrorResponse("Problem Occured.", 500)
	}

	res.status(200).json({
		success: true,
		message: "Email has been added."
	})
})

// @ROUTE         '/subscribers'
// @DESC          Get subscribers
// @METHOD        GET
// @ACCESS		  Public

exports.getSubscribers = asyncHandler(async (req, res) => {
	const subscribers = await Newsletter.find({})

	res.status(200).json({
		success: true,
		count: subscribers.length,
		data: subscribers
	})
})
