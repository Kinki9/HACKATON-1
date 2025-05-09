const AnalyticsPage = () => {
  const [selectedChip, setSelectedChip] = useState(null);
  const [timeRange, setTimeRange] = useState("lastWeek");

  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header 
        title="Control de Calidad"  // Antes: "Centro de Control Aeroespacial"
        subtitle="Monitoreo de parámetros críticos" 
      />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-100">Semiconductores Activos</h3> {/* Cambio de texto */}
          <ExportControls timeRange={timeRange} setTimeRange={setTimeRange} /> {/* Mismo componente */}
        </div>

        <QualityAlerts /> {/* Reemplaza EnvironmentalAlerts */}
        <OverviewCards />  {/* Ahora muestra: chips OK, en riesgo, etc. */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ChipList onSelectChip={setSelectedChip} selectedChip={selectedChip} /> {/* Antes: SatelliteList */}
          <ChipMonitoring chip={selectedChip} /> {/* Antes: SatelliteMonitoring */}
        </div>

        <ParameterTrendChart timeRange={timeRange} /> {/* Antes: EnvironmentalImpactChart */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <VoltageAnalysis timeRange={timeRange} />  {/* Antes: MaterialUsage */}
          <DefectCorrelation timeRange={timeRange} /> {/* Antes: WasteProduction */}
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;