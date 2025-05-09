import { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Clock, CheckCircle } from 'lucide-react';

const productionData = [
  {
    batch: 'LOTE-2023-015',
    type: 'CPU 7nm',
    started: '2023-05-15 08:00',
    completed: '2023-05-17 16:30',
    units: 1250,
    status: 'Entregado',
    efficiency: '94%'
  },
  {
    batch: 'LOTE-2023-016',
    type: 'GPU 5nm',
    started: '2023-05-18 08:00',
    completed: '2023-05-20 14:15',
    units: 850,
    status: 'En almacén',
    efficiency: '91%'
  },
  {
    batch: 'LOTE-2023-017',
    type: 'FPGA 10nm',
    started: '2023-05-21 08:00',
    completed: null,
    units: 600,
    status: 'En producción',
    efficiency: '89%'
  },
  {
    batch: 'LOTE-2023-018',
    type: 'SoC 6nm',
    started: '2023-05-22 08:00',
    completed: null,
    units: 1500,
    status: 'En producción',
    efficiency: '92%'
  }
];

const ProductionTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = productionData.filter(item =>
    item.batch.toLowerCase().includes(searchTerm) ||
    item.type.toLowerCase().includes(searchTerm)
  );

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Lotes de Producción</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar lote o tipo..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <Package className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Lote</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Tipo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Inicio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Finalización</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Unidades</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Eficiencia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredData.map((item) => (
              <tr key={item.batch} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 text-sm font-medium text-gray-100">{item.batch}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{item.type}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{item.started}</td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  {item.completed || 'En progreso'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">{item.units.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === 'Entregado' ? 'bg-green-900 text-green-300' :
                    item.status === 'En almacén' ? 'bg-blue-900 text-blue-300' :
                    'bg-yellow-900 text-yellow-300'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">{item.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductionTable;