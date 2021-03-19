// importing mongoose
const mongoose = require("mongoose")

// Newsletter Schema
const NewsletterSchema = new mongoose.Schema({
	email: {
		type: String,
		max: 500,
		unique: true
	}
})

//exporting registered schema
module.exports = mongoose.model("Newsletter", NewsletterSchema)
