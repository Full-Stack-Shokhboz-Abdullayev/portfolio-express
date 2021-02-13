// importing mongoose
const mongoose = require('mongoose');

// Newsletter Schema
const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        max: 500
    }
})

//exporting registered schema
module.exports = mongoose.model('Newsletter', NewsletterSchema)