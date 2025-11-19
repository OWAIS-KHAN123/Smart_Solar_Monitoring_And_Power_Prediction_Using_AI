import React, { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import TomorrowsForecastCard from "../components/predictions/TomorrowsForecastCard";
import HourlyPredictionChart from "../components/predictions/HourlyPredictionChart";
import WeeklyPredictionBarChart from "../components/predictions/WeeklyPredictionBarChart";
import WeeklyForecastTable from "../components/predictions/WeeklyForecastTable";
import {
  generatePredictionData,
  generateHourlyPrediction,
} from "../data/generators";

const PredictionsPage = () => {
  const [weeklyPrediction, setWeeklyPrediction] = useState(
    generatePredictionData()
  );
  const [hourlyPrediction, setHourlyPrediction] = useState(
    generateHourlyPrediction()
  );
  const [tomorrowForecast, setTomorrowForecast] = useState({
    avgVoltage: 228.5,
    peakVoltage: 245.2,
    totalEnergy: 42.3,
    confidence: 92.5,
    weather: "Sunny",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWeeklyPrediction(generatePredictionData());
      setHourlyPrediction(generateHourlyPrediction());
      setTomorrowForecast({
        avgVoltage: 220 + Math.random() * 15,
        peakVoltage: 240 + Math.random() * 10,
        totalEnergy: 38 + Math.random() * 8,
        confidence: 88 + Math.random() * 8,
        weather: ["Sunny", "Partly Cloudy", "Clear"][
          Math.floor(Math.random() * 3)
        ],
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          AI Power Predictions
        </h1>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">ML Model Active</span>
        </div>
      </div>

      <TomorrowsForecastCard forecast={tomorrowForecast} />
      <HourlyPredictionChart hourlyPrediction={hourlyPrediction} />
      <WeeklyPredictionBarChart weeklyPrediction={weeklyPrediction} />
      <WeeklyForecastTable weeklyPrediction={weeklyPrediction} />
    </div>
  );
};

export default PredictionsPage;
