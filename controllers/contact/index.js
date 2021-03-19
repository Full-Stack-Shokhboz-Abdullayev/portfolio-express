const { TelegramClient } = require("messaging-api-telegram")

const client = new TelegramClient({
	accessToken: "1446179514:AAE5G3u5GClLkCcaawiLFhsuUyrfJIdMDBQ"
})

exports.sendMessage = async (req, res) => {
	const { fullName, email, package, msg } = req.body

	const fullMessage = `
        Client requsted for work.

        Fullname: ${fullName},

        Email: ${email},

		Selected Package: ${package}

        Message: ${msg}
    `

	await client.sendMessage("653709838", fullMessage)

	console.log("Sent Successfully!")

	res.status(200).json({
		success: true,
		msg: `Hey ${fullName}, your request was sent successfully!`
	})
}