import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./ui/Layout";
import { Create } from "./pages/Create/Index";
import { Edit } from "./pages/Edit/Index";
import { SelectedClients } from "./pages/SelectedClients/Index";
import { useEffect, useContext } from "react";
import { UserContext } from "../shell/contexts/UserContext";

export default function App () {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.name) return navigate("/");
  }, []);

  if (user.name) return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<></>} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id/edit" element={<Edit />} />
    </Route>
    <Route path="/selecionados" element={<SelectedClients />} />
  </Routes>
}
