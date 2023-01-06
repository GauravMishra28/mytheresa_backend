const express= require("express")
const { register, login, forgotpassword, resetpassword } = require("../controllers/auth")
const router= express.Router()

// router.route("/register").post(register) OR
router.post("/register",register)

router.route("/login").post(login)

router.route("/forgot").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)

module.exports= router