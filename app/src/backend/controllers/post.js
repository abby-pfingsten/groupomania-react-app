const  Post  = require("../models/post")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createPost = (req, res, next) => {
 
    req.body.post = JSON.parse(req.body.post)

//   const url = req.protocol + "://" + req.get("host")

    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        media: req.body.media

  })
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post created successfully!",
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        error: error.message,
      })
    })
}
