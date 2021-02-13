const mongoose = require("mongoose")
const slugify = require("slugify")

const BlogSchema = new mongoose.Schema(
	{
		heading: {
			type: String,
			maxLength: 50,
			unique: true,
			required: [true, "Please fill in this field!"]
		},
		content: {
			type: Object,
			// maxLength: 3500,
			unique: true,
			required: [true, "Please fill in this field!"]
		},
		tag: {
			type: String,
			default: "New Blog"
		},
		slug: String,
		publishedDate: String,
		language: {
			type: String,
			enum: ["English", "Русский", "O'zbek"],
			required: [true, "Please fill in this field!"]
		},
		sortDate: Date,
		claps: { type: Number, default: 0 }
	},
	{
		timestamp: true
	}
)

BlogSchema.pre("save", function (next) {
	this.slug = slugify(this.heading, {
		lower: true
	})

	const today = new Date()
	this.sortDate = today
	const dd = String(today.getDate()).padStart(2, "0")
	const mm = String(today.getMonth() + 1).padStart(2, "0")
	const yyyy = today.getFullYear()

	this.publishedDate = `${dd}/${mm}/${yyyy}`

	next()
})

module.exports = mongoose.model("Blog", BlogSchema)
