import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi"; 
import { useOption } from "../hooks/useOption";
import { Link } from 'react-router-dom'; 


export const NavBar = () => {
    //Estado menú hamburgesa:
    const [isOpen, setIsOpen] = useState(false); 
    const { option } = useOption();  

    const Pages = [
        { path: '../pages/Home', label: 'Inicio'},
        { path: '../pages/Projects', label: 'Proyectos'},
        { path: '../pages/Technologies', label: 'Tecnologías'},
        { path: '../pages/Contact', label: 'Contacto'}
    ];


    return(
        <>
            {/* Menú hamburguesa (fuera del nav, para que no se mueva con el menú) */}
            <div className="absolute z-1 top-4 right-4 lg:hidden">
                <button className="lg:hidden w-14 h-14 relative p-4" onClick={() => setIsOpen(!isOpen)}>
                <TfiClose 
                    className={`absolute ${isOpen ? 'block' : 'hidden'}`} 
                    size={40} 
                />
                {/* Icono de menú hamburguesa */}
                <TfiAlignJustify 
                    className={`absolute ${isOpen ? 'hidden' : 'block'}`} 
                    size={40} 
                />
                </button>
            </div>

            {/* FONDO TRANSPARENTE SI EL MENÚ ESTA ABIERTO: */}
            <div className={`${isOpen ? "w-full h-screen bg-transparent" : "hidden"} lg:hidden`}>
             
            </div>

            {/* NAV */}
            {/* HACER :HOVER CON COLOR Y CUANDO ESTA EN PANTALLA GRANDE QUE SE QUEDE CLICKEADO. */}
            <nav className={` bg-white  fixed right-0 top-0 transition-transform duration-600 ease-in-out w-52
                ${isOpen ? "translate-x-0 h-screen" : "translate-x-full"} lg:w-full lg:h-8 lg:translate-x-0`}>
                    
              

                {/* Menú desplegable de derecha a izquierda: */}
                <ul className={`
                                ${isOpen ? "block" : "hidden"} 
                                flex flex-col items-center  justify-center h-screen justify-evenly
                                lg:flex lg:justify-center lg:gap-x-10 lg:flex-row lg:h-auto
                                `}>
                    {Pages.map(({ path, label }) => (
                        <li key={ path }>
                            <Link  to={ path }  className={`text-xl lg:text-2xl 
                            /* TRABAJAR EN ESTILO CUANDO ESTA CLICKEADO: */
                                ${option === label ? "font-bold" : ""}`}> { label } 
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}


