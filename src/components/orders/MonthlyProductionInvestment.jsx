import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const productionData = [
  { month: "Ene", investment: 125000, orders: 18 },
  { month: "Feb", investment: 98000, orders: 15 },
  { month: "Mar", investment: 175000, orders: 24 },
  { month: "Abr", investment: 142000, orders: 20 },
  { month: "May", investment: 210000, orders: 28 },
];

const MonthlyProductionInvestment = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>Inversión y Órdenes Mensuales</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={productionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis yAxisId="left" stroke="#3B82F6" />
            <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              formatter={(value, name) => [
                name === "investment" ? `$${value.toLocaleString()}` : value,
                name === "investment" ? "Inversión" : "Órdenes"
              ]}
            />
            <Bar yAxisId="left" dataKey="investment" fill="#3B82F6" name="Inversión" />
            <Bar yAxisId="right" dataKey="orders" fill="#10B981" name="Órdenes" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default MonthlyProductionInvestment;