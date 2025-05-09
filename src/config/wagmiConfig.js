import { createConfig, http } from 'wagmi'
import { mainnet, polygon, bsc } from 'wagmi/chains'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

// 1. Define las cadenas soportadas
export const chains = [mainnet, polygon, bsc]

// 2. Configuración de WalletConnect
const projectId = 'Tb763ba612fceccf95f0eb9cdcc72ade0' // Reemplaza con tu ID real

// 3. Metadatos de tu aplicación
const metadata = {
  name: 'Tu Aplicación',
  description: 'Configuración Blockchain',
  url: 'https://tuapp.com',
  icons: ['https://tuapp.com/logo.png']
}

// 4. Configuración de Wagmi usando http() en lugar de publicProvider
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [bsc.id]: http()
  }
})

// 5. Configuración de Web3Modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeVariables: {
    '--w3m-accent-color': '#3b82f6',
    '--w3m-background-color': '#3b82f6'
  }
})