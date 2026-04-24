const fs = require('fs');
const path = require('path');

const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

const home = (req, res) => {
  res.render('travlr', {
    title: 'Travlr Getaways',
    introHeading: 'Enjoy the Summer with Us!',
    introText: 'Welcome to Travlr Getaways...',
    active: 'home'  
  });
};

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travel',
    trips,
    active: 'travel'
  });
};

module.exports = {
  home,
  travel
};