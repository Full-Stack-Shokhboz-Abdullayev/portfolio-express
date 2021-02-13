"use strict"
const nodemailer = require("nodemailer")

const {
	SMTP_HOST,
	SMTP_PORT,
	SMTP_EMAIL,
	SMTP_PASSWORD,
	FROM_EMAIL,
	FROM_NAME
} = process.env



const sendMail = async (options) => {
    console.log(SMTP_HOST);
    // create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		service: "gmail",
		port: SMTP_PORT,
		auth: {
			user: "shokhboz11abdullayev@gmail.com",
			pass: "fullstack2020$"
		}
	})

	// send mail with defined transport object
	const message = {
		from: `${FROM_NAME} < ${FROM_EMAIL} >`, // sender address
		to: options.email,                     // list of receivers
		subject: options.subject,             // Subject line
		text: options.message                // plain text body
	}
    console.log(message);

	const info = await transporter.sendMail(message)

	console.log("Message sent: %s", info.messageId)
	
}

module.exports = sendMail