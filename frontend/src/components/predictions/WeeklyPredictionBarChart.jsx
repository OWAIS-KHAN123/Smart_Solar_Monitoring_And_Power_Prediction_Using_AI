import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ChartTooltip from "../common/ChartTooltip";

const WeeklyPredictionBarChart = ({ weeklyPrediction }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">
      7-Day Voltage Forecast
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={weeklyPrediction}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="day" stroke="#666" />
        <YAxis stroke="#666" unit="V" />
        <Tooltip content={<ChartTooltip unit="V" />} />
        <Legend />
        <Bar
          dataKey="predictedVoltage"
          fill="#2563EB"
          name="Predicted Voltage"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyPredictionBarChart;
