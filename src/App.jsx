import React from "react";
import features from "./features";
import logo from "./assets/logo.png";

const App = ({ msg }) => {
  return (
    <div>
      <div className="image">
        <img src={logo} alt="Logo" width="200" />
      </div>
      <div className="main">
        <h2>{msg}</h2>
        <ul>
          {features.map(item => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
