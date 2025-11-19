// Application Constants
module.exports = {
  // Panel Status
  PANEL_STATUS: {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    FAULT: 'Fault',
  },
  
  // Inverter Configuration
  INVERTER_ID: 'INV-001',
  PANEL_COUNT: 5,
  
  // Data Collection
  COLLECTION_INTERVAL: '*/30 * * * * *', // Every 5 minutes (cron format)
  
  // Data Limits
  DATA_QUERY_LIMIT: 100,
  HISTORY_LIMIT: 50,
};