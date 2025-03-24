import { useState, useEffect,  useRef } from "react";

import { Pages } from "../data/pageLinks";


export function useOption (){ 
    //Me da la URL actual:
  
    const [option, setOption] = useState("Inicio"); 

    //Configuro las referencias para relacionar con los elementos que quiero observar: Es un objeto mutable que me ofrece React
    const sectionsRef = useRef([]);


    useEffect(() => {
        /* Quiero que la option cambie mientras observo las secciones: */
        const observer = new IntersectionObserver((entries) => {
            /* Entry es un objeto con info sobre ese elemento del DOM. Usar propiedad target para acceder a él.  */
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log(`La sección ${entry.target.id} está visible`);
                    /* SI es visible este elemento, hago algo con él: */
                    const sectionId = entry.target.id; //Obtengo el id del elemento que es visible
                    // Busco el objeto que tenga el path que coincide con el id
                    const section = Pages.find(page => page.path === `#${sectionId}`);
                    // Si el objeto se encuentra, obtengo el label; si no, devuelvo "Inicio"
                    const namePath = section ? section.label : "Inicio";
                    setOption(namePath); // Cambio la opción
                    console.log(`he cambiado la option y deberia re renderizarse a ${namePath}`);
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

  

    return { option, sectionsRef }
} 
