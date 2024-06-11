const ModelUser = require('../models/user')
const singUpController = {}
const bcrypt = require('bcrypt');

singUpController.get  = async (req, res) =>{
    return res.render('session/signup', { req: req });
}

singUpController.post  = async (req, res) =>{
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await ModelUser.create({ username, password: hashedPassword });
        return res.redirect('/login');
    } catch (error) {
        return res.send('Username already exists');
    }
}

module.exports = singUpController;