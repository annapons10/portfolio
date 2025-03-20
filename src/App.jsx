import './styles/App.css'
import { NavBar } from './components/Navbar';  /* ---->Esto va en todas las páginas menos aquí.  */
import { MainLayout } from './pages/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>  {/* Aquí envolvemos la aplicación en BrowserRouter */}
        <NavBar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
