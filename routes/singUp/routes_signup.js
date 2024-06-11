const express = require('express');
const router = express.Router();
const singUpController = require('../../controlers/signup')

router.get('/', singUpController.get);
router.post('/', singUpController.post);

module.exports = router;