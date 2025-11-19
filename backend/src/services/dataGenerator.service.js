// Mock Solar Data Generator Service
const CONSTANTS = require('../config/constants');

class DataGeneratorService {
  static generateSolarPanelData(panelId) {
    const hour = new Date().getHours();
    const isNight = hour < 6 || hour > 18;

    let baseIrradiance = isNight ? 0 : Math.random() * 1000;
    baseIrradiance += Math.sin((hour - 6) / 12 * Math.PI) * 500;

    const voltage = isNight ? 0 : 30 + Math.random() * 10;
    const current = isNight ? 0 : (baseIrradiance / 1000) * 8 + Math.random() * 2;
    const power = voltage * current;
    const efficiency = isNight ? 0 : 15 + Math.random() * 5;
    const temperature = 25 + Math.random() * 30;
    const irradiance = baseIrradiance;
    const energyGenerated = power * 0.001;

    const status = power < 10 
      ? CONSTANTS.PANEL_STATUS.INACTIVE 
      : power < 100 
      ? CONSTANTS.PANEL_STATUS.FAULT 
      : CONSTANTS.PANEL_STATUS.ACTIVE;

    return {
      panelId,
      voltage: parseFloat(voltage.toFixed(2)),
      current: parseFloat(current.toFixed(2)),
      power: parseFloat(power.toFixed(2)),
      efficiency: parseFloat(efficiency.toFixed(2)),
      temperature: parseFloat(temperature.toFixed(2)),
      irradiance: parseFloat(irradiance.toFixed(2)),
      energyGenerated: parseFloat(energyGenerated.toFixed(4)),
      status,
      timestamp: new Date(),
    };
  }

  static generateAllPanelsData() {
    const panels = [];
    for (let i = 1; i <= CONSTANTS.PANEL_COUNT; i++) {
      panels.push(this.generateSolarPanelData(`PANEL-${i}`));
    }
    return panels;
  }
}

module.exports = DataGeneratorService;