import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Thermometer, Gauge, AlertCircle, CheckCircle } from 'lucide-react';
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import QualityTrendChart from "../components/analytics/QualityTrendChart";
import DefectAnalysis from "../components/analytics/DefectAnalysis";
import EnvironmentalImpact from "../components/analytics/EnvironmentalImpact";

const AnalyticsPage = () => {
  const [qualityStats, setQualityStats] = useState([
    { name: 'Chips Analizados', value: 0, icon: Cpu, color: '#6366F1' },
    { name: 'Temperatura Avg', value: '0°C', icon: Thermometer, color: '#EF4444' },
    { name: 'Rendimiento', value: '0%', icon: Gauge, color: '#10B981' },
    { name: 'Chips Aprobados', value: 0, icon: CheckCircle, color: '#22C55E' }
  ]);

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setQualityStats([
        { name: 'Chips Analizados', value: 2456, icon: Cpu, color: '#6366F1' },
        { name: 'Temperatura Avg', value: '72°C', icon: Thermometer, color: '#EF4444' },
        { name: 'Rendimiento', value: '94.3%', icon: Gauge, color: '#10B981' },
        { name: 'Chips Aprobados', value: 2312, icon: CheckCircle, color: '#22C55E' }
      ]);
    }, 500);
  }, []);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header 
        title="Control de Calidad" 
        subtitle="Análisis de producción y defectos" 
      />
      
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Estadísticas de calidad */}
        <motion.div 
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {qualityStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div>

        {/* Gráficos principales */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <QualityTrendChart />
          <DefectAnalysis />
        </div>

        {/* Impacto ambiental */}
        <EnvironmentalImpact />
      </main>
    </div>
  );
};

export default AnalyticsPage;