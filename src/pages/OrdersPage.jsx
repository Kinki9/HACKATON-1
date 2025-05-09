import { Cpu, Clock, CheckCircle, DollarSign, Package } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SemiconductorOrdersChart from "../components/orders/SemiconductorOrderChart"
import OrderStatusDistribution from "../components/orders/OrderStatusDistribution";
import SemiconductorOrdersTable from "../components/orders/SemiconductorOrdersTable";
import MonthlyProductionInvestment from "../components/orders/MonthlyProductionInvestment";
import TotalProductionCost from "../components/orders/TotalProductionCost";

const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
      <Header title={"Gestión de Semiconductores"} subtitle="Órdenes y producción" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Estadísticas rápidas */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard 
            name='Órdenes activas' 
            icon={Cpu} 
            value="24" 
            color='#6366F1' 
          />
          <StatCard 
            name='En producción' 
            icon={Clock} 
            value="18" 
            color='#F59E0B' 
          />
          <StatCard
            name='Completadas'
            icon={CheckCircle}
            value="156"
            color='#10B981'
          />
          <TotalProductionCost />
        </motion.div>

        {/* Gráficos superiores */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SemiconductorOrdersChart />
          <OrderStatusDistribution />
        </div>

        {/* Inversión mensual */}
        <MonthlyProductionInvestment />

        {/* Tabla de órdenes */}
        <SemiconductorOrdersTable />
      </main>
    </div>
  );
};
export default OrdersPage;