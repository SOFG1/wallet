import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
//Metamask
export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})
//ConnectWallet
export const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
   });