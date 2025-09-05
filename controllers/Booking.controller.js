const Booking = require("../models/Booking");

const store = async (req, res) => {
  const { user_id } = req.headers;
  const { spot_id } = req.params;
  const { date } = req.body;

  const booking = await Booking.create({
    user: user_id,
    spot: spot_id,
    date,
  });

  await booking.populate(["spot", "user"]);

  return res.json(booking);
};

const storeApproval = async(req, res) =>{
    const { booking_id } = req.params;
    const booking = await Booking.findById(booking_id).populate('spot')

    console.log(booking);

    // booking.approved = true;
    // await booking.save()
    await Booking.updateOne(
        {_id: booking_id},
        {$set: {approved: true}
    })
    
    
    return res.json(booking);
}

const storeRejection = async(req, res) =>{
    const { booking_id } = req.params;
    const booking = await Booking.findById(booking_id).populate('spot')

    console.log(booking);

    await Booking.updateOne(
        {_id: booking_id},
        {$set: {approved: false}
    })

    return res.json(booking);
}

module.exports = { store, storeApproval, storeRejection };
