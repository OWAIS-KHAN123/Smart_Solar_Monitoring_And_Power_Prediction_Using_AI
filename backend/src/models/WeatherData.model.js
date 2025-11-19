// Weather Data Model
const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  feelsLike: {
    type: Number,
  },
  humidity: {
    type: Number,
    required: true,
  },
  pressure: {
    type: Number,
  },
  cloudCoverage: {
    type: Number,
  },
  windSpeed: {
    type: Number,
  },
  windDirection: {
    type: Number,
  },
  uvIndex: {
    type: Number,
  },
  weatherDescription: {
    type: String,
  },
  visibility: {
    type: Number,
  },
});

module.exports = mongoose.model('WeatherData', weatherDataSchema);