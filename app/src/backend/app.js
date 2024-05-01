// local % cd mysql
// mysql % cd bin
// bin % ls
// bin % ./mysql -u root -p
const express = require("express")
const path = require("path")

const userRouter = require("./routes/user")
const postRouter = require("./routes/post")

const app = express()
require("./models")

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  )
  next()
})

// // app.use("/api/stuff", stuffRoutes);
app.use("/images", express.static(path.join(__dirname, "images")))
app.use("/api/auth", userRouter)
app.use("/api/auth", postRouter)

// // need app.use for login?
module.exports = app
