import { meowment } from "@thirdweb-dev/chains";

export const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "c6a37e98c099642581e4e4074d51d562";
export const mycustomChain = {
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
};
export const CONTRACT_ADDR = "0x97067D7B66cf8d32c65a38a1D542A7C217C41BAb";
export const FACTORY_ADDR = "0x03936ED655fbe22352e989966Aa033A7cD62FC50";
