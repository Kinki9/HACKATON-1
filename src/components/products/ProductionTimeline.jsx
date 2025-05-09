import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { motion } from 'framer-motion';
import { Factory, PackageCheck, Clock, Truck } from 'lucide-react';

const productionSteps = [
  {
    time: '08:00 AM',
    status: 'Inicio turno',
    description: 'Preparación equipos y materiales',
    icon: <Factory className="text-blue-400" size={20} />
  },
  {
    time: '09:30 AM',
    status: 'Lote iniciado',
    description: 'LOTE-2023-018 (SoC 6nm)',
    icon: <PackageCheck className="text-green-400" size={20} />
  },
  {
    time: '12:00 PM',
    status: 'Primera revisión',
    description: 'Control calidad intermedio',
    icon: <Clock className="text-yellow-400" size={20} />
  },
  {
    time: '02:00 PM',
    status: 'Envío parcial',
    description: '500 unidades a almacén',
    icon: <Truck className="text-purple-400" size={20} />
  }
];

const ProductionTimeline = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Línea de Tiempo de Producción</h2>
      <div className="px-4">
        <Timeline position="alternate">
          {productionSteps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot className="bg-gray-700">
                  {step.icon}
                </TimelineDot>
                {index < productionSteps.length - 1 && (
                  <TimelineConnector className="bg-gray-600" />
                )}
              </TimelineSeparator>
              <TimelineContent className="py-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-300">{step.time}</p>
                  <h3 className="text-md font-semibold text-white">{step.status}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </motion.div>
  );
};

export default ProductionTimeline;