import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const environmentalData = [
  { 
    month: 'Ene', 
    energy: 4500, 
    water: 1200,
    co2: 3200 
  },
  { 
    month: 'Feb', 
    energy: 4200, 
    water: 1100,
    co2: 2900 
  },
  { 
    month: 'Mar', 
    energy: 4800, 
    water: 1300,
    co2: 3500 
  },
  { 
    month: 'Abr', 
    energy: 4100, 
    water: 1050,
    co2: 2800 
  },
];

const EnvironmentalImpact = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Impacto Ambiental Mensual</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={environmentalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.9)',
                borderColor: '#4B5563'
              }}
              formatter={(value, name) => [
                value,
                name === 'energy' ? 'Energía (kWh)' :
                name === 'water' ? 'Agua (L)' : 'CO₂ (kg)'
              ]}
            />
            <Legend />
            <Bar dataKey="energy" fill="#F59E0B" name="Consumo Energético" />
            <Bar dataKey="water" fill="#3B82F6" name="Consumo Hídrico" />
            <Bar dataKey="co2" fill="#EF4444" name="Emisiones CO₂" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>Meta de reducción: ↓15% consumo energético para Q3 2023</p>
      </div>
    </motion.div>
  );
};

export default EnvironmentalImpact;