import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { TrendingUp } from "lucide-react";
import BaseChart from "../../common/BaseChart";
import ChartTooltip from "../../common/ChartTooltip";

const SystemEfficiencyAreaChart = ({ realtimeData }) => (
  <BaseChart
    title="System Efficiency (%)"
    icon={TrendingUp}
    data={realtimeData}
    color="blue"
  >
    <AreaChart data={realtimeData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="time" stroke="#666" />
      <YAxis stroke="#666" unit="%" />
      <Tooltip content={<ChartTooltip unit="%" />} />
      <Area
        type="monotone"
        dataKey="efficiency"
        stroke="#2563EB"
        fill="#93C5FD"
        fillOpacity={0.3}
        name="Efficiency"
      />
    </AreaChart>
  </BaseChart>
);

export default SystemEfficiencyAreaChart;
