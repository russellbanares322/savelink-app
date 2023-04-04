import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      containerClassName="font-jetbrains"
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
      }}
    />
  </React.StrictMode>
);
