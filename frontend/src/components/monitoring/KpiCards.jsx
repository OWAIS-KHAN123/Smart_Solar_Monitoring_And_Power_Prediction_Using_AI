import React from "react";
import { Zap, TrendingUp, Calendar, BarChart3 } from "lucide-react";

const KpiCards = ({ kpiData }) => {
  const progressPercent = Math.min((kpiData.todayKwh / 40) * 100, 100).toFixed(
    0
  );
  const monthPercent = ((kpiData.monthKwh / 1200) * 100).toFixed(0);

  const kpiItems = [
    {
      title: "Instant Power",
      unit: "kW",
      value: kpiData.instantPower.toFixed(2),
      icon: Zap,
      footer: "Real-time generation",
      time: "Live",
      color: "emerald",
      bgGradient: "from-orange-500 to-orange-600",
      liveDot: true,
    },
    {
      title: "Today's Energy",
      unit: "kWh",
      value: kpiData.todayKwh.toFixed(1),
      icon: TrendingUp,
      footer: (
        <div className="flex-1">
          <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5">
            <div
              className="bg-orange-700 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      ),
      footerSuffix: `${progressPercent}%`,
      time: "Today",
      color: "blue",
      bgGradient: "from-orange-500 to-orange-600",
    },
    {
      title: "Monthly Energy",
      unit: "kWh",
      value: kpiData.monthKwh.toFixed(1),
      icon: Calendar,
      footer: <span>Target: 1,200 kWh ({monthPercent}%)</span>,
      time: "This Month",
      color: "blue",
      bgGradient: "from-orange-500 to-orange-600",
    },
    {
      title: "Lifetime Energy",
      unit: "MWh",
      value: (kpiData.lifetimeKwh / 1000).toFixed(1),
      icon: BarChart3,
      footer: `${kpiData.lifetimeKwh.toFixed(0)} kWh generated`,
      time: "Total",
      color: "orange",
      bgGradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiItems.map((item, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${item.bgGradient} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="bg-orange-400 bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex items-center space-x-2 justify-between bg-orange-400 bg-opacity-20 rounded-full px-3 py-1 text-xs backdrop-blur-sm">
              {item.liveDot && (
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              )}
              <span>{item.time}</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="text-sm text-white text-opacity-80 font-medium uppercase tracking-wide">
              {item.title}
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <div className="text-4xl font-bold">{item.value}</div>
            <div className="text-xl font-semibold text-white text-opacity-80 mb-1">
              {item.unit}
            </div>
          </div>
          <div className="mt-3 text-xs text-white text-opacity-90 flex items-center">
            {item.footer}
            {item.footerSuffix && (
              <span className="ml-2">{item.footerSuffix}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
