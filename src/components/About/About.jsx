import { Element } from "react-scroll/modules"
const About = (props)=> {
    return (
    <Element id="about" name="about" className="about">
      <div className="container">
        <div className="about-box">
          <div className="about-text">
            <div>
              <span className="leftline"></span>
            </div>
            <div className="about-title">
              <span>Total</span>
              <h1>About Us</h1>
              <p>
                First ever smart contract game with passive yields in ETH
                directly to your own wallet All players are placed randomly in
                12 levels with unlimited cycles <br /><br />
                Rewards are distributed as follows:
                <br />95% of level value for each of your level cycle
                <br />15%-9%-5% of level value from partners down to 3 in depth
                when they activate levels
              </p>
            </div>
          </div>
          <div className="about-total">
            <h2>Members total</h2>
            <h3>3 053</h3>
            <span>+ 983</span>
            <hr />
            <h2>Transactions made</h2>
            <h3>9 234</h3>
            <span>+ 4 587</span>
            <hr />
            <h2>Turnover, ETH</h2>
            <h3>41.349</h3>
            <span>+ 19.107</span>
          </div>
        </div>
      </div>
    </Element>
    )
}

export default About