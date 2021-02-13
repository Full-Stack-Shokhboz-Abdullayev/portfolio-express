const asyncHandler = require("../../middleware/async")
const ErrorResponse = require("../../utils/ErrorResponse")
const Blog = require("../../models/blogs/Blog")
const Newsletter = require("../../models/blogs/Newsletter")
const slugify = require("slugify")
const nodemailer = require("nodemailer")

let transport

nodemailer.createTestAccount((err, account) => {
	transport = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false,
		auth: {
			user: account.user, // generated ethereal user
			pass: account.pass // generated ethereal password
		},
		tls: {
			// do not fail on invalid certs
			rejectUnauthorized: false
		}
	})
})
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

exports.getSingleBlog = asyncHandler(async (req, res) => {
	const { slug } = req.params
	const blog = await Blog.findOne({
		slug
	}).select("-sortDate")

	if (!blog) {
		new ErrorResponse(`Not Found a Blog with an slug of ${slug}!`, 404)
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
		new ErrorResponse(`Can not add a Blog!`, 500)
	} else {
		res.status(200).send({
			success: true,
			msg: `Added a new blog!`,
			data: newBlog
		})

		let message = {
			from: "shokhboz11abdullayev@gmail.com" // Sender address
		}

		const subscribers = await Newsletter.find({})
		subscribers.forEach((i) => {
			message.to = i.email
			message.html = `
			<h1>New Blog from <a href="https://shox-pro.com">shox-pro.com</a></h1>
			<h2>${newBlog.heading}</h2> 
			<p>
				${newBlog.tag}
			</p>
			<a href="localhost:8080/blogs/${newBlog.slug}">Read More</a>
			`
			transport.sendMail(message, function (err, info) {
				if (err) {
					console.log(err)
				} else {
					console.log(info)
				}
			})
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
		sucess: true,
		msg: `Dropped!`
	})
})
