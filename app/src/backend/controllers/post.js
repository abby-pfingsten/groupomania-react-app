const { Post } = require("../models")
const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createPost = (req, res, next) => {
  // if (req.file) {
  const url = req.protocol + "://" + req.get("host")
  req.body.post = JSON.parse(req.body.post)

  // const post = Post.create({
  //   title: req.body.title,
  //   body: req.body.body,
  //   media: req.body.media,
  //   UserId: req.body.UserId,
  // })
  // } else {
  // const post = Post.create({
  //   title: req.body.title,
  //   body: req.body.body,
  //   media: req.body.media,
  //   UserId: req.body.UserId,
  // })
  // }

  const post = Post.create({
    title: req.body.post.title,
    body: req.body.post.body,
    media: url + "/images/" + req.file.filename,
    UserId: req.body.post.UserId,
  })
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
