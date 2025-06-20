import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "../src/context/DarkModeProvider.jsx";
import { Analytics } from "@vercel/analytics/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
      <Analytics /> {/* Vercel Analytics */}
    </DarkModeProvider>
  </StrictMode>
);
