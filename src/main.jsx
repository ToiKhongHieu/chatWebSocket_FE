import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./config/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-center" />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
