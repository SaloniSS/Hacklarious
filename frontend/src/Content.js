import React, { useState, useEffect } from "react";
import ModelButton from "./Button";
import logo from "./dollar-sign.svg";
import GLOBAL from "./global";
import "./Content.css";

import burrito from "./icons/burrito.png";
import boba from "./icons/boba.png";
import nuggies from "./icons/chicken_nuggies.png";
import tp from "./icons/toilet_paper.png";

const MODES = [
  {
    name: "Chipotle",
    icon: burrito, 
    price: 7.5,
  },
  {
    name: "Boba",
    icon: boba, 
    price: 5.0,
  },
  {
    name: "Chicken Nuggies",
    icon: nuggies, 
    price: 4.5,
  },
  {
    name: "Toilet Paper Roll",
    icon: tp, 
    price: 1.0,
  },
];

const Content = () => {
  const [mode, setMode] = useState(GLOBAL.mode);

  useEffect(() => {
    setMode(GLOBAL.mode);
  }, []);

  return (
    <div className="content">
      <p>
        <strong>Current Mode: </strong>
        {mode}
      </p>
      <img src={logo} className="App-logo" alt="mode" />
      <div className="modelSelection">
        {MODES.map((mode) => (
          <ModelButton
            text={mode.name}
            icon={mode.icon}
            price={mode.price}
            onPress={setMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
