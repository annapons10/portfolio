/* 
Y QUE AL HACER CLICK SE DESLIZA HASTA LA SECCIÓN CORRECTA. */
import { describe, it,  expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { useState } from "react";

describe("Navbar", () => {
    //Comprueba comportamiento estático, props:
    it('Renderiza correctamente la clase activa en función de la prop', () => {
        const activeSection = "Inicio"; 
        render(
            <BrowserRouter> 
                <NavBar activeSection= { activeSection }/> 
            </BrowserRouter>
        )
        //Cojo el elemento inicio para comprobar la clase:
        const elementActive = screen.getByText('Inicio');
        expect(elementActive).toHaveClass("italic text-4xl");
        const elementNotActive = screen.getByText('Proyectos');
        expect(elementNotActive).not.toHaveClass("italic text-4xl");
    }); 

    it('Aplica la la clase activa al cambiar la sección mediante un evento', () => {
        //Comprobar comportamiento dinámico:
        function WrapperNavbar(){
            const [activeSection, setActiveSection] = useState("Inicio"); 

            return(
                <BrowserRouter> 
                    <NavBar activeSection= { activeSection }/> 
                    <button onClick={() => setActiveSection("Proyectos")}>Cambiar sección</button>
                </BrowserRouter>
                
            );
        }

        render(
            <WrapperNavbar />
        );

        //Cojo el elemento inicio para comprobar que es correcto:
        const elementActive = screen.getByText('Inicio');
        expect(elementActive).toHaveClass("italic text-4xl");
        
        const buttonChangeElement = screen.getByRole('button', {name: 'Cambiar sección'});
        fireEvent.click(buttonChangeElement);

        const elementProjects = screen.getByText('Proyectos');
        expect(elementProjects).toHaveClass('italic text-4xl');

    }); 
});