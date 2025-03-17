import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./embla-mobile.css";
import "./embla-web.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
