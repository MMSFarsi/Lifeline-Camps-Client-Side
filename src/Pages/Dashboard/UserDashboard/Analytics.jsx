import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
} from "recharts";
import useRegCamp from "@/Hooks/useRegCamp";

const Analytics = () => {
  const [regCamp] = useRegCamp();
  const chartData = regCamp.map((camp) => ({
    name: camp.campName,
    fees: camp.campFees,
  }));

  return (
    <div className="lg:p-8 p-5 bg-white/20 backdrop-blur-md border border-white/30 min-h-screen">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">
        Analytics
      </h2>

      {chartData.length > 0 ? (
        <div className="lg:p-6 rounded-lg">
          <ResponsiveContainer width="60%" height={300}>
            <BarChart data={chartData}>
              <XAxis
                dataKey="name"
                tick={{ fill: "#4a5568", fontSize: 10 }} 
              />
              <YAxis
                tick={{ fill: "#4a5568", fontSize: 10 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f7fafc",
                  borderColor: "#cbd5e0",
                  fontSize: "10px", 
                }}
                labelStyle={{
                  color: "#4a5568",
                  fontSize: "10px",
                }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: "10px", 
                  color: "#4a5568",
                }}
              />
              <Bar dataKey="fees" fill="#3182ce" name="Camp Fees" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-600">
          No registered camps found to display analytics.
        </p>
      )}
    </div>
  );
};

export default Analytics;
