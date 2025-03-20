import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export function useOption (){ 
    //Me da la URL actual:
    const location = useLocation();
    const [option, setOption] = useState(""); 

    /* Quiero que la option cambie no por un click si no por el cambio de la URL: */
    useEffect(() => {
        const path = location.hash; //Este no accede  a la URL, accede al hash #. 
        
        console.log("Hash actual:", path); // Asegúrate de que el hash es correcto

        const namePath = getNamePath(path);
        console.log("Nombre mapeado:", namePath); // Asegúrate de que se está mapeando correctamente
        setOption(namePath);

    },[location.hash]) //Se ejecuta cuando la URL cambia. 

    return { option }
}

/* Función para extraer de la ruta el nombre: */
const getNamePath = (path) => {
    const Pages = {
        "#inicio": "Inicio",
        "#proyectos": "Proyectos",
        "#tecnologias": "Tecnologías",
        "#contacto": "Contacto"
    }; 

    return Pages[path] || "Inicio"; //Por defecto devolver inicio. 

}
