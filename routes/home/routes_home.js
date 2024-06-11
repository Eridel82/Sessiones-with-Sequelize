const express = require('express');
const router = express.Router();
const UserController = require('../../controlers/user')

router.get('/', UserController.get);

module.exports = router;
