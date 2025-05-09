import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const qualityData = [
  { week: 'Sem 1', approved: 84, rejected: 16, tempAvg: 68 },
  { week: 'Sem 2', approved: 88, rejected: 12, tempAvg: 71 },
  { week: 'Sem 3', approved: 82, rejected: 18, tempAvg: 73 },
  { week: 'Sem 4', approved: 91, rejected: 9, tempAvg: 69 },
];

const QualityTrendChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Tendencia de Calidad Semanal</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={qualityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="week" stroke="#9CA3AF" />
            <YAxis yAxisId="left" stroke="#34D399" />
            <YAxis yAxisId="right" orientation="right" stroke="#3B82F6" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.9)',
                borderColor: '#4B5563'
              }}
              formatter={(value, name) => [
                name === 'tempAvg' ? `${value}°C` : `${value}%`,
                name === 'approved' ? 'Aprobados' : 
                name === 'rejected' ? 'Rechazados' : 'Temp. Promedio'
              ]}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="approved"
              stroke="#34D399"
              strokeWidth={2}
              name="Tasa Aprobación"
              dot={{ r: 4 }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="rejected"
              stroke="#EF4444"
              strokeWidth={2}
              name="Tasa Rechazo"
              dot={{ r: 4 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="tempAvg"
              stroke="#3B82F6"
              strokeWidth={2}
              name="Temp. Promedio"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default QualityTrendChart;