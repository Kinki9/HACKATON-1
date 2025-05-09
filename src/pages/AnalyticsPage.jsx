// ProductsPage.jsx
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { Cpu, AlertTriangle, Activity, Truck } from "lucide-react";
import ProductionTrendChart from "../components/products/ProductionTrendChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
  // Datos simulados (evitar undefined)
  const stats = [
    { name: "Chips Fabricados", value: 1243, icon: Cpu, color: "#6366F1" },
    // ... otros datos
  ];

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Fabricación de Semiconductores' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Stats */}
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </motion.div>

        <ProductsTable /> {/* ← Asegúrate que este componente reciba sus props correctamente */}

        {/* Gráficos */}
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <ProductionTrendChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;