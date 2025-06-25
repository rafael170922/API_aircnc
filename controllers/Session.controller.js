const User = require('../models/User');

const store = async (req, res) => {
    const { email } = req.body;
    console.log(email);

    let usuario = await User.findOne({email})
}

module.exports = { store }