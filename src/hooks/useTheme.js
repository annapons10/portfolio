import { useState } from "react";
import { useEffect } from "react";

export const useTheme = () => {
    const saveTheme = localStorage.getItem("theme") || "ligth"; 
    const [theme, setTheme] = useState(saveTheme);

    useEffect(() => {
        //Cuando cambia el tema, cambian las clases en mi web:
        document.documentElement.classList.toggle("dark", theme === "dark"); 
        //Guardo ese tema en localStorage para si vuelve a entrar, coja su tema preferido: 
        localStorage.setItem("theme", theme); 
    }, [theme])

    const changeTheme = () => {
        const newTheme = theme === "ligth" ?  'dark' : 'ligth'; 
        setTheme(newTheme);
        console.log(`este es el tema ${newTheme}`);
    }

    return { theme, changeTheme }; 

}