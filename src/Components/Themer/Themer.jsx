import React from "react";

import "./Themer.css";

const Themer = () => {
  return (
    <div className="themer">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Themer;
