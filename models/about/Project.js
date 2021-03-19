const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please fill in this field."],
		unique: true,
		trim: true,
		maxlength: 25
	},
	description: {
		type: String,
		required: [true, "Please fill in this field."],
		unique: true,
		trim: true,
		maxLength: 150
	},
	client: {
		type: String,
		required: [true, "Please fill in this field."],
		trim: true,
		maxlength: 25
	},
	url: {
		type: String,
		required: [true, "Please fill in this field."],
		unique: true,
		trim: true,
		maxlength: 255,
		match: [
			/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
			"Please enter a real website with HTTP or HTTPS protocol!"
		]
	},
	type: [
		{
			type: String,
			enum: ["web", "mobile", "frontend", "backend"],
			lowercase: true,
			required: [true, "Please fill in this field."]
		}
	],
	image: {
		type: String,
		required: [true, "Please fill in this field."],
		unique: true
	},
	completedDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Project", ProjectSchema)
