import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create the root of the app
const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error("Root element not found. Make sure <div id='root'></div> exists in index.html");
}

// Render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
