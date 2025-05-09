import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/CompanyProfile";
import DangerZone from "../components/settings/TeamManagement";
import Notifications from "../components/settings/Billing";
import Profile from "../components/settings/ApiIntegrations";
import Security from "../components/settings/Compliance";
import TeamManagement from "../components/settings/TeamManagement";
import Billing from "../components/settings/Billing";
import CompanyProfile from "../components/settings/CompanyProfile";
import ApiIntegrations from "../components/settings/ApiIntegrations";
import Compliance from "../components/settings/Compliance";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Company Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8 space-y-8'>
				{/* Sección de perfil personal */}
				<Profile />
				
				{/* Secciones de configuración empresarial */}
				<CompanyProfile />
				<TeamManagement />
				<Billing />
				
				{/* Configuraciones técnicas */}
				<ApiIntegrations />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				
				{/* Cumplimiento y seguridad */}
				<Compliance />
				
				{/* Zona de acciones críticas */}
				<DangerZone />
			</main>
		</div>
	);
};

export default SettingsPage;