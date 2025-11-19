import React from "react";

const ChartTooltip = ({ active, payload, label, unit }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-md text-sm">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map((p, index) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value.toFixed(2)} {unit || ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default ChartTooltip;
