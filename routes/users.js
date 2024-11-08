const express = require("express");
const router = express.Router();
const User = require("../models/users");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const userController = require("../controllers/users");

router.route("/signup")
    .get(userController.signup)
    .post(wrapAsync(userController.postSignup));

router.route("/login")
    .get(userController.login)
    .post(passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.postLogin);

router.get("/logout", userController.logout);

module.exports = router;