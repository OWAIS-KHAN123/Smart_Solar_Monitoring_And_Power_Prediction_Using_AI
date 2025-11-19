// Solar Panel Data Model
const mongoose = require('mongoose');

const solarDataSchema = new mongoose.Schema({
  panelId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  voltage: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
  power: {
    type: Number,
    required: true,
  },
  efficiency: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  irradiance: {
    type: Number,
    required: true,
  },
  energyGenerated: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Fault'],
    default: 'Active',
  },
});

module.exports = mongoose.model('SolarData', solarDataSchema);