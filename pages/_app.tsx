import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { CHAIN, CLIENT_ID, FACTORY_ADDR } from "../utils/constants";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 3944093, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://evm.dymension.meowment.xyz"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "meowment",
          symbol: "MWN",
        },
        shortName: "mwn", // Display value shown in the wallet UI
        slug: "mwn", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "meowment", // Name of the network
        name: "meowment", // Name of the network
      }}
    
    >
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
