const User = require('../models/User');
const Spots = require('../models/Spots');

const store = async (req,res) =>{
    const { company, price, techs } = req.body
    const { user_id } = req.headers;

    const usuario = await User.findById(user_id);
    if(!usuario) 
return res.status(400).json({error:'Usuáro não existe!!!'})

    const spot = await Spots.create({
        user: user_id,
        company,
        price,
        techs: techs.split(',').map(tech=> tech.trim()),
    })

    return res.json(spot)
}

module.exports = { store }