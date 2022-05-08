import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { Injected, WalletConnect } from "./components/Connectors";

function App() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connectMetaMask() {
    try {
      await activate(Injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function connectConnectWallet() {
    try {
      await activate(WalletConnect);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      <div className="popup">
        <h1>
          Please Connect your Wallet <br /> with Ethereum Mainnet Network
        </h1>
        {active ? (
          <>
            <button onClick={disconnect}>Disconnect</button>
            <p>{account}</p>
          </>
        ) : (
          <>
            <button onClick={connectConnectWallet}>
              Connect to WalletConenct
            </button>{" "}
            <button onClick={connectMetaMask}>Connect to MetaMask</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
