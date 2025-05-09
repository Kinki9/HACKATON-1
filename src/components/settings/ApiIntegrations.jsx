import { CpuChipIcon, LinkIcon } from "@heroicons/react/24/outline";

const ApiIntegrations = () => {
  const integrations = [
    { name: "Slack", connected: true, lastUsed: "Hoy" },
    { name: "Google Workspace", connected: true, lastUsed: "Ayer" },
    { name: "Salesforce", connected: false },
    { name: "Zapier", connected: false },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
        <CpuChipIcon className="h-5 w-5" />
        Integraciones API
      </h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-2">API Keys</h3>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-300">Administra las llaves API para integracion con otros servicios</p>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Generar nueva llave API
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-gray-800 p-3 rounded">
              <div>
                <p className="text-white font-mono text-sm">sk_live_••••••••••••••••••••••••</p>
                <p className="text-gray-400 text-xs">Created: May 1, 2023</p>
              </div>
              <button className="text-red-500 hover:text-red-400 text-sm">Revoke</button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-white mb-2">Apps conectadas</h3>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="space-y-3">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-300 text-xs">{integration.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white">{integration.name}</p>
                    {integration.connected && (
                      <p className="text-gray-400 text-xs">Last used: {integration.lastUsed}</p>
                    )}
                  </div>
                </div>
                {integration.connected ? (
                  <button className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-4 py-1 rounded-md">
                    Desconectar
                  </button>
                ) : (
                  <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md flex items-center gap-1">
                    <LinkIcon className="h-3 w-3" />
                    Conectar
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegrations;