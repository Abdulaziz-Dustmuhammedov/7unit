import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app";
import Aos from "aos";

const root = ReactDOM.createRoot(document.getElementById("root"));

Aos.init({
  once: true
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
