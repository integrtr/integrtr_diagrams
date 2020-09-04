import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

function renderApp(NextApp) {
  ReactDOM.render(
    <React.StrictMode>
      <NextApp />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      const NextApp = require("./App").default;

      renderApp(NextApp);
    });
  }
}

renderApp(App);
