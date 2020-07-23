import React from "react";
import Wave from "./../../images/wave.png";
import "./Intro.css";
import Point from "./../../images/point.png";
import Working from "./../../images/working.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="gree">
        Hello!
        <img src={Wave} alt="greet" />
      </div>

      <div className="introduction">
        I'm <span className="name">Swaraj Samant Singh</span> , a design-minded
        front-end software engineer focused on building beautiful interfaces &
        experiences <img src={Working} alt="working" />.
      </div>
      <div className="contact">
        Get in touch <img src={Point} alt="point" className="emoji" />
        <a href="mailto:sswarajsamant@gmail.com" target="blank">
          sswarajsamant@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Intro;
