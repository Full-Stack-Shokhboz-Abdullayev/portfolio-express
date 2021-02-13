const express = require("express")
const router = express.Router()

const {
	getAllFaqs,
	postFaq,
	deleteFaq,
	updateFaq
} = require("../../controllers/about/faqs")

const { protect, authorize } = require("../../middleware/auth")

router.route("/").get(getAllFaqs).post(protect, authorize("admin"), postFaq)
router
	.route("/:id")
	.put(protect, authorize("admin"), updateFaq)
	.delete(protect, authorize("admin"), deleteFaq)

module.exports = router
