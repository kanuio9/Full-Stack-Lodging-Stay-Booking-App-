if(process.env.NODE_ENV != "production") {
    require("dotenv").config()
}

const express = require("express"); 
const app = express();  
const PORT = 3000; 
const path = require("path"); 
const ejsMate = require("ejs-mate"); 
const listingRouter = require("./routes/listings.js"); 
const reviewsRouter = require("./routes/reviews.js"); 
const userRouter = require("./routes/users.js"); 
const methodOverride = require("method-override"); 
const CustomError = require("./utils/CustomError.js");
const session = require("express-session"); 
const flash = require("connect-flash"); 
const passport = require("passport"); 
const LocalStrategy = require("passport-local")
const User = require("./models/users.js");


const store = {
    mongoUrl : process.env.ATLAS_URL,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600
}

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/listings"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
});


app.use((req, res, next) => {
    res.locals.currUser = req.user;
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/", (req, res) => {
    res.render("root.ejs");
})
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.all("*", (req, res, next) => {
    next(new CustomError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occured" } = err;
    res.status(status).render("error.ejs", { message });
});
