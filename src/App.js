import React, { useState } from "react";
import "./App.css";
import Themer from "./Components/Themer/Themer";
import Intro from "./Components/Intro/Intro";

function App() {
  const [dark, setDark] = useState(false);
  const themeChange = (value) => {
    setDark(value);
  };
  return (
    <div className={`App ${dark && "dark"}`}>
      <Themer themeChange={themeChange} dark={dark} />
      <Intro />
    </div>
  );
}

export default App;
