const User = require("../models/users");

module.exports.signup = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.postSignup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({
            email: email,
            username: username,
        });
        let registeredUser = await User.register(newUser, password);
        req.login( registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wandurlust!");
            res.redirect("/listings");
        });
    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.login = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.postLogin = async (req, res) => {
    req.flash("success", "Welcome back to Wandurlust");
    res.redirect("/listings");
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are Logged out!");
        res.redirect("/listings");
    });
};