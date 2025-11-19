// Solar Panel Controller
const InverterData = require('../models/InverterData.model');
const ApiResponse = require('../utils/apiResponse');

class SolarController {
  // Get data for specific panel
  static async getPanelData(req, res, next) {
    try {
      const { panelId } = req.params;
      const limit = parseInt(req.query.limit) || 100;

      // Find all inverter data and extract specific panel data
      const inverterData = await InverterData.find()
        .sort({ timestamp: -1 })
        .limit(limit)
        .exec();

      const panelData = [];
      
      inverterData.forEach(record => {
        const panel = record.solarPanels.find(p => p.panelId === panelId);
        if (panel) {
          panelData.push({
            ...panel.toObject(),
            timestamp: record.timestamp,
          });
        }
      });

      if (panelData.length === 0) {
        return ApiResponse.notFound(res, `No data found for panel ${panelId}`);
      }

      return ApiResponse.success(res, panelData, `Retrieved ${panelData.length} records for ${panelId}`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SolarController;