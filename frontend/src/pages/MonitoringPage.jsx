import React, { useState, useEffect, useMemo } from "react";
import { Activity } from "lucide-react";
import CurrentStatsCards from "../components/monitoring/CurrentStatsCards";
import KpiCards from "../components/monitoring/KpiCards";
import WeatherCard from "../components/monitoring/WeatherCard";
import EnergyDistributionPieChart from "../components/monitoring/EnergyDistributionPieChart";
import RealTimeVoltageLineChart from "../components/monitoring/charts/RealTimeVoltageLineChart";
import RealTimeCurrentBarChart from "../components/monitoring/charts/RealTimeCurrentBarChart";
import PowerOutputAreaChart from "../components/monitoring/charts/PowerOutputAreaChart";
import SystemEfficiencyAreaChart from "../components/monitoring/charts/SystemEfficiencyAreaChart";
import MonthlyEnergyBarChart from "../components/monitoring/charts/MonthlyEnergyBarChart";
import YearlyEnergyAreaChart from "../components/monitoring/charts/YearlyEnergyAreaChart";
import {
  generateRealtimeData,
  generateMonthlyData,
  generateYearlyData,
  generateWeatherData,
  generateDistributionData,
} from "../data/generators";
import { Sun, Cloud, CloudRain } from "lucide-react";

const MonitoringPage = () => {
  const [realtimeData, setRealtimeData] = useState(generateRealtimeData());
  const [monthlyData, setMonthlyData] = useState(generateMonthlyData());
  const [yearlyData, setYearlyData] = useState(generateYearlyData());
  const [weather, setWeather] = useState(generateWeatherData());
  const [distributionData, setDistributionData] = useState(
    generateDistributionData()
  );
  const [currentStats, setCurrentStats] = useState({
    voltage: 235.4,
    current: 18.2,
    power: 4.28,
    efficiency: 89.3,
  });
  const [kpiData, setKpiData] = useState({
    instantPower: 4.25,
    todayKwh: 28.4,
    monthKwh: 847.6,
    lifetimeKwh: 45230.8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setKpiData((prev) => ({
        ...prev,
        instantPower: 3 + Math.random() * 3,
        todayKwh: prev.todayKwh + Math.random() * 0.1,
        monthKwh: prev.monthKwh + Math.random() * 0.1,
        lifetimeKwh: prev.lifetimeKwh + Math.random() * 0.1,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeData(generateRealtimeData());
      setWeather(generateWeatherData());
      setCurrentStats({
        voltage: 220 + Math.random() * 30,
        current: 10 + Math.random() * 15,
        power: 3 + Math.random() * 2,
        efficiency: 80 + Math.random() * 15,
      });
      setMonthlyData(generateMonthlyData());
      setYearlyData(generateYearlyData());
      setDistributionData(generateDistributionData());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = useMemo(
    () => () => {
      if (
        weather.condition.includes("Sunny") ||
        weather.condition.includes("Clear")
      ) {
        return <Sun className="w-16 h-16 text-yellow-400" />;
      } else if (weather.condition.includes("Cloud")) {
        return <Cloud className="w-16 h-16 text-gray-400" />;
      } else {
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      }
    },
    [weather.condition]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Real-Time Monitoring
        </h1>
        <div className="flex items-center space-x-2 text-green-600">
          <Activity className="w-5 h-5 animate-pulse" />
          <span className="font-semibold">Live</span>
        </div>
      </div>

      <CurrentStatsCards stats={currentStats} />
      <KpiCards kpiData={kpiData} />
      <WeatherCard weather={weather} getWeatherIcon={getWeatherIcon} />
      <EnergyDistributionPieChart distributionData={distributionData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RealTimeVoltageLineChart realtimeData={realtimeData} />
        <RealTimeCurrentBarChart realtimeData={realtimeData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PowerOutputAreaChart realtimeData={realtimeData} />
        <SystemEfficiencyAreaChart realtimeData={realtimeData} />
      </div>

      <MonthlyEnergyBarChart monthlyData={monthlyData} />
      <YearlyEnergyAreaChart yearlyData={yearlyData} />
    </div>
  );
};

export default MonitoringPage;
