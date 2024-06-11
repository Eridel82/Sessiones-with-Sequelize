const ModelUser = require('../models/user')
const LoginController = {}
const bcrypt = require('bcrypt');

LoginController.get  = async (req, res) =>{
    return res.render('session/login', { req: req });
}

LoginController.post  = async (req, res) =>{
    const { username, password } = req.body;
    const user = await ModelUser.findOne({ where: { username } });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user.id;
        return res.redirect('/profile');
    } else {
        return res.send('Invalid username or password');
    }
}


module.exports = LoginController;