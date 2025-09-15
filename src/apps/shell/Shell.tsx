import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { SelectedClientsProvider } from "./contexts/SelectedClientsContext";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/inter";
import "@fontsource/inter/700.css";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/variables.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <SelectedClientsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SelectedClientsProvider>
    </UserProvider>
  </React.StrictMode>
);
