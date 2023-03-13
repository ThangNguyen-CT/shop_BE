const express = require('express');
const router = express.Router();
const product = require('../controller/product-controller');

router.get('/all',product.getall);
router.get('/find/:id',product.getone);
router.post('/add',product.adddata);
router.put('/update/:id',product.updatedata);
router.delete('/delete/:id',product.deletedata);

module.exports = router;