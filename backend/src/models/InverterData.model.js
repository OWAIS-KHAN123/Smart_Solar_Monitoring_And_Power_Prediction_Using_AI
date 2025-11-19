// Inverter Data Model (Combined Solar + Weather)
const mongoose = require('mongoose');

const inverterDataSchema = new mongoose.Schema({
  inverterId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  solarPanels: [{
    panelId: String,
    voltage: Number,
    current: Number,
    power: Number,
    efficiency: Number,
    temperature: Number,
    irradiance: Number,
    energyGenerated: Number,
    status: String
  }],
  weatherData: {
    location: String,
    temperature: Number,
    feelsLike: Number,
    humidity: Number,
    pressure: Number,
    cloudCoverage: Number,
    windSpeed: Number,
    windDirection: Number,
    weatherDescription: String,
    visibility: Number
  },
  totalPowerGenerated: Number,
  totalEnergyGenerated: Number,
  gridFrequency: Number,
  gridVoltage: Number,
  totalConsumption: Number,
  batteryLevel: Number
});

inverterDataSchema.index({ timestamp: -1 });
inverterDataSchema.index({ inverterId: 1 });

module.exports = mongoose.model('InverterData', inverterDataSchema);