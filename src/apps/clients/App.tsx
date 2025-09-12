import { Welcome } from './pages/Welcome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

export const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="clients" element={'Clients'} />
      </Routes>
    </BrowserRouter>
}
