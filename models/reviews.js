const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    reviewOwner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = new mongoose.model("Review", reviewSchema);
