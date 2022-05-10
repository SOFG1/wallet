import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
//Metamask
export const Metamask = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
//ConnectWallet
export const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/fcfec84c627ac247f1f06006731d50db`,
  //bridge: "https://sofg1.github.io/wallet",
  infuraId: "fcfec84c627ac247f1f06006731d50db",
  qrcode: true,
});