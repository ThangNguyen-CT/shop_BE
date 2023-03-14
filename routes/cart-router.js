const express = require('express');
const router = express.Router();
const cart = require('../controller/cart-controller');

router.get('/find/:userId',cart.getdata);
router.post('/add',cart.adddata);
router.get('/all',cart.getall);
router.put('/up/:id',cart.updatedata);
router.delete('/del/:userid',cart.deletedata);
module.exports = router;