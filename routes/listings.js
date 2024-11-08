const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/CustomError.js");
const Listing = require("../models/listings");
const { isLoggedNew, isLoggedEdit, isLoggedDelete, isOwner, isLogged } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// const { schemaValidation } = require("../SchemaValidation.js");

// const schemaValidate = (req, res, next) => {
//     let { error } = schemaValidation.validate(req.body);
//     if (error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new CustomError(400, errMsg);
//     }
//     next();
// }

// router.get("/", (req, res) => {
//     res.render("root.ejs");
// });

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedNew, upload.single("listing[image]"), wrapAsync(listingController.newListingPost));
    

router.get("/new", isLoggedNew, wrapAsync(listingController.newListingFrom));

router.route("/:id")
    .get( wrapAsync(listingController.showListing))
    .put(isLoggedEdit, isOwner, upload.single("listing[image]"), wrapAsync(listingController.edit))
    .delete(isLoggedDelete, isOwner, wrapAsync(listingController.delete));

router.get("/:id/edit", isLoggedEdit, isOwner, wrapAsync(listingController.editForm));

module.exports = router;