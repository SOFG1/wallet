import Pic from '../../img/eth.svg'

const Level = (props)=> {
    return (
        <div className="level-item">
        <div className="level-price">
          <p>Level {props.level}</p>
          <p className="flex-right">
            <img src={Pic} alt="eth" />
            {props.price} ETH
          </p>
        </div>
        <div className="level-info">
          <p>{props.time} Minutes</p>
          <p className="flex-right">{props.percent}%</p>
        </div>
        <div className="level-activate">
          <h2>Level Disabled</h2>
          <p>Please activate the level</p>
          <button onClick={()=> props.select(props.level)} className="activate-button popup-trigger">
            Activate Level
          </button>
        </div>
      </div>
    )
}

export default Level