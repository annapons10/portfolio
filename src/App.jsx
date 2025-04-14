import { NavBar } from './components/Navbar';  /* ---->Esto va en todas las páginas menos aquí.  */
import { MainLayout } from './pages/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSection } from './hooks/useSection';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { FollowMouse } from './components/MouseFollower'; 
import { useTheme } from "./hooks/useTheme";

/* Librería de animaciones: */
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  /* Inicializar las animaciones: */
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  
  const { activeSection, sectionsRef } = useSection(); // Llamamos al custom hook useSection
  //Custom hook para el tema:
  const { theme, changeTheme } = useTheme();
  

  return (
    <>
      <BrowserRouter>  {/* Aquí envolvemos la aplicación en BrowserRouter */}
        < FollowMouse />
        <NavBar  activeSection={activeSection} theme={theme} changeTheme={changeTheme}/>
        <Routes>
          <Route path="/" element={<MainLayout sectionsRef={sectionsRef} theme={theme}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
