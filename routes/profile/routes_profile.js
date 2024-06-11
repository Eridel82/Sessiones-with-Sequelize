const express = require('express');
const router = express.Router();
const ProfileController = require('../../controlers/profile')
const isAuthenticated = require('../../middlewares/auth');

router.get('/', isAuthenticated,ProfileController.get);

module.exports = router;