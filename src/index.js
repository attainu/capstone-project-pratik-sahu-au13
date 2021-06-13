import React from "react";
import ReactDOM from "react-dom";
import StateContextProvider from "./stateHandling/contexts/StateContext";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
