import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { startFakeServer } from "./fakeServer";


if (process.env.REACT_APP_FAKE_SERVER === "true") {
  startFakeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
