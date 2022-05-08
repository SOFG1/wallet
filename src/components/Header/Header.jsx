import Logo from '../../img/logo.svg';
import LogoMini from '../../img/logo-min.svg'
import { Link } from 'react-scroll/modules';

const Header =  (props)=> {
    return (
        <header>
      <div className="container">
        <div className="header">
          <a className="hidden" href="./"><img src={Logo} alt="logo" /></a>
          <a className ="mob" href="./"
            ><img src={LogoMini} alt="logo-mob"
          /></a>
          <div id="links" className="link-item">
            <Link className="head-link" to="levels" spy={true} smooth={true} duration={1000} >Levels</Link>
            <Link className="head-link" to="about" spy={true} smooth={true} duration={1000} >About Us</Link>
            <Link className="head-link" to="footer" spy={true} smooth={true} duration={1000} >Contacts</Link>
          </div>
          <div className="animation">
            <span className="animates"></span>
            <button className="head-button popup-trigger" onClick={()=> props.togglePopup(true)}>Connect Wallet</button>
          </div>
        </div>
        <div className="title-item">
          <h1>One <br />Game</h1>
          <p>Connect Wallet <br />to Register or Login</p>
          <button className="start-button popup-trigger" onClick={()=> props.togglePopup(true)}>Join Game</button>
        </div>
      </div>
    </header>
    )
}

export default Header