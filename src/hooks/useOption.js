import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function useOption (){ 
    //Me da la URL actual:
    const location = useLocation();
    const [option, setOption] = useState(""); 

    /* Quiero que la option cambie no por un click si no por el cambio de la URL: */
    useEffect(() => {
        const path = location.pathname;
        const namePath = getNamePath(path);
        console.log(`este es el path ${path}`);
        setOption(namePath);
        console.log(namePath); 

    },[location.pathname]) //Se ejecuta cuando la URL cambia. 

    return { option }
}

/* Función para extraer de la ruta el nombre: */
const getNamePath = (path) => {
    console.log(`path en getname ${path}`);
    const Pages = {
        "/": "Inicio",
        "/pages/Projects": "Proyectos",
        "/pages/Technologies": "Tecnologías",
        "/pages/Contact": "Contacto"
    }; 

    return Pages[path] || "Inicio"; //Por defecto devolver inicio. 

}
