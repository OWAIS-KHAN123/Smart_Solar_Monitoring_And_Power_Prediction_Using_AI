import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Zap } from "lucide-react";
import BaseChart from "../../common/BaseChart";
import ChartTooltip from "../../common/ChartTooltip";

const RealTimeVoltageLineChart = ({ realtimeData }) => (
  <BaseChart
    title="24-Hour Voltage Monitoring (V)"
    icon={Zap}
    data={realtimeData}
    color="blue"
  >
    <LineChart data={realtimeData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="time" stroke="#666" />
      <YAxis stroke="#666" unit="V" />
      <Tooltip content={<ChartTooltip unit="V" />} />
      <Legend verticalAlign="top" height={36} />
      <Line
        type="monotone"
        dataKey="voltage"
        stroke="#2563EB"
        strokeWidth={2}
        dot={false}
        name="Voltage"
      />
    </LineChart>
  </BaseChart>
);

export default RealTimeVoltageLineChart;
