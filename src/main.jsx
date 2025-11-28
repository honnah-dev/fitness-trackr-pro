import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import "./index.css";

import App from "./App.jsx";
import Layout from "./layout/Layout";
import { AuthProvider } from "./auth/AuthContext";


// import { PageProvider } from "./layout/PageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <App />
    </AuthProvider>
  </BrowserRouter>
  </StrictMode>,
);