import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Truck, Clock, TrendingUp } from 'lucide-react';
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import ProductionTable from "../components/products/ProductionTable";
import ProductionTimeline from "../components/products/ProductionTimeline";
import ShipmentTracking from "../components/products/ShipmentTracking";

const ProductsPage = () => {
  const [productionStats, setProductionStats] = useState([
    { name: 'Unidades Hoy', value: 0, icon: Factory, color: '#3B82F6' },
    { name: 'En Producción', value: 0, icon: Clock, color: '#F59E0B' },
    { name: 'Tasa Eficiencia', value: '0%', icon: TrendingUp, color: '#10B981' },
    { name: 'Envíos Pendientes', value: 0, icon: Truck, color: '#EF4444' }
  ]);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setProductionStats([
        { name: 'Unidades Hoy', value: 1243, icon: Factory, color: '#3B82F6' },
        { name: 'En Producción', value: 856, icon: Clock, color: '#F59E0B' },
        { name: 'Tasa Eficiencia', value: '92.5%', icon: TrendingUp, color: '#10B981' },
        { name: 'Envíos Pendientes', value: 42, icon: Truck, color: '#EF4444' }
      ]);
    }, 500);
  }, []);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header 
        title="Producción en Tiempo Real" 
        subtitle="Monitoreo de fabricación y logística" 
      />
      
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Estadísticas de producción */}
        <motion.div 
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {productionStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div>

        {/* Línea de tiempo de producción */}
        <ProductionTimeline className="mb-8" />

        {/* Tabla y gráficos */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
          <div className='lg:col-span-2'>
            <ProductionTable />
          </div>
          <ShipmentTracking />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;