const Listing = require("../models/listings");
const Review = require("../models/reviews");

module.exports.postingReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    console.log(listing);
    let newReview = new Review(req.body.review);
    newReview.reviewOwner = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "new review added!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "review deleted!");
    res.redirect(`/listings/${id}`);
};