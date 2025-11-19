// Scheduled Data Collection Job
const cron = require('node-cron');
const InverterData = require('../models/InverterData.model');
const DataGeneratorService = require('../services/dataGenerator.service');
const WeatherService = require('../services/weather.service');
const CONSTANTS = require('../config/constants');

class DataCollectionJob {
  static start() {
    cron.schedule(CONSTANTS.COLLECTION_INTERVAL, async () => {
      try {
        console.log('🔄 Generating solar and weather data...');

        // Generate solar panels data
        const panels = DataGeneratorService.generateAllPanelsData();
        
        // Validate panels data
        if (!panels || panels.length === 0) {
          throw new Error('Failed to generate solar panel data');
        }

        // Fetch weather data
        const weatherData = await WeatherService.fetchWeatherData();
        
        // Validate weather data
        if (!weatherData) {
          throw new Error('Failed to fetch weather data');
        }

        // Calculate totals
        const totalPower = panels.reduce((sum, p) => sum + p.power, 0);
        const totalEnergy = panels.reduce((sum, p) => sum + p.energyGenerated, 0);

        // Create and save inverter data
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
          timestamp: new Date()
        });

        const savedData = await inverterData.save();
        console.log('✅ Data saved successfully:', {
          id: savedData._id,
          panels: savedData.solarPanels.length,
          weather: savedData.weatherData.location
        });
      } catch (error) {
        console.error('❌ Error in scheduled task:', error.message);
        console.error(error.stack);
      }
    });

    console.log('⏰ Data collection job scheduled:', CONSTANTS.COLLECTION_INTERVAL);
  }
}

module.exports = DataCollectionJob;