// Weather Controller
const WeatherData = require('../models/WeatherData.model');
const InverterData = require('../models/InverterData.model');
const ApiResponse = require('../utils/apiResponse');

class WeatherController {
  // Get latest weather data
  static async getLatestWeather(req, res, next) {
    try {
      // Get latest inverter data which contains weather
      const latestData = await InverterData.findOne()
        .sort({ timestamp: -1 })
        .select('weatherData timestamp')
        .exec();

      if (!latestData || !latestData.weatherData) {
        return ApiResponse.notFound(res, 'No weather data found');
      }

      return ApiResponse.success(res, latestData.weatherData, 'Latest weather data retrieved');
    } catch (error) {
      next(error);
    }
  }

  // Get weather history
  static async getWeatherHistory(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 50;

      const inverterData = await InverterData.find()
        .sort({ timestamp: -1 })
        .limit(limit)
        .select('weatherData timestamp')
        .exec();

      const weatherHistory = inverterData.map(record => ({
        ...record.weatherData.toObject(),
        timestamp: record.timestamp,
      }));

      return ApiResponse.success(res, weatherHistory, `Retrieved ${weatherHistory.length} weather records`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = WeatherController;