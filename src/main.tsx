// src/main.tsx — Cleaned and ready-to-run

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure <div id='root'></div> exists in index.html"
  );
}

// Render the React app inside the root element
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
