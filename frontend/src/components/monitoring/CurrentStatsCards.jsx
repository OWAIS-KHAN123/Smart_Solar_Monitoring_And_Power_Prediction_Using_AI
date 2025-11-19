import React from "react";
import { Zap, Activity, TrendingUp } from "lucide-react";

const CurrentStatsCards = ({ stats }) => {
  const statItems = [
    {
      title: "Voltage",
      value: `${stats.voltage.toFixed(1)}V`,
      icon: Zap,
      color: "blue",
    },
    {
      title: "Current",
      value: `${stats.current.toFixed(1)}A`,
      icon: Activity,
      color: "blue",
    },
    {
      title: "Power",
      value: `${stats.power.toFixed(2)}kW`,
      icon: Zap,
      color: "blue",
    },
    {
      title: "Efficiency",
      value: `${stats.efficiency.toFixed(1)}%`,
      icon: TrendingUp,
      color: "blue",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl p-6 text-white shadow-lg`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-opacity-80">{item.title}</span>
            <item.icon className="w-5 h-5 text-white text-opacity-80" />
          </div>
          <div className="text-3xl font-bold">{item.value}</div>
          <div className="text-sm text-white text-opacity-70 mt-1">
            Real-time
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentStatsCards;
