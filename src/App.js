import React, { useState } from "react";
import "./App.css";
import Themer from "./Components/Themer/Themer";
import Intro from "./Components/Intro/Intro";
import BackSkill from "./Components/BackSkill/BackSkill";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Fade from 'react-reveal/Fade';

function App() {
  const [dark, setDark] = useState(false);
  const themeChange = (value) => {
    setDark(value);
  };
  return (
    <div className={`App ${dark && "dark"}`}>
      <Fade duration={1000}>
        <div className="introd">
          <Themer themeChange={themeChange} dark={dark} />
          <Intro />
        </div>
      </Fade>

      <div className="back-skill">
        <BackSkill />
      </div>

      <Fade duration={1000}>
        <div className="exp-div">
          <Experience />
        </div>
      </Fade>
      <div className="projects-div">
        <Projects />
      </div>
      <Fade duration={1000}>
        <Form dark={dark} />
      </Fade>
      <Fade duration={1000}>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
