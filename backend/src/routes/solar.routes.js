// Solar Panel Routes
const express = require('express');
const router = express.Router();
const SolarController = require('../controllers/solar.controller');

// GET /api/solar/panel/:panelId - Get data for specific panel
router.get('/panel/:panelId', SolarController.getPanelData);

module.exports = router;