const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

require('./app_api/models/db');
const Trip = mongoose.model('trips');

const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'trips.json'), 'utf8')
);

const seedDatabase = async () => {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log('Trips collection populated successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDatabase();