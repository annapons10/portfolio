import { useState, useEffect,  useRef } from "react";
import { Pages } from "../data/pageLinks";


export function useSection (){ 
    const [activeSection, setActiveSection] = useState("Inicio"); 

    //Configuro las referencias para relacionar con los elementos que quiero observar: Es un objeto mutable que me ofrece React
    const sectionsRef = useRef([]);

    useEffect(() => {
        /* Quiero que la activeSection cambie mientras observo las secciones: */
        const observer = new IntersectionObserver((entries) => {
            /* Entry es un objeto con info sobre ese elemento del DOM. Usar propiedad target para acceder a él.  */
            entries.forEach((entry) => {
                //Si es visible:
                if(entry.isIntersecting){
                    //Obtengo el id del elemento que es visible
                    const sectionId = entry.target.id; 
                    // Busco el objeto que tenga el path que coincide con el id
                    const section = Pages.find(page => page.path === `#${sectionId}`);
                    // Si el objeto se encuentra, obtengo el label; si no, devuelvo "Inicio"
                    const namePath = section ? section.label : "Inicio";
                    setActiveSection(namePath); // Cambio la opción.  
                }
                
            });
        }, /* PONER LAS CONFIGURACIONES PARA QUE EL CALLBACK SE EJECUTE:  */
            { threshold: 0.5 } 
        );

        /* Llamo a ese observer con los elementos que quiero que observe: */
        sectionsRef.current.forEach((section) => {
            observer.observe(section);
        });

        /* Se ejecuta el return automáticamente cuando se vuelve a renderizar el componente o cuando se desmonta.  */
        return () =>{
            observer.disconnect(); // Desconectar el observer de todos los elementos. 
        }

    }, []); 

  

    return { activeSection, sectionsRef }
} 
