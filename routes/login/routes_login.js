const express = require('express');
const router = express.Router();
const LoginController = require('../../controlers/login')

router.get('/', LoginController.get);

router.post('/', LoginController.post);

module.exports = router;