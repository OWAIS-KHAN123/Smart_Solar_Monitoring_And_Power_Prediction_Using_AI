import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Zap } from "lucide-react";
import BaseChart from "../../common/BaseChart";
import ChartTooltip from "../../common/ChartTooltip";

const PowerOutputAreaChart = ({ realtimeData }) => (
  <BaseChart
    title="24-Hour Power Output (kW)"
    icon={Zap}
    data={realtimeData}
    color="blue"
  >
    <AreaChart data={realtimeData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="time" stroke="#666" />
      <YAxis stroke="#666" unit="kW" />
      <Tooltip content={<ChartTooltip unit="kW" />} />
      <Area
        type="monotone"
        dataKey="power"
        stroke="#2563EB"
        fill="#93C5FD"
        fillOpacity={0.3}
        name="Power"
      />
    </AreaChart>
  </BaseChart>
);

export default PowerOutputAreaChart;
