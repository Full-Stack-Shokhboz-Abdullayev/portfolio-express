const express = require("express")
const router = express.Router()
const {
	getAllProjects,
	postProject,
	deleteProject,
	updateProject,
	getFeaturedProjects,
	drop
} = require("../../controllers/about/projects")

const { protect, authorize } = require("../../middleware/auth")

router
	.route("/")
	.get(getAllProjects)
	.post(protect, authorize("admin"), postProject)
router.route("/featured").get(getFeaturedProjects)

router
	.route("/:id")
	.delete(protect, authorize("admin"), deleteProject)
	.put(protect, authorize("admin"), updateProject)
router.route("/drop").get(protect, authorize("admin"), drop)

module.exports = router
