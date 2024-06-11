
const ModelUser = require('../models/user')
const UserController = {}


UserController.get = async (req, res) => {
    return res.render('index', { req: req});
}

module.exports = UserController