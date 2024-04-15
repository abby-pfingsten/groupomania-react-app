const express = require("express")

const userRouter = require("./routes/user")
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
// app.use("/images", express.static(path.join(__dirname, "images")));
// app.use("/api/auth", userRoutes);
// app.use("/api/sauces", sauceRoutes);
app.use("/api/user", userRouter)

// // need app.use for login?
// module.exports = app;
