const bookingModel = require('../models/booking.model');
const postModel = require('../models/post.model');
const shopModel = require('../models/shop.model');

const bookingController = {
    getAllBookings: async (req, res) => {
        try {
            const bookings = await bookingModel.find()
            res.send(bookings)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    getBookingById: async (req, res) => {
        try {
            const booking = await bookingModel.findById(req.params.id)
            res.send(booking)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    create: async (req, res) => {
        try {
            const newBooking = new bookingModel(req.body);
            await newBooking.save();
            console.log(newBooking._id);
            //push booking in post
            const post = await postModel.findById(newBooking.post)
            post.bookings.push(newBooking._id)
            post.isAvailable = false
            await post.save()
            //push booking in shop
            const shop = await shopModel.findById(newBooking.shop)
            shop.bookings.push(newBooking._id)
            await shop.save()
            res.send(newBooking);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    update: async (req, res) => {
        try {     
            const booking = await bookingModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(booking);
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    delete: async (req, res) => {
        try {
            const booking = await bookingModel.findByIdAndDelete(req.params.id)
            res.status(204).send({message: "Booking deleted"});
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = bookingController