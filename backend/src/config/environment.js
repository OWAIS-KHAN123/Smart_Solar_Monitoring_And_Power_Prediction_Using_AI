// Load environment variables
require('dotenv').config();

module.exports = {
  // Server
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/solar_db',
  
  // OpenWeatherMap API
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  DEFAULT_LATITUDE: parseFloat(process.env.LATITUDE) || 40.7128,
  DEFAULT_LONGITUDE: parseFloat(process.env.LONGITUDE) || -74.006,
  
  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
};