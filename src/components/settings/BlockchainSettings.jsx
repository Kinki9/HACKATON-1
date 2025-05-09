import { CubeTransparentIcon, WalletIcon, QrCodeIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'; // Importación corregida
import { mainnet, polygon, bsc } from 'wagmi/chains';
import { WagmiConfig } from 'wagmi';

// Opción 1: Importación directa del provider
import { Web3Provider } from "@ethersproject/providers";

// 1. Configuración de cadenas y proyecto
const chains = [mainnet, polygon, bsc];
const projectId = 'b763ba612fceccf95f0eb9cdcc72ade0'; // Reemplaza con tu ID real

// 2. Configuración de metadatos
const metadata = {
  name: 'Tu Aplicación Blockchain',
  description: 'Configuración de Blockchain',
  url: 'https://tuapp.com',
  icons: ['https://tuapp.com/logo.png']
};

// 3. Crear configuración Wagmi
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata
});

// 4. Crear modal Web3
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    '--w3m-accent-color': '#3b82f6',
    '--w3m-background-color': '#3b82f6'
  }
});

const BlockchainSettings = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [network, setNetwork] = useState("");
  const [provider, setProvider] = useState(null);
  const [smartContracts, setSmartContracts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setupProvider();
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    }
  };

  const setupProvider = async () => {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(web3Provider);
    
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
    
    const network = await web3Provider.getNetwork();
    setNetwork(getNetworkName(network.chainId));
    setIsConnected(true);
    
    setupEventListeners(web3Provider);
  };

  const getNetworkName = (chainId) => {
    switch(chainId) {
      case 1: return "Ethereum Mainnet";
      case 137: return "Polygon Mainnet";
      case 56: return "Binance Smart Chain";
      case 5: return "Ethereum Goerli Testnet";
      default: return `Unknown Network (ID: ${chainId})`;
    }
  };

  const setupEventListeners = (web3Provider) => {
    window.ethereum.on('accountsChanged', (accounts) => {
      setWalletAddress(accounts[0] || "");
      if (!accounts[0]) {
        setIsConnected(false);
      }
    });

    window.ethereum.on('chainChanged', (chainId) => {
      setNetwork(getNetworkName(parseInt(chainId, 16)));
      window.location.reload();
    });
  };

 const connectWallet = async () => {
  try {
    // Verificar que window.ethereum existe
    if (!window.ethereum) {
      throw new Error("No se detectó un proveedor Ethereum");
    }

    // Crear el proveedor según la versión
    let provider;
    if (Web3Provider) {
      // Para @ethersproject/providers
      provider = new Web3Provider(window.ethereum);
    } else if (ethers?.providers?.Web3Provider) {
      // Para ethers v5
      provider = new ethers.providers.Web3Provider(window.ethereum);
    } else if (BrowserProvider) {
      // Para ethers v6
      provider = new BrowserProvider(window.ethereum);
    } else {
      throw new Error("No se pudo inicializar el proveedor ethers");
    }

    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
    
    const network = await provider.getNetwork();
    setNetwork(network.name);
    setIsConnected(true);

  } catch (error) {
    console.error("Error en setupProvider:", error);
    alert(`Error: ${error.message}`);
  }
};
    
  const detectEthereumProvider = () => {
  // Verificar si ya está disponible
  if (window.ethereum) {
    return window.ethereum;
  }

  // Buscar proveedores inyectados
  if (window.web3?.currentProvider) {
    return window.web3.currentProvider;
  }

  // Buscar proveedores modernos
  if (document.querySelector('web3-provider')) {
    return document.querySelector('web3-provider');
  }

  return null;
};
    

  const disconnectWallet = () => {
    setWalletAddress("");
    setNetwork("");
    setIsConnected(false);
    setProvider(null);
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
          {isConnected ? (
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
                <button 
                  className="text-sm bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={disconnectWallet}
                >
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