import React from "react";
import { Calendar, Sun } from "lucide-react";

const TomorrowsForecastCard = ({ forecast }) => {
  const forecastItems = [
    { label: "Avg Voltage", value: `${forecast.avgVoltage.toFixed(1)}V` },
    { label: "Peak Voltage", value: `${forecast.peakVoltage.toFixed(1)}V` },
    { label: "Total Energy", value: `${forecast.totalEnergy.toFixed(1)} kWh` },
    { label: "Confidence", value: `${forecast.confidence.toFixed(1)}%` },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center mb-4">
        <Calendar className="w-6 h-6 mr-2" />
        <h2 className="text-2xl font-bold">Tomorrow's Forecast</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {forecastItems.map((item, index) => (
          <div
            key={index}
            className="bg-opacity-20 rounded-lg p-4 backdrop-blur-sm bg-gray-400"
          >
            <div className="text-sm text-white-100 mb-1">{item.label}</div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <Sun className="w-5 h-5 mr-2" />
        <span className="text-lg">Expected Weather: {forecast.weather}</span>
      </div>
    </div>
  );
};

export default TomorrowsForecastCard;
