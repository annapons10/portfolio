//Comprobar que el tema cambia y que cambia el icono 
import { NavBar } from "../components/Navbar";
import { render, screen, waitFor } from "@testing-library/react";
//Que funcionen los matchers:
import '@testing-library/jest-dom';
//Necesita el contexto para manejar las rutas, por eso lo envuelvo en BrowserRouter: 
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from "vitest";
import { useState } from "react";



describe('Theme', () => {
    it('Debería tener el tema light al renderizar la app apareciendo el ícono de la luna',() => {
        render(
            <BrowserRouter> 
              <NavBar theme="light" />
            </BrowserRouter>
          );
        //Cojo el icono del sol y compruebo que se ve: 
        const sunIcon = screen.getByLabelText(/icono de sol/i);
        //Ver si tiene la clase correcta: 
        expect(sunIcon).toHaveClass('hidden');

    
        const moonIcon = screen.getByLabelText(/icono de luna/i);
        expect(moonIcon).toHaveClass('block'); 

    }); 

    /*Test unitario de NavBar. Creo un wrapper para simular el custom hook: (Integración, sería usando el custom hook directamente): */
    it('Debería cambiar el tema y el ícono al hacer click', async() => {
      /* Creo un wrapper para simular comportamiento del estado dentro de NavBar (como si fuera un componente): */
      function WrapperNavBar(){
        const [theme, setTheme] = useState("light");
        const changeTheme = () => {
          const newTheme = theme === "light" ?  'dark' : 'light'; 
          setTheme(newTheme);
        } 

        return(
          <BrowserRouter> 
            <NavBar theme={ theme } changeTheme={ changeTheme } />
          </BrowserRouter>
        )
      }
     
      render(
        <WrapperNavBar />
      ); 

      //Cojo el botón de la luna y le doy click:
      const moonIcon = screen.getByLabelText(/icono de luna/i);
      const sunIcon = screen.getByLabelText(/icono de sol/i);
      //Verifico que el icono de la luna está visible y el del sol oculto:
      expect(moonIcon).toHaveClass('block');
      expect(sunIcon).toHaveClass('hidden');
      //Cojo el botón de cambiar tema y le doy click:
      const buttonTheme = screen.getByRole('button', { name: /cambiar tema/i });
      buttonTheme.click();


      //Espero hasta que el icono del sol aparezca y compruebo que el estado ha cambiado:
      await waitFor(() => {
        expect(sunIcon).toHaveClass('block');
        expect(moonIcon).toHaveClass('hidden');
      })


    }); 

})