const router = require('express').Router();
const shopController = require('../controllers/shop.controller');

const endPoint = '/shop'

router.get(`${endPoint}/`, shopController.getAllShops);
router.get(`${endPoint}/:id`, shopController.getShopById);
router.post(`${endPoint}/`, shopController.create);
router.put(`${endPoint}/:id`, shopController.update);

module.exports = router;