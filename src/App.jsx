import { useState } from 'react'
import './styles/App.css'
import { NavBar } from './components/Navbar'  /* ---->Esto va en todas las páginas menos aquí.  */

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <NavBar/>
    </>
  )
}

export default App
