const express = require("express")
const router = express.Router()
const {
	getAllBlogs,
	getSingleBlog,
	getLatestBlogs,
	postBlog,
	deleteBlog,
	updateBlog,
	deleteAll,
	drop
} = require("../../controllers/blogs/blogs")

const { protect, authorize } = require("../../middleware/auth")

router.route("/").get(getAllBlogs).post(protect, authorize("admin"), postBlog)

router.route("/latest").get(getLatestBlogs)

router.route("/delete-all").delete(protect, authorize("admin"), deleteAll)

router
	.route("/:id")
	.delete(protect, authorize("admin"), deleteBlog)
	.put(protect, authorize("admin"), updateBlog)

router.route("/:slug").get(getSingleBlog)
router.route("/drop").patch(drop)

module.exports = router
