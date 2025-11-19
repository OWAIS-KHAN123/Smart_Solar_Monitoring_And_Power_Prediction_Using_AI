import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle } from "lucide-react";
import ChartTooltip from "../common/ChartTooltip";

const HourlyPredictionChart = ({ hourlyPrediction }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">
      Tomorrow's Hourly Voltage Prediction
    </h2>
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
      <div className="flex items-start">
        <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
        <div className="text-sm text-blue-700">
          <strong>AI Model:</strong> Using LSTM neural network trained on 2
          years of historical data with weather integration
        </div>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={hourlyPrediction}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="hour" stroke="#666" />
        <YAxis stroke="#666" domain={[200, 260]} unit="V" />
        <Tooltip content={<ChartTooltip unit="V" />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="upper"
          stroke="#d1d5db"
          strokeWidth={1}
          dot={false}
          name="Upper Bound"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="lower"
          stroke="#d1d5db"
          strokeWidth={1}
          dot={false}
          name="Lower Bound"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="#2563EB"
          strokeWidth={3}
          dot={false}
          name="Predicted Voltage"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default HourlyPredictionChart;
