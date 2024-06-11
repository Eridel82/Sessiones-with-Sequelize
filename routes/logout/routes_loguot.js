const express = require('express');
const router = express.Router();
const logOutController = require('../../controlers/logout')

router.get('/', logOutController.get);

module.exports = router;