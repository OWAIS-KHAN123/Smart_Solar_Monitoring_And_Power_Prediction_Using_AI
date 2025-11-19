// Inverter Routes
const express = require('express');
const router = express.Router();
const InverterController = require('../controllers/inverter.controller');

// GET /api/inverter/data - Get all inverter data
router.get('/data', InverterController.getAllData);

// GET /api/inverter/latest - Get latest inverter data
router.get('/latest', InverterController.getLatestData);

// GET /api/inverter/statistics - Get statistics
router.get('/statistics', InverterController.getStatistics);

// POST /api/inverter/generate-data - Generate and save new data
router.post('/generate-data', InverterController.generateData);

module.exports = router;