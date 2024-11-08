const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/CustomError.js");
const Review = require("../models/reviews");
const { reviewValidation } = require("../SchemaValidation.js");
const Listing = require("../models/listings");
const { reviewSchemaValidate, isOwnerOfReview, isLogged } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


router.post("/", isLogged, reviewSchemaValidate, wrapAsync(reviewController.postingReview));

router.delete("/:reviewId", isOwnerOfReview, wrapAsync(reviewController.deleteReview));

module.exports = router;