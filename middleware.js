const Listing = require("./models/listings");
const { reviewValidation } = require("./SchemaValidation");
const Review = require("./models/reviews");

module.exports.isLoggedNew = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash("error", "You must be login to create a listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.isLoggedEdit = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash("error", "You must be login to edit this listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.isLoggedDelete = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash("error", "You must be login to delete this listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You're not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.reviewSchemaValidate = (req, res, next) => {
    let { error } = reviewValidation.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new CustomError(400, errMsg);
    }
    next();
};

module.exports.isOwnerOfReview = async (req, res, next) => {
    let { reviewId } = req.params;
    let reviewCreator = await Review.findById(reviewId);
    if (!reviewCreator) {
        req.flash("error", "Review not found!");
        return res.redirect(`/listings/${req.params.id}`);
    }

    if(!res.locals.currUser ) {
        req.flash("error", "You must be logged in to create a review!");
        return res.redirect("/login");
    }

    if(!reviewCreator.reviewOwner || !reviewCreator.reviewOwner.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to remove this review!");
        return res.redirect(`/listings/${req.params.id}`);
    }
    next();
};


module.exports.isLogged = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.flash("error", "You must be login to create a review!");
        return res.redirect("/login");
    }
    next();
};