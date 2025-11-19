// Server Entry Point
const app = require('./src/app');
const connectDatabase = require('./src/config/database');
const DataCollectionJob = require('./src/jobs/dataCollection.job');
const config = require('./src/config/environment');

async function startServer() {
  try {
    // Connect to MongoDB
    await connectDatabase();

    // Start scheduled jobs
    DataCollectionJob.start();

    // Start Express server
    app.listen(config.PORT, () => {
      console.log(`🚀 Server running on port ${config.PORT}`);
      console.log(`📡 API endpoints: http://localhost:${config.PORT}/api`);
      console.log(`🏥 Health check: http://localhost:${config.PORT}/api/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();