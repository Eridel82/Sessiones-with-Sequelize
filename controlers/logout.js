const logOutController = {}

logOutController.get  = async (req, res) =>{
    return req.session.destroy(err => {
    if (err) {
        return res.send('Error logging out');
    }
    return res.redirect('/');
    });
}

module.exports = logOutController