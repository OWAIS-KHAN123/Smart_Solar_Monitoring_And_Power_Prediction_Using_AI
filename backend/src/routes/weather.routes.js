// Weather Routes
const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weather.controller');

// GET /api/weather/latest - Get latest weather
router.get('/latest', WeatherController.getLatestWeather);

// GET /api/weather/history - Get weather history
router.get('/history', WeatherController.getWeatherHistory);

module.exports = router;