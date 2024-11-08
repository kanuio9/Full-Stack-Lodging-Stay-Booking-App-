const Listing = require("../models/listings");

module.exports.index = async (req, res) => {
    let listings = await Listing.find({});
    return res.render("index.ejs", { listings });
};

module.exports.newListingFrom = async (req, res) => {
    return res.render("newListing.ejs");
};


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate({
        path: 'reviews',           // Populate the reviews array first
        populate: {
            path: 'reviewOwner',    // Then, populate reviewOwner inside each review
            select: 'username'      // Only select the username field from the User model
        }
    }).populate("owner");
    if(!listing) {
        req.flash("error", "The listing you're trying to access is no longer exists!");
        return res.redirect("/listings");
    }
    return res.render("show.ejs", { listing });
};

module.exports.newListingPost = async (req, res) => {
    let newListing = new Listing(req.body.listing);
    let url = req.file.path;
    let filename = req.file.filename;
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "new listing added successfully!");
    return res.redirect(`/listings/${newListing._id}`);
};

module.exports.editForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "The listing you're trying to access is no longer exists!");
        return res.redirect("/listings");
    }
    
    let originalImageURL = listing.image.url;
    originalImageURL = originalImageURL.replace("/upload/", "/upload/h_250/");
    console.log(originalImageURL);
    return res.render("edit.ejs", { listing, originalImageURL });
};

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Updated!");
    return res.redirect(`/listings/${id}`);
};

module.exports.delete = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndDelete(id);
    console.log(listing);
    req.flash("success", "Listing removed!");
    return res.redirect("/listings");
};