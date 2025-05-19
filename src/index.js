import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Create root and render app
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
