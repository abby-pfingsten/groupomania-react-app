const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")

const postCtrl = require("../controllers/post")

router.post("/post", auth, multer, postCtrl.createPost)
router.get("/getposts", auth, multer, postCtrl.getAllPosts)

module.exports = router
