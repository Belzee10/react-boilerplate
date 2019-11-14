import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./main.scss";

const msg = "React Boilerplate";

ReactDOM.render(<App msg={msg} />, document.getElementById("app"));

module.hot.accept();
