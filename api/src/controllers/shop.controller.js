const shopModel = require('../models/shop.model')

const shopController = {
    getAllShops: async (req, res) => {
        try {
            const shops = await shopModel.find().populate("posts").populate('bookings')
            res.send(shops)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    getShopById: async (req, res) => {
        try {
            const shop = await shopModel.findById(req.params.id).populate('posts').populate('bookings')
            res.send(shop)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    create: async (req, res) => {
        try {
            const newShop = new shopModel(req.body);
            await newShop.save();
            res.send(newShop);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    update: async (req, res) => {
        try {
            console.log(req.body);
            const updatedShop = await shopModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(updatedShop);
            res.send(updatedShop)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

module.exports = shopController