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



function App() {
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
  return (
    <div className="App">
      {!initializing ? (
        <Preloader />
      ) : (
        <>
          <Header togglePopup={togglePopup} />
          <Levels selectLevel={selectLevel} togglePopup={togglePopup}  />
          <About />
          <Footer togglePopup={togglePopup} />
          <Popup togglePopup={togglePopup} selectedLevel={selectedLevel} selectLevel={selectLevel} opened={popup}/>
        </>
      )}
    </div>
  );
}

export default App;
