import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider, useAccount } from "wagmi";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import config from "./WagmiConfig";
import { useEffect } from "react";
import axios from "axios";



const queryClient = new QueryClient();
const ConnectWallet = () => {  
  const { address, isConnected, connector } = useAccount({config});

  useEffect(() => {
    const initUser = async (walletId) => {
      try {
        const response = await axios.post('http://localhost:8080/initialize-user', {
          walletId
        }, {});

        if (response.status === 200) {
          console.log('User initialized successfully');
        } else {
          console.error('User not initialized');
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    };

    if (isConnected && address) {
      console.log(`Connected to wallet ID: ${address}`);
      localStorage.setItem('walletId', address);
      initUser(address);
    }
  }, [isConnected, address, connector]);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default ConnectWallet;
