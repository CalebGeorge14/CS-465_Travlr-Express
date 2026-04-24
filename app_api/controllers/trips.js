const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsFindCode = async (req, res) => {
  const tripCode = req.params.tripCode;

  try {
    const trip = await Trip.findOne({ code: tripCode });

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.tripId,
      req.body,
      { new: true }
    );

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(400).json(err);
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image || 'default.jpg',
      description: req.body.description || ''
    });

    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindCode,
  tripsAddTrip,
  tripsUpdateTrip
};