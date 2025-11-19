import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Activity } from "lucide-react";
import BaseChart from "../../common/BaseChart";
import ChartTooltip from "../../common/ChartTooltip";

const RealTimeCurrentBarChart = ({ realtimeData }) => (
  <BaseChart
    title="24-Hour Current Monitoring (A)"
    icon={Activity}
    data={realtimeData}
    color="blue"
  >
    <BarChart data={realtimeData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="time" stroke="#666" />
      <YAxis stroke="#666" unit="A" />
      <Tooltip content={<ChartTooltip unit="A" />} />
      <Legend verticalAlign="top" height={36} />
      <Bar
        dataKey="current"
        fill="#2563EB"
        name="Current"
        radius={[8, 8, 0, 0]}
      />
    </BarChart>
  </BaseChart>
);

export default RealTimeCurrentBarChart;
