import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Layout } from "./ui/Layout";

export default function App () {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
    </Route>
  </Routes>
}
