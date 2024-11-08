const mongoose = require("mongoose");
const Review = require("./reviews");
const { string } = require("joi");

main().then((res) => {
    console.log("connected to DB");
}).catch((err) => {
    console.log("DB connection error");
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        filename: String
    },
    price: {
        type: Number,
        required: true,

    },
    location: {
        type: String,
        required: true,

    },
    country: {
        type: String,
        required: true,

    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;