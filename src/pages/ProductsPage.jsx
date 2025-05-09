import { Cpu, AlertTriangle, Activity, Truck } from "lucide-react"; // Íconos actualizados

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Fabricación de Semiconductores' subtitle="Datos en tiempo real" /> {/* Cambio de título */}

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS: Misma estructura, nuevos datos */}
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
          <StatCard 
            name='Chips Fabricados' 
            icon={Cpu}  // Antes: Package
            value={1243} 
            color='#6366F1' 
          />
          <StatCard 
            name='Tasa de Fallos' 
            icon={AlertTriangle} 
            value="5.2%" 
            color='#F59E0B' 
          />
          <StatCard 
            name='Rendimiento (Avg)' 
            icon={Activity}  // Antes: TrendingUp
            value="92.5%" 
            color='#10B981' 
          />
          <StatCard 
            name='Envíos Hoy' 
            icon={Truck}  // Antes: DollarSign
            value={42} 
            color='#EF4444' 
          />
        </motion.div>

        <ProductsTable /> {/* Tabla modificada (ver abajo) */}

        {/* CHARTS: Misma estructura, nuevos datos */}
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <ProductionTrendChart />  {/* Antes: SalesTrendChart */}
          <DefectRateChart />       {/* Nuevo gráfico de fallos */}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;