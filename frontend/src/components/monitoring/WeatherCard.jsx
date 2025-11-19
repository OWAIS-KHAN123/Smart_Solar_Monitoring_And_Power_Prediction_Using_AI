import React from "react";
import { Cloud, Sun, CloudRain } from "lucide-react";

const WeatherCard = ({ weather, getWeatherIcon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <Cloud className="w-6 h-6 mr-2 text-blue-500" />
      Weather Conditions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center space-x-6">
        {getWeatherIcon()}
        <div>
          <div className="text-4xl font-bold text-gray-800">
            {weather.temperature.toFixed(1)}°C
          </div>
          <div className="text-lg text-gray-600">{weather.condition}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Humidity", value: `${weather.humidity.toFixed(0)}%` },
          { label: "Cloud Cover", value: `${weather.cloudCover.toFixed(0)}%` },
          { label: "Wind Speed", value: `${weather.windSpeed.toFixed(1)} m/s` },
          { label: "UV Index", value: `${weather.uvIndex.toFixed(1)}` },
        ].map((stat, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-3">
            <div className="text-sm text-gray-600">{stat.label}</div>
            <div className="text-xl font-bold text-blue-600">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WeatherCard;
