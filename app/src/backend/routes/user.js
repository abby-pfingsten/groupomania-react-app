const express = require("express")
const router = express.Router()

// const auth = require("../middleware/auth")
// const multer = require("../middleware/multer-config")

const userCtrl = require("../controllers/user")

router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)
router.get("/:userId", userCtrl.getOneUser)
router.delete("/:userId", userCtrl.deleteOneUser)

module.exports = router
