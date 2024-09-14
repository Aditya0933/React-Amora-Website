// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./Font.css";
import { SelectedLinkProvider } from "./Component/SelectedLinkContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <SelectedLinkProvider>
      <App />
    </SelectedLinkProvider>
  </Router>
);
