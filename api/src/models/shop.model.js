const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    addresse: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;