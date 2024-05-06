const { Post } = require("../models")
const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createPost = (req, res, next) => {
  let postInfo
  let mediaInfo

  if (req.file) {
    postInfo = JSON.parse(req.body.post)

    const url = req.protocol + "://" + req.get("host")
    mediaInfo = url + "/images/" + req.file.filename
  } else {
    postInfo = req.body
    mediaInfo = null
  }

  const post = Post.create({
    title: postInfo.title,
    body: postInfo.body,
    media: mediaInfo,
    UserId: postInfo.UserId,
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

exports.getAllPosts = (req, res, next) => {
  // find method returns an array containing all of the
  // posts in the database
  Post.find()
    .then((posts) => {
      res.status(200).json(posts)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
