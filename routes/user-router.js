const express = require('express');
const router = express.Router();
const user = require('../controller/user-controller');

router.get('/all',user.getall);
router.post('/dangky',user.dangky);
router.post('/dangnhap',user.dangnhap);
router.put('/update/:id',user.updatedata);
router.delete('/del/:id',user.deletedata);

module.exports = router;