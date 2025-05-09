import Header from "../components/common/Header";
import TeamManagement from "../components/settings/TeamManagement";
import Billing from "../components/settings/Billing";
import CompanyProfile from "../components/settings/CompanyProfile";
import ApiIntegrations from "../components/settings/ApiIntegrations";
import Compliance from "../components/settings/Compliance";
import BlockchainSettings from "../components/settings/BlockchainSettings"; // Nuevo componente


const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title='Company Settings' />
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8 space-y-8'>
        {/* Sección de perfil personal */}
        
        {/* Secciones de configuración empresarial */}
        <CompanyProfile />
        <TeamManagement />
        <Billing />
        
        {/* Configuraciones técnicas */}
        <ApiIntegrations />
        <BlockchainSettings /> {/* Nueva sección de blockchain */}

        
        {/* Cumplimiento y seguridad */}
        <Compliance />
        
        {/* Zona de acciones críticas */}
      </main>
    </div>
  );
};

export default SettingsPage;