//Comprobar que el tema cambia y que cambia el icono 
import { NavBar } from "../components/Navbar";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
//Necesita el contexto para manejar las rutas, por eso lo envuelvo en BrowserRouter: 
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from "vitest";



describe('Theme', () => {
    it('Debería cambiar el icono de tema',() => {
        render(
            <BrowserRouter>  {/* Envolvemos en BrowserRouter */}
              <NavBar theme="light" changeTheme={() => {}} />
            </BrowserRouter>
          );
        //Cojo el icono del sol y compruebo que se ve: 
        const sunIcon = screen.getByLabelText(/icono de sol/i);
        //Ver si esta en pantalla: 
        expect(sunIcon).toHaveClass('hidden');

        //Cojo el icono de la luna y compruebo que no se ve: 
        const moonIcon = screen.getByLabelText(/icono de luna/i);
        expect(moonIcon).toHaveClass('block'); 

    }); 
/* 
    it('Debería cambiar el tema',() => {

    });  */

})