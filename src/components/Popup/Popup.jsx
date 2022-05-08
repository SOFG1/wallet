import img from "../../img/metamask.svg";
import etherImg from "../../img/eth.svg";
import { useState } from "react";
import cn from "classnames";

const Popup = (props) => {
  const handleClick = (e)=> {
    if (!e.target.closest('.popup-container')) props.togglePopup(false)
  }
  return (
    <div onClick={(e)=> handleClick(e)} className={cn("popup", "hidden", { ["is-visible"]: props.opened })}>
      <div className="popup-container">
        <h1>
          Please Connect your Wallet <br />
          with Ethereum Mainnet Network
        </h1>
        <button className="metamask-button">
          <img src={img} alt="metamask" />
        </button>
        <p className="connected-wallet"></p>
        <p id="acc_about"></p>
        <h2>Select a Level and Join Game</h2>
        <div className="input-box">
          <select
            value={props.selectedLevel}
            onChange={(e) => props.selectLevel(e.target.value)}
            id="join_input"
            className="join-input"
          >
            <option value="12">12 Level - 1 ETH</option>
            <option value="11">11 Level - 0.8 ETH</option>
            <option value="10">10 Level - 0.7 ETH</option>
            <option value="9">9 Level - 0.6 ETH</option>
            <option value="8">8 Level - 0.5 ETH</option>
            <option value="7">7 Level - 0.4 ETH</option>
            <option value="6">6 Level - 0.3 ETH</option>
            <option value="5">5 Level - 0.2 ETH</option>
            <option value="4">4 Level - 0.1 ETH</option>
            <option value="3">3 Level - 0.08 ETH</option>
            <option value="2">2 Level - 0.06 ETH</option>
            <option value="1">1 Level - 0.03 ETH</option>
          </select>
          <img src={etherImg} alt="eth-input" />
        </div>
        <button className="join-button-popup">Join Game</button>
        <button className="cancel-button popup-close" onClick={()=> props.togglePopup(false)}>Cancel</button>
        <div id="alert_box"></div>
      </div>
    </div>
  );
};

export default Popup;
