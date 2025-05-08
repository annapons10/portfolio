/* QUIERO COMPROBAR QUE CUANDO ESTE EN LA SECCIÓN, EL LI SE VUELVE MÁS GRANDE(CLASE)
Y QUE AL HACER CLICK SE DESLIZA HASTA LA SECCIÓN CORRECTA. */
import { describe, it,  expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavBar } from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Navbar", () => {
    it('Debería aplicarse la clase "italic text-4xl" al elemento activo', () => {
        //Simulo la sección activa:
        const Inicio = "Inicio"; 
        render(
            <BrowserRouter> 
                <NavBar activeSection= { Inicio }/> 
            </BrowserRouter>
        )
        //Cojo el elemento inicio para comprobar la clase:
        const elementoActivo = screen.getByText('Inicio');
        expect(elementoActivo).toHaveClass("italic text-4xl");
    }); 
});