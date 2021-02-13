const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema({
    question: {
        type: String,
        maxLength: 70,
        trim: true,
        unique: true,
		required: [true, "Please fill in this field."],

    },
    answer: {
        type: String,
        maxLength: 270,
        trim: true,
        unique: true,
		required: [true, "Please fill in this field."],
    },
    isOpen: {type: String, default: false}
})


module.exports = mongoose.model('Faq', FaqSchema)