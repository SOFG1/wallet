import "./css/main.css";
import "./css/media.css";
import "./css/popup.css";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Levels from "./components/Levels/Levels";
import About from './components/About/About'
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { prependOnceListener } from "process";



function App(props) {
  const [initializing, setInit] = useState(false);
  const [popup, togglePopup] = useState(false);
  const [selectedLevel, selectLevel] = useState(12);
  useEffect(()=> {
    if (!initializing) {
      setTimeout(()=> {
        setInit(true)
      }, 750)
    }
  }, [])
  const toggleModal = (opened)=> {
    togglePopup(opened)
    //Select the most expensive level if user hasn't choosed
    if (opened) selectLevel(12)
  }
  const priceList = {
    1: 0.0002,
    2: 0.06,
    3: 0.08,
    4: 0.1,
    5: 0.2,
    6: 0.3,
    7: 0.4,
    8: 0.5,
    9: 0.6,
    10: 0.7,
    11: 0.8,
    12: 1
  }
  return (
    <div className="App">
      {!initializing ? (
        <Preloader />
      ) : (
        <>
          <Header togglePopup={toggleModal} />
          <Levels selectLevel={selectLevel} togglePopup={toggleModal} priceList={priceList} />
          <About />
          <Footer togglePopup={toggleModal} />
          <Popup web3={props.web3} priceList={priceList} togglePopup={toggleModal} selectedLevel={selectedLevel} selectLevel={selectLevel} opened={popup}/>
        </>
      )}
    </div>
  );
}

export default App;
