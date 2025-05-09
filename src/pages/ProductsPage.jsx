import { useState, useEffect } from 'react'; // Asegúrate de importar hooks
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import ProductsTable from "../components/products/ProductsTable";
import ProductionTrendChart from "../components/products/ProductionTrendChart";
import { Cpu, AlertTriangle, Activity, Truck } from "lucide-react";

const ProductsPage = () => {
  // 1. Inicializa estados con valores por defecto
  const [stats, setStats] = useState([
    { name: 'Chips Fabricados', value: 0, icon: Cpu, color: '#6366F1' },
    { name: 'Tasa de Fallos', value: '0%', icon: AlertTriangle, color: '#F59E0B' },
    { name: 'Rendimiento', value: '0%', icon: Activity, color: '#10B981' },
    { name: 'Envíos Hoy', value: 0, icon: Truck, color: '#EF4444' }
  ]);

  // 2. Carga datos de forma segura
  useEffect(() => {
    try {
      // Simula carga de datos
      setTimeout(() => {
        setStats([
          { name: 'Chips Fabricados', value: 1243, icon: Cpu, color: '#6366F1' },
          { name: 'Tasa de Fallos', value: '5.2%', icon: AlertTriangle, color: '#F59E0B' },
          { name: 'Rendimiento', value: '92.5%', icon: Activity, color: '#10B981' },
          { name: 'Envíos Hoy', value: 42, icon: Truck, color: '#EF4444' }
        ]);
      }, 500);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, []);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Fabricación de Semiconductores' subtitle="Datos en tiempo real" />
      
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Stats - con verificación */}
        {stats && (
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        )}

        {/* Tabla con protección */}
        <div className='mb-8'>
          <ProductsTable />
        </div>

        {/* Gráficos */}
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <ProductionTrendChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;