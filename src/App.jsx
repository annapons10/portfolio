import { useState } from 'react'
import './styles/App.css'
import { NavBar } from './components/Navbar';  /* ---->Esto va en todas las páginas menos aquí.  */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>  {/* Aquí envolvemos la aplicación en BrowserRouter */}
        <NavBar />
      </BrowserRouter>
      {/* ¿main aqui o en cada parte de mi página? */}
    </>
  )
}

export default App
