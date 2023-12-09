import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import LinkContextProvider from "./context/LinkContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <LinkContextProvider>
        <App />
      </LinkContextProvider>
    </Router>
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
