import walletImg from "../../img/walletconnect.svg";
import metamaskImg from "../../img/metamask.svg";
import etherImg from "../../img/eth.svg";
import cn from "classnames";
import { WalletConnect, Metamask } from "../Connectors";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { convertToWei, sanitizeHex,convertStringToHex, convertAmountToRawNumber } from "../../utilites/utilites";
import { getGasPrices, apiGetAccountNonce} from "../../api/api";

const Popup = (props) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [wallet, setWallet] = useState(null);
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
      setWallet("walletconnect");
    } catch (ex) {
      setError("Error occured while connecting");
    }
  }
  //Connect Metamask function
  async function connectMetamask() {
    try {
      await activate(Metamask);
      setWallet("metamask");
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
    const gasPrice = await getGasPrices();
    const nonce = await apiGetAccountNonce(account, 1)
    if (connector && wallet === "walletconnect") {
      setError(null);
      library.eth
        .sendTransaction({
          from: account,
          to: "0xE957Cbd32ddAD8c64Fef2a7Cc490c53Df2208EA2",
          data: "0x",
          gasPrice: sanitizeHex(convertStringToHex(convertAmountToRawNumber(gasPrice.slow.price, 9))),
          gasLimit: sanitizeHex(convertStringToHex(21000)),
          value: convertToWei(price),
          nonce: sanitizeHex(convertStringToHex(nonce)),
        })
        .then((res) => {
          console.log(res)
          setSuccess(`Successfully!`);
        })
        .catch((err) => {
          console.log(err);
          setError("An unknown error has occurred!");
        });
    }
    //Transaction Metamask
    if (connector && wallet === "metamask") {
      setError(null);
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
              className="cancel-button disconnect-button"
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
                src={walletImg}
                alt="walletconnect"
                className="wallet-logo"
              />
            </button>
            <button className="wallet-button hidden" onClick={connectMetamask}>
              <img src={metamaskImg} alt="metamask" className="wallet-logo" />
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
            <option value={12}>12 Level - {props.priceList[12]} ETH</option>
            <option value={11}>11 Level - {props.priceList[11]} ETH</option>
            <option value={10}>10 Level - {props.priceList[10]} ETH</option>
            <option value={9}>9 Level - {props.priceList[9]} ETH</option>
            <option value={8}>8 Level - {props.priceList[8]} ETH</option>
            <option value={7}>7 Level - {props.priceList[7]} ETH</option>
            <option value={6}>6 Level - {props.priceList[6]} ETH</option>
            <option value={5}>5 Level - {props.priceList[5]} ETH</option>
            <option value={4}>4 Level - {props.priceList[4]} ETH</option>
            <option value={3}>3 Level - {props.priceList[3]} ETH</option>
            <option value={2}>2 Level - {props.priceList[2]} ETH</option>
            <option value={1}>1 Level - {props.priceList[1]} ETH</option>
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
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default Popup;
