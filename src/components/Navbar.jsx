import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

export const NavBar = () => {
    //Estado menú hamburgesa:
    const [isOpen, setIsOpen] = useState(false);

    const Pages = [
        { path: '../pages/Home', label: 'Inicio'},
        { path: '../pages/Projects', label: 'Proyectos'},
        { path: '../pages/Technologies', label: 'Tecnologías'},
        { path: '../pages/Contact', label: 'Contacto'}
    ];


    return(
        <>
            <div className="flex justify-end bg-black">
            <nav className={`transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0 h-screen w-1/4' : 'transform -translate-x-full'} lg:w-full lg:translate-x-0 lg:block`}>
                {/* Menú hamburguesa: */}
                <div className="flex justify-end p-4 transition-all duration-300 ease-in-out">
                    <button className="lg:hidden w-14 h-14 p-4 relative" onClick={ () => setIsOpen(!isOpen)}>
                    <TfiClose 
                        className={`m-4 transition-opacity duration-500 ease-in-out absolute ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
                        size={40} 
                        />
                        {/* Icono de menú hamburguesa */}
                    <TfiAlignJustify 
                        className={`m-4 transition-opacity duration-500 ease-in-out absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} 
                        size={40} 
                    />
                    </button>
                </div>

                {/* Menú desplegable de derecha a izquierda: */}
                <ul className={`
                                ${isOpen ? "block" : "hidden"} 
                                flex flex-col 
                                lg:flex lg:justify-center lg:gap-x-10 lg:flex-row
                                `}>
                    {Pages.map(({ path, label }) => (
                        <li className="" key={ path }>
                            <a href={ path } className="lg:text-2xl">
                                { label }
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>
            </div>
        </>
    )
}


