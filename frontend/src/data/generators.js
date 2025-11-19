// --- DUMMY DATA GENERATORS ---

// 1. Hourly Data for 24-Hour Chart
export const generateRealtimeData = () => {
  const now = new Date();
  return Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const sunFactor = Math.max(0, Math.sin(((hour - 6) * Math.PI) / 12));
    return {
      time: `${hour.toString().padStart(2, "0")}:00`,
      voltage: 220 + sunFactor * 30 + Math.random() * 5,
      current: 5 + sunFactor * 15 + Math.random() * 2,
      power: ((220 + sunFactor * 30) * (5 + sunFactor * 15)) / 1000,
      efficiency: 75 + sunFactor * 20 + Math.random() * 5,
    };
  });
};

// 2. Daily Data for Monthly Chart (30 days)
export const generateMonthlyData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    energy: 15 + Math.random() * 25, // Daily kWh (15 to 40 kWh)
  }));
};

// 3. Monthly Data for Yearly Chart (12 months)
export const generateYearlyData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.map((month, i) => {
    const seasonalFactor =
      Math.sin((i / 12) * 2 * Math.PI - Math.PI / 2) * 0.4 + 1;
    return {
      month: month,
      energy: Math.round((800 + Math.random() * 400) * seasonalFactor),
    };
  });
};

// 4. Weather Data
export const generateWeatherData = () => ({
  temperature: 28 + Math.random() * 5,
  humidity: 45 + Math.random() * 15,
  cloudCover: Math.random() * 40,
  windSpeed: 5 + Math.random() * 10,
  condition: ["Sunny", "Partly Cloudy", "Clear"][Math.floor(Math.random() * 3)],
  uvIndex: 6 + Math.random() * 3,
});

// 5. Prediction Data
export const generatePredictionData = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((day) => ({
    day,
    predictedVoltage: 220 + Math.random() * 25,
    predictedPower: 3 + Math.random() * 2,
    confidence: 85 + Math.random() * 10,
    weatherCondition: ["Sunny", "Partly Cloudy", "Cloudy"][
      Math.floor(Math.random() * 3)
    ],
  }));
};

export const generateHourlyPrediction = () => {
  return Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const sunFactor = Math.max(0, Math.sin(((hour - 6) * Math.PI) / 12));
    return {
      hour: `${hour.toString().padStart(2, "0")}:00`,
      predicted: 220 + sunFactor * 28 + Math.random() * 3,
      lower: 215 + sunFactor * 25,
      upper: 225 + sunFactor * 31,
    };
  });
};

// 6. Distribution Data for Pie Chart
export const PIE_COLORS = ["#2563EB", "#0bf551", "#90b7b9", "#ec850f"];
export const generateDistributionData = () => [
  { name: "Solar Generation", value: 75 + Math.random() * 10 },
  { name: "Local Consumption", value: 15 + Math.random() * 5 },
  { name: "Grid Export", value: 5 + Math.random() * 5 },
  { name: "Loss/Other", value: 1 + Math.random() * 2 },
];
