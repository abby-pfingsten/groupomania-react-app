const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")

const postCtrl = require("../controllers/post")

router.post("/", auth, multer, postCtrl.createPost)
router.get("/", auth, multer, postCtrl.getAllPosts)
router.get("/:postid", auth, multer, postCtrl.getOnePost)
router.post("/:postid/read", auth, multer, postCtrl.markPostAsRead)

module.exports = router
