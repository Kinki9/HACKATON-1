import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Datos simulados de producción semanal
const PRODUCTION_DATA = [
  { week: "Sem 1", chips: 120, temperatureAvg: 65, failures: 5 },
  { week: "Sem 2", chips: 135, temperatureAvg: 68, failures: 3 },
  { week: "Sem 3", chips: 110, temperatureAvg: 72, failures: 7 },
  { week: "Sem 4", chips: 150, temperatureAvg: 70, failures: 4 },
];

const ProductionTrendChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>
        Tendencia de Producción y Calidad
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={PRODUCTION_DATA}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='week' stroke='#9CA3AF' />
            <YAxis yAxisId="left" stroke='#3B82F6' />
            <YAxis yAxisId="right" orientation="right" stroke='#EF4444' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type='monotone'
              dataKey='chips'
              stroke='#3B82F6'
              strokeWidth={2}
              name='Chips Fabricados'
            />
            <Line
              yAxisId="left"
              type='monotone'
              dataKey='temperatureAvg'
              stroke='#F59E0B'
              strokeWidth={2}
              name='Temp. Promedio (°C)'
            />
            <Line
              yAxisId="right"
              type='monotone'
              dataKey='failures'
              stroke='#EF4444'
              strokeWidth={2}
              name='Fallos'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductionTrendChart;