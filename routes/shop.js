const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const shopController = require('../controllers/shop'); 

//const adminData = require('./admin');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/cart', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
