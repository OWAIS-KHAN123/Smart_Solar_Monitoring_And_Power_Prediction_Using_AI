// Inverter Controller - Business Logic
const InverterData = require('../models/InverterData.model');
const DataGeneratorService = require('../services/dataGenerator.service');
const WeatherService = require('../services/weather.service');
const ApiResponse = require('../utils/apiResponse');
const CONSTANTS = require('../config/constants');

class InverterController {
  // Get all inverter data (paginated)
  static async getAllData(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      
      const inverterData = await InverterData.find()
        .sort({ timestamp: -1 })
        .limit(limit)
        .exec();

      if (!inverterData || inverterData.length === 0) {
        return ApiResponse.notFound(res, 'No inverter data found');
      }

      return ApiResponse.success(res, inverterData, `Retrieved ${inverterData.length} records`);
    } catch (error) {
      next(error);
    }
  }

  // Get latest inverter data
  static async getLatestData(req, res, next) {
    try {
      const latestData = await InverterData.findOne()
        .sort({ timestamp: -1 })
        .exec();

      if (!latestData) {
        return ApiResponse.notFound(res, 'No data found');
      }

      return ApiResponse.success(res, latestData, 'Latest data retrieved');
    } catch (error) {
      next(error);
    }
  }

  // Get inverter statistics
  static async getStatistics(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 100;
      
      const data = await InverterData.find()
        .sort({ timestamp: -1 })
        .limit(limit)
        .exec();

      if (data.length === 0) {
        return ApiResponse.notFound(res, 'No data available for statistics');
      }

      const totalPower = data.reduce((sum, d) => sum + d.totalPowerGenerated, 0);
      const avgPower = totalPower / data.length;
      const maxPower = Math.max(...data.map(d => d.totalPowerGenerated));
      const totalEnergy = data.reduce((sum, d) => sum + d.totalEnergyGenerated, 0);

      const statistics = {
        averagePower: parseFloat(avgPower.toFixed(2)),
        maxPower: parseFloat(maxPower.toFixed(2)),
        totalEnergyGenerated: parseFloat(totalEnergy.toFixed(4)),
        dataPoints: data.length,
      };

      return ApiResponse.success(res, statistics, 'Statistics calculated');
    } catch (error) {
      next(error);
    }
  }

  // Generate and save new data
  static async generateData(req, res, next) {
    try {
      // Generate solar panels data
      const panels = DataGeneratorService.generateAllPanelsData();

      // Fetch weather data
      const weatherData = await WeatherService.fetchWeatherData();

      // Calculate totals
      const totalPower = panels.reduce((sum, p) => sum + p.power, 0);
      const totalEnergy = panels.reduce((sum, p) => sum + p.energyGenerated, 0);

      // Create inverter data record
      const inverterData = new InverterData({
        inverterId: CONSTANTS.INVERTER_ID,
        solarPanels: panels,
        weatherData,
        totalPowerGenerated: parseFloat(totalPower.toFixed(2)),
        totalEnergyGenerated: parseFloat(totalEnergy.toFixed(4)),
        gridFrequency: 50 + (Math.random() - 0.5),
        gridVoltage: 230 + Math.random() * 10,
        totalConsumption: totalPower * 0.9,
        batteryLevel: 75 + Math.random() * 20,
      });

      await inverterData.save();

      return ApiResponse.created(res, inverterData, 'Data generated and saved successfully');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InverterController;