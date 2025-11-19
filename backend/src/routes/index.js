// Main Router - Combines all routes
const express = require('express');
const router = express.Router();

const inverterRoutes = require('./inverter.routes');
const solarRoutes = require('./solar.routes');
const weatherRoutes = require('./weather.routes');

// Health check
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Solar Monitoring System is running',
    timestamp: new Date(),
  });
});

// Mount routes
router.use('/inverter', inverterRoutes);
router.use('/solar', solarRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;