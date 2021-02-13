const FAQ = require('../../models/about/FAQ');
const asyncHandler = require("../../middleware/async")


// @ROUTE         '/faqs'
// @DESC          Get All Faqs
// @METHOD        GET
// @ACCESS		  Public
exports.getAllFaqs = asyncHandler(async (req, res) => {
    const faqs = await FAQ.find()
    res.status(200).json({
        success: true,
        msg: "Found all Faqs.",
        count: faqs.length,
        data: faqs
    })

})


// @ROUTE         '/faqs'
// @DESC          Post a Faq
// @METHOD        POST
// @ACCESS		  Admin Only
exports.postFaq = asyncHandler(async (req, res) => {
    const newFaq = await FAQ.create(req.body)

    res.status(200).json({
        success: true,
        msg: "Faq was added successfully!",
        data: newFaq
    })
})

// @ROUTE         '/faqs/:id'
// @DESC          Update a Faq
// @METHOD        PUT
// @ACCESS		  Admin Only
exports.updateFaq = asyncHandler(async (req, res) => {
    const { id } = req.params
    const updatedFaq = await FAQ.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        msg: `Faq with an id of ${id} was updated successfully!`,
        data: updatedFaq,
    })
})


// @ROUTE         '/faqs/:id'
// @DESC          Delete a Faq
// @METHOD        DELETE
// @ACCESS		  Admin Only

exports.deleteFaq = asyncHandler(async (req, res) => {
    const { id } = req.params
    const deletedFaq = await FAQ.findByIdAndDelete(id)
    if (deletedFaq.deletedCount === 0) {
		return next(
			new ErrorResponse(`Not Found a Course with an id of ${id}!`, 404)
		)
	}
    res.status(200).json({
        success: true,
        msg: `Faq with an id of ${id} was deleted successfully!`
    })
})


