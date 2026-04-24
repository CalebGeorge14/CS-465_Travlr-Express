const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');
const authenticateJWT = require('../controllers/authMiddleware');

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsFindCode);
router.post('/trips', authenticateJWT, ctrlTrips.tripsAddTrip);
router.put('/trips/:tripId', authenticateJWT, ctrlTrips.tripsUpdateTrip);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
