const ModelUser = require('../models/user')
const ProfileController = {}

ProfileController.get = async (req, res) => {
    const user = await ModelUser.findByPk(req.session.userId);
    try {
        return res.render('session/profile', { req: req, user });
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
        return res.status(500).send('Error del servidor');
    }
}

module.exports = ProfileController