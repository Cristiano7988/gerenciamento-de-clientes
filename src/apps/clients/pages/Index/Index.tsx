import { ClientCard } from "../../ui/ClientCard/Index";
import "./style.css";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from '@mui/material/Pagination';

export const Index = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);
  const clientsPerPage = [4, 8, 16, 20, 24, 28];

  useEffect(() => {
    if (page == "redefinindo") return setPage(1);

    const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() });
    setLoading(true);

    fetch(`https://boasorte.teddybackoffice.com.br/users?${params.toString()}`)
      .then(response => response.json())
      .then(data => {
        setClients(data.clients);
        setTotalPages(data.totalPages);
      })
      .finally(() => setLoading(false))
      .catch(error => console.error("Error fetching clients:", error));
  }, [page]);

  const handleChange = (e) => {
    setLimit(e.target.value);
    setPage("redefinindo");
  } 

  return <div className="clients-index">
    <p className="clients-grid-header">
      <span>
        <b>{clients.length}</b> clientes encontrados:
      </span>
      <span>
        <span>Clientes por página:</span>
        <select value={limit} onChange={handleChange}>
          {clientsPerPage.map(size => <option key={size} value={size}>{size}</option>)}
        </select>
      </span>
    </p>

    {loading && <CircularProgress />}

    {!!clients.length && !loading && <div className="clients-grid">
      {clients.map((client, index) => <ClientCard key={index} client={client} />)}
    </div>}

    <a className="outlined-button" href="/clientes/create">
      Criar cliente
    </a>

    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, value) => setPage(value)}
      hidePrevButton
      hideNextButton
      shape="rounded"
      sx={{
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        fontWeight: 700,
        "& .MuiPaginationItem-root": {
          fontWeight: 700,
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          background: "#EC6724",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#d65a1f",
          },
        }
      }}
    />
  </div>;
}
