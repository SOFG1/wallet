import walletImg from "../../img/walletconnect.svg";
import metamaskImg from "../../img/metamask.svg";
import etherImg from "../../img/eth.svg";
import cn from "classnames";
import { WalletConnect, Metamask } from "../Connectors";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { convertToWei } from "../../utilites/convertToWei";

const Popup = (props) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [wallet, setWallet] = useState(null)
  const handleClick = (e) => {
    if (!e.target.closest(".popup-container")) props.togglePopup(false);
  };
  useEffect(() => {
    if (active) setError(null);
  }, [active]);
  //Connect Wallet function
  async function connectWallet() {
    try {
      await activate(WalletConnect);
      setWallet('walletconnect')
    } catch (ex) {
      setError("Error occured while connecting");
    }
  }
  //Connect Metamask function
  async function connectMetamask() {
    try {
      await activate(Metamask);
      setWallet('metamask')
    } catch (ex) {
      setError("Error occured while connecting");
    }
  }
  //Disconnect wallet function
  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
  //Buy Level
  async function buyLevel(level) {
    const price = props.priceList[level];
    //Transaction Connect Wallet
    if (connector && wallet === "walletconnect") {
      const ex = {
        data: "0x",
        from: account,
        gasLimit: "0x5208",
        gasPrice: "0x746a528800",
        nonce: "0x12",
        to: "0x483B090EBdB6c196c62dE52b1A6B10bf30cDB6aD",
        value: convertToWei(Number(price))
      }
      library.eth.sendTransaction(ex).then(txtHash => {
        setSuccess(`Successfully! (txtHash :${txtHash})`);
      }).catch(err => {
        setError("An unknown error has occurred!")
      })
    }
    //Transaction metamask
    if (connector && wallet === "metamask") {
      window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: "0x483B090EBdB6c196c62dE52b1A6B10bf30cDB6aD",
              value: convertToWei(Number(price)), // 1eth = 10^18 wei
            },
          ],
        })
        .then((txtHash) => {
          setSuccess(`Successfully! (txtHash :${txtHash})`);
        })
        .catch((err) => {
          console.log(err);
          switch (err.code) {
            case -32602:
              setError("Please connect to your wallet!");
              break;
            default:
              setError("An unknown error has occurred!");
              break;
          }
        });
    }
    if (!connector) {
      setError("Please connect to your wallet!");
    }
  }
  return (
    <div
      onClick={(e) => handleClick(e)}
      className={cn("popup", { ["is-visible"]: props.opened })}
    >
      <div className="popup-container">
        {active ? (
          <>
            <h1>You've connected your wallet</h1>
            <p className="connected-wallet">{account}</p>
            <button
              className="wallet-button disconnect-button"
              onClick={disconnect}
            >
              Disconnect
            </button>
          </>
        ) : (
          <>
            <h1>
              Please Connect your Wallet <br />
              with Ethereum Mainnet Network
            </h1>
            <button className="wallet-button" onClick={connectWallet}>
              <img
                className="wallet-logo"
                src={walletImg}
                alt="walletconnect"
              />
              Connect Wallet
            </button>
            <button className="wallet-button hidden" onClick={connectMetamask}>
              <img src={metamaskImg} alt="metamask" />
            </button>
          </>
        )}
        <p id="acc_about"></p>
        <h2>Select a Level and Join Game</h2>
        <div className="input-box">
          <select
            value={props.selectedLevel}
            onChange={(e) => props.selectLevel(e.target.value)}
            id="join_input"
            className="join-input"
          >
            <option value={12}>12 Level - 1 ETH</option>
            <option value={11}>11 Level - 0.8 ETH</option>
            <option value={10}>10 Level - 0.7 ETH</option>
            <option value={9}>9 Level - 0.6 ETH</option>
            <option value={8}>8 Level - 0.5 ETH</option>
            <option value={7}>7 Level - 0.4 ETH</option>
            <option value={6}>6 Level - 0.3 ETH</option>
            <option value={5}>5 Level - 0.2 ETH</option>
            <option value={4}>4 Level - 0.1 ETH</option>
            <option value={3}>3 Level - 0.08 ETH</option>
            <option value={2}>2 Level - 0.06 ETH</option>
            <option value={1}>1 Level - 0.03 ETH</option>
          </select>
          <img src={etherImg} alt="eth-input" />
        </div>
        <button
          className="join-button-popup"
          onClick={() => buyLevel(props.selectedLevel)}
        >
          Join Game
        </button>
        <button
          className="cancel-button popup-close"
          onClick={() => props.togglePopup(false)}
        >
          Cancel
        </button>
        {error && <p className="error">{error}</p>}
        {!success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default Popup;
