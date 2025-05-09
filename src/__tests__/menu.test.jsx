/* 
Y QUE AL HACER CLICK SE DESLIZA HASTA LA SECCIÓN CORRECTA. */
import { describe, it,  expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavBar } from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { Inicio } from "../pages/Inicio";
import { Proyectos } from "../pages/Proyectos";
import { Tecnologias } from "../pages/Tecnologias";
import { Contacto } from "../pages/Contacto";

describe("Navbar", () => {
    it('Debería aplicarse la clase "italic text-4xl" al elemento activo', () => {
        //Simulo la sección activa:
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

    it('Debería cambiar la sección al hacer click en los elementos del menú', () => {
        //Crear un wrapper para envolver el NavBar y las secciones, con el estado activeSection y setActiveSection
        //Comprobar que al hacer click en algún elem. del menú, ese activeSection funciona y cambia la clase
        //Al elemento adecuado. 
    }); 
});