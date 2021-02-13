const express = require("express")
const router = express.Router()
const {
	subscribeToNewsletter,
	getSubscribers
} = require("../../controllers/blogs/newsletter")

router.route("/").post(subscribeToNewsletter).get(getSubscribers)



module.exports = router
