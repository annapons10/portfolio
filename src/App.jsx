import './styles/App.css'
import { NavBar } from './components/Navbar';  /* ---->Esto va en todas las páginas menos aquí.  */
import { MainLayout } from './pages/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSection } from './hooks/useSection';
import { Footer } from './components/Footer';

function App() {
  const { activeSection, sectionsRef } = useSection(); // Llamamos al custom hook useSection

  return (
    <>
      <BrowserRouter>  {/* Aquí envolvemos la aplicación en BrowserRouter */}
        <NavBar activeSection={activeSection}/>
        <Routes>
          <Route path="/" element={<MainLayout sectionsRef={sectionsRef}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
