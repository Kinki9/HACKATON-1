import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

const TotalProductionCost = () => {
  const totalCost = 1250000; // Ejemplo en dólares

  return (
    <motion.div
      className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-md p-6 flex items-center gap-4'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className='bg-white bg-opacity-20 p-3 rounded-full'>
        <DollarSign size={32} />
      </div>
      <div>
        <h3 className='text-sm uppercase tracking-wide text-white/80'>Inversión Total</h3>
        <p className='text-2xl font-bold'>${totalCost.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

export default TotalProductionCost;