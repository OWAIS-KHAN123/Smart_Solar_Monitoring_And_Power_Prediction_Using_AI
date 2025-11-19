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
import { Calendar } from "lucide-react";
import BaseChart from "../../common/BaseChart";
import ChartTooltip from "../../common/ChartTooltip";

const MonthlyEnergyBarChart = ({ monthlyData }) => (
  <BaseChart
    title="Monthly Energy Generation (Daily kWh)"
    icon={Calendar}
    data={monthlyData}
    color="blue"
  >
    <BarChart data={monthlyData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="day" stroke="#666" hide />
      <YAxis stroke="#666" unit="kWh" />
      <Tooltip content={<ChartTooltip unit="kWh" />} />
      <Legend verticalAlign="top" height={36} />
      <Bar
        dataKey="energy"
        fill="#2563EB"
        name="Daily Energy"
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  </BaseChart>
);

export default MonthlyEnergyBarChart;
