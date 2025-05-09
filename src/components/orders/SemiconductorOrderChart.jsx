import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dailyOrders = [
  { day: "Lun", orders: 14 },
  { day: "Mar", orders: 22 },
  { day: "Mié", orders: 18 },
  { day: "Jue", orders: 25 },
  { day: "Vie", orders: 30 },
  { day: "Sáb", orders: 12 },
  { day: "Dom", orders: 8 },
];

const SemiconductorOrdersChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>Órdenes Diarias</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={dailyOrders}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              formatter={(value) => [`${value} órdenes`, "Cantidad"]}
            />
            <Line 
              type="monotone" 
              dataKey="orders" 
              stroke="#A78BFA" 
              strokeWidth={2} 
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SemiconductorOrdersChart;