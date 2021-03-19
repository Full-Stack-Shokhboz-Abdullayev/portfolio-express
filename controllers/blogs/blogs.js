const asyncHandler = require("../../middleware/async")
const ErrorResponse = require("../../utils/ErrorResponse")
const Blog = require("../../models/blogs/Blog")
const Newsletter = require("../../models/blogs/Newsletter")
const slugify = require("slugify")
const nodemailer = require("nodemailer")
const sendMail = require("../../utils/sendEmail")

// @ROUTE         '/blogs'
// @DESC          Get All Blogs
// @METHOD        GET
// @ACCESS		  Public

exports.getAllBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find({}).sort({ sortDate: -1 }).select("-sortDate")

	console.log(blogs)
	res.status(200).send({
		success: true,
		msg: "All Blogs were found.",
		count: blogs.length,
		data: blogs
	})
})

// @ROUTE         '/blogs/latest'
// @DESC          Get Latest Blogs
// @METHOD        GET
// @ACCESS		  Public

exports.getLatestBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find({})
		.sort({ sortDate: -1 })
		.limit(3)
		.select("-sortDate")

	res.status(200).send({
		success: true,
		msg: "All latest Blogs were found.",
		count: blogs.length,
		data: blogs
	})
})

// @ROUTE         '/blogs/:slug'
// @DESC          Get a Blog by id
// @METHOD        GET
// @ACCESS		  Public

exports.getSingleBlog = asyncHandler(async (req, res, next) => {
	const { slug } = req.params
	const blog = await Blog.findOne({
		slug
	}).select("-sortDate")

	if (!blog) {
		return next(
			new ErrorResponse(`Not Found a Blog with an slug of ${slug}!`, 404)
		)
	}
	res.status(200).send({
		success: true,
		msg: `The Blog with an slug of ${slug} was found.`,
		data: blog
	})
})

// @ROUTE         '/blogs'
// @DESC          Post a Blog
// @METHOD        POST
// @ACCESS		  Admin Only

exports.postBlog = asyncHandler(async (req, res) => {
	const newBlog = await Blog.create({
		...req.body
	})

	if (!newBlog) {
		return next(new ErrorResponse(`Error can not add a blog!`, 500))
	} else {
		const subscribers = await Newsletter.find({})
		console.log(subscribers)
		await sendMail({
			email: subscribers.map((subscriber) => subscriber.email).join(", "),
			subject: "New Post in shox-pro.com: " + newBlog.heading,
			message: `${newBlog.tag} Full Post Can Be Read Here http://localhost:8080/blog/${newBlog.slug}
			`
		})
		res.status(200).send({
			success: true,
			msg: `Added a new blog!`,
			data: newBlog
		})
	}
})

// @ROUTE         '/blogs/:id'
// @DESC          Delete a Blog by id
// @METHOD        DELETE
// @ACCESS		  Admin Only

exports.deleteBlog = asyncHandler(async (req, res) => {
	const { id } = req.params

	const removalBlog = await Blog.deleteOne({
		_id: id
	})
	if (removalBlog.deletedCount === 0) {
		new ErrorResponse(`Can not delete a Blog with an id of ${id}!`, 500)
	}

	res.status(200).send({
		success: true,
		msg: `Deleted a Blog with an id of ${id}.`
	})
})

// @ROUTE         '/blogs/:id'
// @DESC          Update a Blog by id
// @METHOD        PUT
// @ACCESS		  Admin Only

exports.updateBlog = asyncHandler(async (req, res) => {
	const { id } = req.params

	let updatedBody
	if (req.body.heading) {
		updatedBody = {
			...req.body,
			slug: slugify(req.body.heading, { lower: true })
		}
	} else {
		updatedBody = {
			...req.body
		}
	}
	const updatedBlog = await Blog.findByIdAndUpdate(id, updatedBody, {
		runValidators: true,
		new: true
	})
	if (!updatedBlog) {
		new ErrorResponse(`Can not update a Blog with an id of ${id}!`, 500)
	}

	res.status(200).send({
		success: true,
		msg: `Updated a Blog with an id of ${id}.`,
		data: updatedBlog
	})
})

// @ROUTE         '/blogs/delete-all'
// @DESC          Delete All
// @METHOD        DELETE
// @ACCESS		  Admin Only

exports.deleteAll = asyncHandler(async (req, res) => {
	await Blog.deleteMany()

	res.status(200).send({
		success: true,
		msg: `All deleted`
	})
})

exports.drop = asyncHandler(async (req, res) => {
	Blog.collection.dropIndexes((err, results) => {
		if (err) {
			console.log(err)
		} else {
			console.log(results)
		}
	})
	res.status(200).json({
		success: true,
		msg: `Dropped!`
	})
})

// @ROUTE         '/blogs/clap'
// @DESC          Clap
// @METHOD        PUT
// @ACCESS		  Public

exports.clap = asyncHandler(async (req, res) => {
	const blog = await Blog.findByIdAndUpdate(
		req.params.id,
		{
			...req.body
		},
		{ new: true, runValidators: true }
	)

	res.status(200).json({
		success: true,
		data: {
			claps: blog.claps
		}
	})
})
