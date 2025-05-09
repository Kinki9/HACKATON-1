import { Gauge, Truck, Clock, PackageCheck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';


const shipments = [
  {
    id: 'SH-2023-042',
    destination: 'TechCorp México',
    status: 'En tránsito',
    progress: 65,
    estimated: '2023-05-25'
  },
  {
    id: 'SH-2023-043',
    destination: 'Quantum Computing USA',
    status: 'Preparando',
    progress: 20,
    estimated: '2023-05-28'
  },
  {
    id: 'SH-2023-044',
    destination: 'Neuralink California',
    status: 'Retrasado',
    progress: 45,
    estimated: '2023-05-30'
  }
];

const ShipmentTracking = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Seguimiento de Envíos</h2>
      
      <div className="space-y-6">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-white">{shipment.id}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                shipment.status === 'En tránsito' ? 'bg-blue-900 text-blue-300' :
                shipment.status === 'Preparando' ? 'bg-yellow-900 text-yellow-300' :
                'bg-red-900 text-red-300'
              }`}>
                {shipment.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-400 mb-3">{shipment.destination}</p>
            
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progreso</span>
                <span>{shipment.progress}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    shipment.status === 'En tránsito' ? 'bg-blue-500' :
                    shipment.status === 'Preparando' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${shipment.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center text-xs text-gray-400">
              <Clock className="mr-1" size={14} />
              <span>Estimado: {shipment.estimated}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center">
          <Truck className="mr-2" size={16} />
          <span>3 envíos activos</span>
        </div>
        <button className="text-blue-400 hover:text-blue-300 text-sm">
          Ver todos →
        </button>
      </div>
    </motion.div>
  );
};

export default ShipmentTracking;