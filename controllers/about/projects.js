const Project = require("../../models/about/Project")
const ErrorResponse = require("../../utils/ErrorResponse")
const asyncHandler = require("../../middleware/async")

// @ROUTE         '/projects'
// @DESC          Get All Projects
// @METHOD        GET
// @ACCESS		  Public

exports.getAllProjects = asyncHandler(async (req, res) => {
	const projects = await Project.find().sort('-completedDate')
	res.status(200).json({
		sucess: true,
		msg: "Found all Projects in Database.",
		count: projects.length,
		data: projects
	})
})

// @ROUTE         '/projects'
// @DESC          Get Latest Projects
// @METHOD        GET
// @ACCESS		  Public

exports.getFeaturedProjects = asyncHandler(async (req, res) => {
	const projects = await Project.find().sort({completedDate: -1}).limit(4)
	res.status(200).json({
		sucess: true,
		msg: "Found Featured Projects in Database.",
		count: projects.length,
		data: projects
	})
})

// @ROUTE         '/projects'
// @DESC          Post a Project
// @METHOD        POST
// @ACCESS		  Admin Only

exports.postProject = asyncHandler(async (req, res) => {
	const newProject = await Project.create(req.body)
	res.status(200).json({
		sucess: true,
		msg: `${newProject.title} was posted successfully!`,
		data: newProject
	})
})

// @ROUTE         '/projects'
// @DESC          Delete a Project
// @METHOD        DELETE
// @ACCESS		  Admin Only

exports.deleteProject = asyncHandler(async (req, res) => {
	const { id } = req.params
	const project = await Project.findByIdAndDelete(id)
	if (project.deletedCount === 0) {
		return next(
			new ErrorResponse(`Not Found a Course with an id of ${id}!`, 404)
		)
	}
	res.status(200).json({
		sucess: true,
		msg: `Project with an id of ${id} was deleted successfully!`
	})
})

// @ROUTE         '/projects'
// @DESC          Delete a Project
// @METHOD        DELETE
// @ACCESS		  Admin Only

exports.updateProject = asyncHandler(async (req, res) => {
	const { id } = req.params
	const updatedProject = await Project.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
	// if (project.deletedCount === 0) {
	// 	return next(
	// 		new ErrorResponse(`Not Found a Course with an id of ${id}!`, 404)
	// 	)
	// }
	res.status(200).json({
		sucess: true,
		msg: `Project with an id of ${id} was updated successfully!`,
		data: updatedProject,
	})
})

// @ROUTE         '/drop'
// @DESC          Drop a ProjectSchema set
// @METHOD        GET
// @ACCESS		  Admin Only

exports.drop = asyncHandler(async (req, res) => {

	const project = Project.collection.dropIndexes((err, results) => {
		if(err) {
			console.log(err);
		} else {
			console.log(results);
		}
	})
	res.status(200).json({
		sucess: true,
		msg: `Dropped!`
	})
})
