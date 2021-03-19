const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const cookieParser = require("cookie-parser")
const errorHandler = require("./middleware/error")
const cors = require("cors")
const path = require("path")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const xssClean = require("xss-clean")
const hpp = require("hpp")
const expressRateLimit = require("express-rate-limit")
// console colored
const colors = require("colors")

dotenv.config({
	path: "./config/config.env"
})

connectDB()

// Our App
const app = express()

const PORT = process.env.PORT || 5000

const morgan = require("morgan")
const MODE = process.env.NODE_ENV || "production"

// Morgan logger package if development
if (MODE === "development") {
	const morgan = require("morgan")
	app.use(morgan("dev"))
	// * > client/build/public/index.html
}

//Enabling cors
const corsOptions = {
	origin: "http://localhost:8080",
	credentials: true
	// optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

if (process.env.NODE_ENV === "production") {
	corsOptions.origin = "https://shox-pro.com"
}

app.use(cors(corsOptions))

//Body Parser
app.use(express.json())

//sanitize Data
app.use(mongoSanitize())

// // Set Security Headers
app.use(helmet())

// // Prevent Xss attacks
app.use(xssClean())

// Rate limiting
const limiter = expressRateLimit({
	windowMs: 10 * 60 * 1000,
	max: 100
})
app.use(limiter)

// Cookie Parser
app.use(cookieParser())

// Routes and Controllers
const projectsRouter = require("./routes/about/projects")
const faqsRouter = require("./routes/about/faqs")
const blogsRouter = require("./routes/blogs/blogs")
const newsletterRouter = require("./routes/blogs/newsletter")
const contactRouter = require("./routes/contact/index")
const authRouter = require("./routes/auth")

app.use("/shox-api/subscribers", newsletterRouter)
app.use("/shox-api/projects", projectsRouter)
app.use("/shox-api/faqs", faqsRouter)
app.use("/shox-api/blogs", blogsRouter)
app.use("/shox-api/send-msg", contactRouter)
app.use("/shox-api/auth", authRouter)

// Configuring http and stuff like that
app.use(errorHandler)

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}, in ${MODE} mode.`.blue.bold)
})

process.on("unhandledRejection", (err) => {
	console.log(`Unhandled Rejection: ${err.message}`.red.bold)

	server.close(() => process.exit(1))
})
