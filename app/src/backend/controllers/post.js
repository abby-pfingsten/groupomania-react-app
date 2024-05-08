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
    console.log("test")
    postInfo = JSON.parse(req.body.post)
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
  Post.findAll()
    .then((posts) => {
      res.status(200).json(posts)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.getOnePost = (req, res, next) => {
  Post.findByPk(req.params.postid)
    .then((post) => {
      if (post) {
        res.status(200).json(post)
      } else {
        res.status(404).json({
          error: "Post not found",
        })
      }
      console.log("found one post")
    })
    .catch((error) => {
      console.log(error)

      res.status(404).json({
        error: error.message,
      })
    })
}
