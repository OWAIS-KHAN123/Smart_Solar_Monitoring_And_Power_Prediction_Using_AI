import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Zap } from "lucide-react";
import { PIE_COLORS } from "../../data/generators";

const EnergyDistributionPieChart = ({ distributionData }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center justify-center gap-4 uppercase">
      <Zap className="w-7 h-7 mr-2 text-green-600 fill-green-200" />
      Current Energy Flow Distribution (%)
    </h2>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={distributionData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#2563EB"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(1)}%`
          }
        >
          {distributionData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={PIE_COLORS[index % PIE_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value.toFixed(1)}%`, name]}
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default EnergyDistributionPieChart;
