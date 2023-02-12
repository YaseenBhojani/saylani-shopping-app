import React from "react";
import ReactDOM from "react-dom/client";

import Theme from "./assets/theme/Theme";

import "./styles/Styles.scss"; // ~ Root stylesheet
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
