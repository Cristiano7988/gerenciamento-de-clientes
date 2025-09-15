import { Route, Routes } from "react-router-dom";
import { Layout } from "./ui/Layout";
import { Create } from "./pages/Create/Index";
import { Edit } from "./pages/Edit/Index";

export default function App () {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<></>} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id/edit" element={<Edit />} />
    </Route>
  </Routes>
}
