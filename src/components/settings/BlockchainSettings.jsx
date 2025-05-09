import { CubeTransparentIcon, WalletIcon, QrCodeIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const BlockchainSettings = () => {
  const [walletAddress, setWalletAddress] = useState("0x71C7656EC7ab88b098defB751B7401B5f6d8976F");
  const [network, setNetwork] = useState("Ethereum Mainnet");
  const [smartContracts, setSmartContracts] = useState([
    { id: 1, name: "PaymentProcessor", address: "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7", verified: true },
    { id: 2, name: "TokenContract", address: "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b", verified: false },
  ]);

  const connectWallet = async () => {
    try {
    // 1. Verificar si MetaMask está instalado
    if (!window.ethereum) {
      throw new Error("Por favor instala MetaMask u otra wallet Ethereum");
    }

    // 2. Crear proveedor ethers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // 3. Solicitar acceso a la cuenta
    const accounts = await provider.send("eth_requestAccounts", []);
    
    if (accounts.length === 0) {
      throw new Error("No se encontraron cuentas. Por favor conecta tu wallet.");
    }

    // 4. Obtener dirección y red
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();

    // 5. Actualizar estado
    setWalletAddress(address);
    setNetwork(network.name === "homestead" ? "Ethereum Mainnet" : network.name);
    
    // 6. Escuchar cambios de cuenta
    window.ethereum.on("accountsChanged", (newAccounts) => {
      setWalletAddress(newAccounts[0] || "");
    });

      // 7. Escuchar cambios de red
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    } catch (error) {
    console.error("Error al conectar la wallet:", error);
    alert(`Error: ${error.message}`);
  }

  };

  const verifyContract = (contractId) => {
    // Lógica de verificación de contrato
    setSmartContracts(smartContracts.map(contract => 
      contract.id === contractId ? {...contract, verified: true} : contract
    ));
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
        <CubeTransparentIcon className="h-5 w-5" />
        Blockchain Configuration
      </h2>
      
      <div className="space-y-6">
        {/* Sección de Wallet */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
            <WalletIcon className="h-5 w-5" />
            Wallet Connection
          </h3>
          {walletAddress ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-gray-600 p-2 rounded-full">
                  <QrCodeIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-mono text-sm break-all">{walletAddress}</p>
                  <p className="text-gray-400 text-xs">Connected to: {network}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => navigator.clipboard.writeText(walletAddress)}
                >
                  Copy Address
                </button>
                <button className="text-sm bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md">
                  Disconnect
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-300 mb-3">No wallet connected</p>
              <button 
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                onClick={connectWallet}
              >
                <WalletIcon className="h-4 w-4" />
                Connect Wallet
              </button>
            </div>
          )}
        </div>
        
        {/* Sección de Red */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
            <ServerStackIcon className="h-5 w-5" />
            Network Configuration
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Blockchain Network</label>
              <select 
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                className="w-full bg-gray-600 border border-gray-500 rounded-md px-3 py-2 text-white"
              >
                <option>Ethereum Mainnet</option>
                <option>Polygon Mainnet</option>
                <option>Binance Smart Chain</option>
                <option>Ethereum Goerli Testnet</option>
                <option>Local Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">RPC Endpoint</label>
              <input
                type="text"
                placeholder="https://mainnet.infura.io/v3/YOUR-PROJECT-ID"
                className="w-full bg-gray-600 border border-gray-500 rounded-md px-3 py-2 text-white"
              />
            </div>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Save Network Settings
            </button>
          </div>
        </div>
        
        {/* Sección de Smart Contracts */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-2">Smart Contracts</h3>
          <div className="space-y-3">
            {smartContracts.length > 0 ? (
              smartContracts.map(contract => (
                <div key={contract.id} className="bg-gray-800 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="text-white">{contract.name}</p>
                    <p className="text-gray-400 font-mono text-sm break-all">{contract.address}</p>
                  </div>
                  {contract.verified ? (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                  ) : (
                    <button 
                      className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
                      onClick={() => verifyContract(contract.id)}
                    >
                      Verify
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-400">No smart contracts registered</p>
            )}
            <button className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md w-full">
              Add New Contract
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSettings;