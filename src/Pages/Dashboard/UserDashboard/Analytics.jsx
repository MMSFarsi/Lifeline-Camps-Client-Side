import React from "react";
import {  Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart } from "recharts";
import useRegCamp from "@/Hooks/useRegCamp";

const Analytics = () => {
  const[regCamp]=useRegCamp()
  const chartData = regCamp.map((camp) => ({
    name: camp.campName,
    fees: camp.campFees,
  }));

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Analytics</h2>

      {chartData.length > 0 ? (
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Lifetime Registered Camps</h3>
          <ResponsiveContainer width="50%" height={200}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" tick={{ fill: "#4a5568" }} />
              <YAxis tick={{ fill: "#4a5568" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#f7fafc", borderColor: "#cbd5e0" }}
                labelStyle={{ color: "#4a5568" }}
              />
              <Legend />
              <Bar dataKey="fees" fill="#3182ce" name="Camp Fees" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-600">No registered camps found to display analytics.</p>
      )}
    </div>
  );
};

export default Analytics;
