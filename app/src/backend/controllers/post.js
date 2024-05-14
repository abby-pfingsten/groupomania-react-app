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
  Post.findAll({
    order: [["createdAt", "DESC"]],
  })
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

exports.markPostAsRead = (req, res, next) => {
  Post.findOne({ id: req.params.id }).then((readPosts) => {
    let currentPost = new Post({ id: req.params.id })
    const currentUser = req.body.UserId

    // initialize the empty array
    // and users liked/disliked arrays
    let newReadUsers  = []
    let readUsers = [...readPosts.usersRead]

    // if (req.body.like === 1) {
    //   // you only want a user to be able to like
    //   if (!readPosts.usersLiked.includes(requestUserId)) {
    //     ;({ dislikedUsers, dislikeCount, likedUsers, likeCount } =
    //       resetLikeCount(
    //         dislikedUsers,
    //         requestUserId,
    //         dislikeCount,
    //         likedUsers,
    //         likeCount
    //       ))

    //     likeCount += 1
    //     likedUsers.push(requestUserId)
    //   }
    // } else if (req.body.like === -1) {
    //   if (!readPosts.usersDisliked.includes(requestUserId)) {
    //     ;({ dislikedUsers, dislikeCount, likedUsers, likeCount } =
    //       resetLikeCount(
    //         dislikedUsers,
    //         requestUserId,
    //         dislikeCount,
    //         likedUsers,
    //         likeCount
    //       ))

    //     dislikeCount += 1
    //     dislikedUsers.push(requestUserId)
    //   }
    // } else {
    //   // you only want this chunk to do anything if the
    //   // user is the same aka they have already liked
    //   // or disliked something
    //   ;({ dislikedUsers, dislikeCount, likedUsers, likeCount } = resetLikeCount(
    //     dislikedUsers,
    //     requestUserId,
    //     dislikeCount,
    //     likedUsers,
    //     likeCount
    //   ))
    // }

    // sauce = {
    //   _id: req.params.id,
    //   userId: readPosts.userId,
    //   name: readPosts.name,
    //   manufacturer: readPosts.manufacturer,
    //   description: readPosts.description,
    //   mainPepper: readPosts.mainPepper,
    //   imageUrl: readPosts.imageUrl,
    //   heat: readPosts.heat,
    //   likes: (readPosts.likes += likeCount),
    //   dislikes: (readPosts.dislikes += dislikeCount),
    //   usersLiked: likedUsers,
    //   usersDisliked: dislikedUsers,
    // }
    // }
    // Post.updateOne({ _id: req.params.id }, sauce)
    //   .then(() => {
    //     res.status(201).json({
    //       message: "Sauce likes updated successfully!",
    //     })
    //   })
    //   .catch((error) => {
    //     res.status(400).json({
    //       error: error,
    //     })
    //   })
  })
}
