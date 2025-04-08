import { useEffect } from "react";
import { useState } from "react";

export function FollowMouse (){
    const [position, setPosition] = useState({ x:0, y:0 });

    //Cuando se monta el componente porque siempre escucha el evento. 
    //Para que cada vez que el componente se re-renderiza no añada un evento nuevo: 
    useEffect(() => {
        const handleMouseMove = (event) => {
            //cambio la posición al escuchar el evento a la correcta:
            setPosition({ x:event.clientX, y:event.clientY});
        }

        //Escucho el evento en la ventana:
        window.addEventListener("mousemove", handleMouseMove);

        //Limpio el evento cuando se desmonta el componente para no acumular: 
        //La elimina con la referencia (enlace) que maneja el evento. 
        return () => {
            window.removeEventListener("mousemove", handleMouseMove); 
        }

    }, []);

    return (
        <div className="absolute z-5 bg-[var(--color-pointer)] rounded-full pointer-events-none cursor-none w-10 h-10 -left-5 -top-5"
            //Tailwind no permite leer valores dinámicos, poro eso le pongo style: 
            style={{
              transform: `translate(${position.x}px, ${position.y}px)` // Aplica la transformación
            }} 
        />
    )


}