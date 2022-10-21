import { useState } from "react";
import "../src/css/App.css";
import Naviagtion from "../../portfolio/src/components/Navigation";
import About from "../../portfolio/src/components/About";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Concact from "./components/Concact";

function App() {
  const [showTekstCss, setShowTekstCss] = useState("invisible");
  const scrollWelcomeImage = () => {
    const windowInnerHeight = window.innerHeight;
    window.scroll(0, windowInnerHeight);
  };

  const showTekst = () => setShowTekstCss("visible");
  setTimeout(showTekst, 500);

  return (
    <div className="App">
      <header className="App-header">
        <div className="welcomeImg">
          <div className="containerForName" onClick={scrollWelcomeImage}>
            <p className={showTekstCss}>Mateusz Rzodkiewicz</p>
            <p className={showTekstCss}>Junior Frontend-Developer</p>
          </div>
        </div>
      </header>
      <Naviagtion />
      <About />
      <Stack />
      <Project />
      <Concact />
      <a href="#Menu">
        <i
          className="fas fa-arrow-up"
          style={{
            color: "white",
            fontSize: "50px",
            position: "fixed",
            bottom: "25px",
            right: "25px",
            cursor: "pointer",
          }}
        ></i>
      </a>
    </div>
  );
}

export default App;
