import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi"; 
import { useOption } from "../hooks/useOption";
import { HashLink } from 'react-router-hash-link'; 
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useTheme }  from "../hooks/useTheme";
import { Pages } from "../data/pageLinks";

/* SE RE-RENDERIZA CUANDO UNO DE LOS ESTADOS ASOCIADOS A ESTE COMPONENTE CAMBIA. EJEMPLO EL OPTION EN EL CUSTOM HOOK. */

export const NavBar = () => {
    //Custom hook para el tema:
    const { theme, changeTheme } = useTheme();
    //Estado menú hamburgesa:
    const [isOpen, setIsOpen] = useState(false); 
    //Estado para transición al cerrar:
    const [isClosing, setIsClosing] = useState(true);
    //Custom hook para saber que opción esta clickeada del navbar:
    const { option } = useOption(); 
    console.log("Option changed: ", option); // Añadir para depurar

    return(
        <>
            {/* Menú hamburguesa (fuera del nav, para que no se mueva con el menú) */}
            <div className="absolute z-1 top-4 right-4 lg:hidden">
                <button className="lg:hidden w-14 h-14 relative p-4" onClick={() =>{
                   //Los estados son asíncronos, realizo una función para asegurarme que se cambian correctamente el setIsOpen y setIsClosing.  
                   //set..Pueden recibir funciones como parámetro.
                   setIsOpen((prev) => {
                        const newOpen = !prev;
                        setIsClosing(!newOpen);
                        return newOpen;
                   });
                }}>
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

            {/* Botón cambio de theme: */}
            <div className="absolute z-1 top-2 left-4 ml-6">
                <button className="relative" onClick={ () => {changeTheme ()}}>
                    <BsMoon className={`text-4xl absolute  ${theme === "light" ? "block" : "hidden"}`} />
                    <BsSun className={`text-5xl absolute ${theme === "light" ? "hidden" : "block"}`} />
                </button>
            </div>

            {/* FONDO TRANSPARENTE SI EL MENÚ ESTA ABIERTO: */}
            <div className={`${isOpen ? "w-full h-screen bg-transparent" : "hidden"} lg:hidden`}>
             
            </div>

            {/* NAV */}
            {/* HACER :HOVER CON COLOR Y CUANDO ESTA EN PANTALLA GRANDE QUE SE QUEDE CLICKEADO. */}
            <nav className={` bg-[color-fondo] text-[color-texto]  fixed right-0 top-0 transition-transform duration-600 ease-in-out w-52 
                ${isOpen ? "translate-x-0 h-screen" : "translate-x-full"} ${isClosing ? "translate-x-full" : "translate-x-0 h-screen"} lg:w-full lg:h-20 lg:translate-x-0`}>
                    
              

                {/* Menú desplegable de derecha a izquierda: */}
                <ul className={`
                                ${isOpen ? "block" : "hidden"} 
                                flex flex-col items-center  justify-center h-screen justify-evenly lg:m-6
                                lg:flex lg:justify-center lg:gap-x-10 lg:flex-row lg:h-auto 
                                `}>
                    {Pages.map(({ path, label }) => (
                        <li key={ path }>
                            <HashLink
                                smooth
                                onClick={() => setIsOpen(!isOpen)}
                                to={ path }  // o el id correspondiente de la sección
                                className={`text-xl lg:text-2xl ${option === label ? "font-bold" : ""}`}
                            >
                                { label }
                            </HashLink>
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}


