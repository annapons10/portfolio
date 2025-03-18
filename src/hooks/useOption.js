import { useState } from "react";
import { useEffect } from "react";

export function useOption (valor = 'Inicio'){
    const storedOption = localStorage.getItem("selectedOption") || valor;
    const [option, setOption] = useState(storedOption); 

    useEffect(() => {
        localStorage.setItem("selectedOption", option)
    },[option])

    const changeOption = ((newOption) => {
        console.log(newOption);
        setOption(newOption); 
    }); 
    
    return {option, changeOption}
}