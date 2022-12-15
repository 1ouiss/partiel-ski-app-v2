const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }],
    isAvailable: {
        type: Boolean,
        default: true
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;