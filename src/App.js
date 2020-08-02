import React, { useState } from "react";
import "./App.css";
import Themer from "./Components/Themer/Themer";
import Intro from "./Components/Intro/Intro";
import BackSkill from "./Components/BackSkill/BackSkill";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

function App() {
  const [dark, setDark] = useState(false);
  const themeChange = (value) => {
    setDark(value);
  };
  return (
    <div className={`App ${dark && "dark"}`}>
      <div className="introd">
        <Themer themeChange={themeChange} dark={dark} />
        <Intro />
      </div>
      <div className="back-skill">
        <BackSkill />
      </div>
      <div className="exp-div">
        <Experience />
      </div>
      <div className="projects-div">
        <Projects />
      </div>
      <Form dark={dark} />
      <Footer />
    </div>
  );
}

export default App;
