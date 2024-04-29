const { Post } = require("../models")
const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createPost = (req, res, next) => {
  // req.body.post = JSON.parse(req.body)

  //   const url = req.protocol + "://" + req.get("host")

  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    media: req.body.media,
  })
  // const post = Post.create(
  //   {
  //     title: req.body.title,
  //     body: req.body.body,
  //     media: req.body.media,
  //   },
  //   {
  //     include: [
  //       {
  //         association: Post.User,
  //         // include: [User.Addresses],
  //       },
  //     ],
  //   }
  // )
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
