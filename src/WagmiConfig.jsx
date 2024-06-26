import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";


const queryClient = new QueryClient();
const WagmiConfig = () => {
  const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: false,
  });
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

export default WagmiConfig;
