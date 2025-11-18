import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import Web Awesome styles
import "@awesome.me/webawesome/dist/styles/webawesome.css"; // required styles
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
