import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu,
  Activity,
  TrendingUp,
  AlertCircle,
  Package,
  Gauge,
  Thermometer,
  CheckCircle,
  Factory,
  Truck
} from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

const OverviewPage = () => {
  // Datos de producción para el carrusel
  const productionHighlights = [
    {
      title: "Producción Actual",
      value: "1,243",
      unit: "unidades",
      description: "Chips fabricados hoy",
      icon: <Cpu className="text-blue-500" size={24} />,
      trend: "up"
    },
    {
      title: "Eficiencia",
      value: "94.3",
      unit: "%",
      description: "Tasa de aprobación QC",
      icon: <Gauge className="text-green-500" size={24} />,
      trend: "up"
    },
    {
      title: "Temperatura Avg",
      value: "72",
      unit: "°C",
      description: "En línea de producción",
      icon: <Thermometer className="text-yellow-500" size={24} />,
      trend: "neutral"
    },
    {
      title: "Envíos Hoy",
      value: "42",
      unit: "órdenes",
      description: "Preparadas para envío",
      icon: <Truck className="text-purple-500" size={24} />,
      trend: "down"
    }
  ];

  // Datos de calidad
  const qualityStats = [
    { name: "Chips Aprobados", value: "2,312", change: "+124", trend: "up" },
    { name: "Defectos", value: "144", change: "-8", trend: "down" },
    { name: "Tiempo QC Avg", value: "2.4", unit: "min", change: "-0.3", trend: "down" }
  ];

  // Datos de órdenes
  const orderStats = [
    { name: "Nuevas Órdenes", value: "18", change: "+3", trend: "up" },
    { name: "En Producción", value: "24", change: "+5", trend: "up" },
    { name: "Retrasadas", value: "3", change: "-1", trend: "down" }
  ];

  // Estado para el carrusel
  const [currentHighlight, setCurrentHighlight] = useState(0);

  // Rotación automática del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => 
        prev === productionHighlights.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header 
        title="Resumen General" 
        subtitle="Vista consolidada de todas las operaciones" 
      />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Sección principal - Carrusel de producción */}
        <div className="mb-8 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHighlight}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-400">Producción en Tiempo Real</h2>
                  <div className="flex items-end mt-2">
                    <p className="text-3xl font-bold text-white">
                      {productionHighlights[currentHighlight].value}
                    </p>
                    <p className="text-xl text-gray-400 ml-1">
                      {productionHighlights[currentHighlight].unit}
                    </p>
                    {productionHighlights[currentHighlight].trend === "up" ? (
                      <span className="flex items-center ml-2 text-green-500">
                        <TrendingUp size={18} className="mr-1" />
                        <span>+5.2%</span>
                      </span>
                    ) : productionHighlights[currentHighlight].trend === "down" ? (
                      <span className="flex items-center ml-2 text-red-500">
                        <TrendingUp size={18} className="mr-1 transform rotate-180" />
                        <span>-2.1%</span>
                      </span>
                    ) : null}
                  </div>
                  <p className="text-gray-400 mt-1">
                    {productionHighlights[currentHighlight].description}
                  </p>
                </div>
                <div className="p-3 bg-gray-700 rounded-lg">
                  {productionHighlights[currentHighlight].icon}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicadores del carrusel */}
          <div className="flex px-6 pb-4 space-x-2">
            {productionHighlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHighlight(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentHighlight === index 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-600 w-3'
                }`}
                aria-label={`Mostrar ${productionHighlights[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Resumen de Calidad */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Control de Calidad
              </h3>
              <span className="text-xs px-2 py-1 bg-green-900/50 text-green-400 rounded-full">
                +2.4%
              </span>
            </div>
            <div className="space-y-4">
              {qualityStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-400">{stat.name}</span>
                  <div className="flex items-baseline">
                    <span className="font-medium text-white mr-2">
                      {stat.value} {stat.unit && stat.unit}
                    </span>
                    <span className={`text-xs ${
                      stat.trend === "up" ? "text-green-500" : 
                      stat.trend === "down" ? "text-red-500" : "text-yellow-500"
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resumen de Órdenes */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="text-blue-500 mr-2" size={20} />
                Órdenes
              </h3>
              <span className="text-xs px-2 py-1 bg-blue-900/50 text-blue-400 rounded-full">
                18 nuevas
              </span>
            </div>
            <div className="space-y-4">
              {orderStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-400">{stat.name}</span>
                  <div className="flex items-baseline">
                    <span className="font-medium text-white mr-2">
                      {stat.value}
                    </span>
                    <span className={`text-xs ${
                      stat.trend === "up" ? "text-green-500" : 
                      stat.trend === "down" ? "text-red-500" : "text-yellow-500"
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alertas del Sistema */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertCircle className="text-yellow-500 mr-2" size={20} />
                Alertas Recientes
              </h3>
              <span className="text-xs px-2 py-1 bg-yellow-900/50 text-yellow-400 rounded-full">
                3 activas
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                </div>
                <p className="ml-2 text-sm text-gray-300">
                  <span className="font-medium text-white">Temperatura crítica</span> en Lote-2023-018
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                </div>
                <p className="ml-2 text-sm text-gray-300">
                  <span className="font-medium text-white">Retraso en envío</span> #SH-2023-042
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-2 text-sm text-gray-300">
                  <span className="font-medium text-white">Mantenimiento programado</span> para mañana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos resumen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Eficiencia de producción */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Eficiencia Diaria</h3>
              <span className="text-xs px-2 py-1 bg-green-900/50 text-green-400 rounded-full">
                +5.2% vs ayer
              </span>
            </div>
            <div className="h-64 bg-gray-700/50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Gráfico de eficiencia</p>
            </div>
          </div>

          {/* Distribución de defectos */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Tipos de Defectos</h3>
              <span className="text-xs px-2 py-1 bg-red-900/50 text-red-400 rounded-full">
                -8% vs semana pasada
              </span>
            </div>
            <div className="h-64 bg-gray-700/50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Gráfico de defectos</p>
            </div>
          </div>
        </div>

        {/* Actividad reciente */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Actividad Reciente</h3>
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              Ver historial completo →
            </button>
          </div>
          <div className="space-y-3">
            {[
              "Nuevo lote iniciado: LOTE-2023-019 (GPU 5nm)",
              "Orden completada #2157 para TechCorp",
              "Alerta de temperatura en línea 3 resuelta",
              "Actualización del sistema de control de calidad"
            ].map((activity, index) => (
              <div key={index} className="flex items-start py-2">
                <div className="flex-shrink-0 mt-1">
                  <div className={`h-2 w-2 rounded-full ${
                    index === 0 ? 'bg-green-500' : 
                    index === 1 ? 'bg-blue-500' : 
                    index === 2 ? 'bg-yellow-500' : 'bg-purple-500'
                  }`}></div>
                </div>
                <p className="ml-2 text-sm text-gray-300">
                  {activity} <span className="text-gray-500 ml-2">hace {index + 1} hora{index !== 0 ? 's' : ''}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;