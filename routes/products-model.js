const express = require('express');
const router = express.Router();
const product = require('../controller/product-controller');

router.get('/',product.getall);
router.post('/add',product.addproduct);
module.exports = router;