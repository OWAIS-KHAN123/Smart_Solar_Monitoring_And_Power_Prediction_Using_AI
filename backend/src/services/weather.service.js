// OpenWeather API Service
const axios = require('axios');
const config = require('../config/environment');

class WeatherService {
  static async fetchWeatherData(lat, lon) {
    try {
      const latitude = lat || config.DEFAULT_LATITUDE;
      const longitude = lon || config.DEFAULT_LONGITUDE;
      
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.OPENWEATHER_API_KEY}&units=metric`;

      const response = await axios.get(url);
      const data = response.data;

      return {
        location: data.name || 'Unknown',
        temperature: parseFloat(data.main.temp.toFixed(2)),
        feelsLike: parseFloat(data.main.feels_like.toFixed(2)),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        cloudCoverage: data.clouds.all,
        windSpeed: parseFloat(data.wind.speed.toFixed(2)),
        windDirection: data.wind.deg || 0,
        weatherDescription: data.weather[0].description,
        visibility: data.visibility,
        timestamp: new Date(),
      };
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      throw new Error('Failed to fetch weather data');
    }
  }
}

module.exports = WeatherService;