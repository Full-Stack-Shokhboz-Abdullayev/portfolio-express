const express = require("express")
const router = express.Router()
const {
	register,
	login,
	logout,
	forgotPassword,
	resetPassword,
	updatePassword
} = require("../controllers/auth")

const { protect } = require("../middleware/auth")

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/update-password").put(protect, updatePassword)
router.route("/forgot-password").post(forgotPassword)
router.route("/reset-password/:token").put(resetPassword)

module.exports = router
