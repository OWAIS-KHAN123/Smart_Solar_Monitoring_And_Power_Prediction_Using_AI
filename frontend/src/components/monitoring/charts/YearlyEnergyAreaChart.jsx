import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart3 } from "lucide-react";
import BaseChart from "../../common/BaseChart";
import ChartTooltip from "../../common/ChartTooltip";

const YearlyEnergyAreaChart = ({ yearlyData }) => (
  <BaseChart
    title="Yearly Energy Trend (Monthly kWh)"
    icon={BarChart3}
    data={yearlyData}
    color="blue"
  >
    <AreaChart data={yearlyData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="month" stroke="#666" />
      <YAxis stroke="#666" unit="kWh" />
      <Tooltip content={<ChartTooltip unit="kWh" />} />
      <Legend verticalAlign="top" height={36} />
      <Area
        type="monotone"
        dataKey="energy"
        stroke="#2563EB"
        fill="#93C5FD"
        fillOpacity={0.8}
        name="Monthly Energy"
      />
    </AreaChart>
  </BaseChart>
);

export default YearlyEnergyAreaChart;
