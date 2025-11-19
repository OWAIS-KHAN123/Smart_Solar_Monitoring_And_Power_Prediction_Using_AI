import React from "react";
import { ResponsiveContainer } from "recharts";

const BaseChart = ({ title, icon: Icon, data, children, color }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      {Icon && <Icon className={`w-5 h-5 mr-2 text-${color}-500`} />}
      {title}
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      {children}
    </ResponsiveContainer>
  </div>
);

export default BaseChart;
