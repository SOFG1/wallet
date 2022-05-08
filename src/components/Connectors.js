import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
//Metamask
export const Metamask = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
  name: "metamask"
})
//ConnectWallet
export const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    infuraId: "86913d546955160be892b40e6385e539",
    qrcode: true,
   });