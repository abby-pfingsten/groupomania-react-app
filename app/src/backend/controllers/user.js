const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      accountActive: req.body.accountActive,
    })
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "User added successfully!",
        })
      })
      .catch((error) => {
        res.status(500).json({
          error: error.message,
        })
      })
  })
}

exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email, accountActive: "Yes" } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        })
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error("Incorrect password!"),
            })
          }
          const token = jwt.sign(
            { userId: user.id },
            process.env.RANDOM_TOKEN_SECRET,
            {
              expiresIn: "24h",
            }
          )
          res.status(200).json({
            userId: user.id,
            token: token,
            name: user.name,
          })
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          })
        })
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      })
    })
}

exports.getOneUser = (req, res, next) => {
  User.findByPk(req.params.userId)
    .then((user) => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({
          error: "Post not found",
        })
      }
      console.log("Found one user")
    })
    .catch((error) => {
      console.log(error)

      res.status(404).json({
        error: error.message,
      })
    })
}

exports.deleteOneUser = (req, res, next) => {
  User.findByPk(req.params.userId)
    .then((user) => {
      if (user) {
        user
          .update({ accountActive: "No" })
          .then((user) => {
            user.save().then((user) => {
              res.status(200).json(user)
              console.log("Successfully deleted one user")
            })
          })
          .catch((error) => {
            res.status(500).json(error.message)
            console.log(error.message)
          })
      } else {
        res.status(404).json({
          error: "User not found",
        })
      }
      // console.log("Deleting one user")
    })
    .catch((error) => {
      console.log(error)

      res.status(404).json({
        error: error.message,
      })
    })
}
