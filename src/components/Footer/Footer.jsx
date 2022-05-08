import Logo from "../../img/logo-min.svg";
import { Element, Link } from "react-scroll/modules";

const Footer = (props) => {
  return (
    <Element id="footer" name="footer" className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="sup">
            <img className="mob" src={Logo} alt="logo-mob" />
            <div>
              <span>Support</span>
              <h1>Need Help? Write to Telegram</h1>
            </div>
            <div className="sup-right">
              <a href="https://t.me/onegamesupp" className="support-button">
                Support Online
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="logo-footer">
              <img className="hidden" src={Logo} alt="logo-footer" />
            </div>
            <div className="links-box hidden">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="levels" spy={true} smooth={true} duration={1000}>
                    Levels
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} duration={1000}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="footer" spy={true} smooth={true} duration={1000}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links-mob mob">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#levels">Levels</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#footer">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="links-box hidden">
              <h3>Help</h3>
              <ul>
                <li>
                  <a href="https://t.me/onegamesupp">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="sup-right">
              <button
                onClick={() => props.togglePopup(true)}
                className="join-game-btn popup-trigger hidden"
              >
                Join Game
              </button>
            </div>
          </div>
          <div className="copyright">
            <span>Copyright © 2022 OneGame. All rights reserved</span>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
