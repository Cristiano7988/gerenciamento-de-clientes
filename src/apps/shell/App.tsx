import { Routes, Route } from "react-router-dom";
import ClientApp from "../clients/App";
import { Welcome } from "./pages/Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/clientes/*" element={<ClientApp />} />
    </Routes>
  );
}
