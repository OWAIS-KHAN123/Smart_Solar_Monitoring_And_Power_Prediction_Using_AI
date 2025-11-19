import React from "react";

const WeeklyForecastTable = ({ weeklyPrediction }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">
      Weekly Forecast Details
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-3 px-4 text-gray-700 font-semibold">
              Day
            </th>
            <th className="text-left py-3 px-4 text-gray-700 font-semibold">
              Predicted Voltage
            </th>
            <th className="text-left py-3 px-4 text-gray-700 font-semibold">
              Predicted Power
            </th>
            <th className="text-left py-3 px-4 text-gray-700 font-semibold">
              Weather
            </th>
            <th className="text-left py-3 px-4 text-gray-700 font-semibold">
              Confidence
            </th>
          </tr>
        </thead>
        <tbody>
          {weeklyPrediction.map((day, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">{day.day}</td>
              <td className="py-3 px-4 text-blue-600 font-semibold">
                {day.predictedVoltage.toFixed(1)}V
              </td>
              <td className="py-3 px-4 text-green-600 font-semibold">
                {day.predictedPower.toFixed(2)} kW
              </td>
              <td className="py-3 px-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    day.weatherCondition === "Sunny"
                      ? "bg-yellow-100 text-yellow-800"
                      : day.weatherCondition === "Partly Cloudy"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {day.weatherCondition}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${day.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">
                    {day.confidence.toFixed(0)}%
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default WeeklyForecastTable;
