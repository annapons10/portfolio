import { Inicio } from './Inicio';
import { Proyectos } from './Proyectos';
import { Tecnologias } from './Tecnologias';
import { Contacto } from './Contacto';


export const MainLayout = ({ sectionsRef, theme }) => {


    return (
        /* Sección de presentación: */
        <main className='mt-50 flex flex-col items-center justify-center h-full w-'>
            {/* Inicio */}
            <Inicio ref={(el) => (sectionsRef.current[0] = el)} theme={theme} />
            {/* Separador */}
            <div className="w-[70%] h-px bg-separador mx-auto mt-20"></div>

            {/* Proyectos */}
            <Proyectos ref={(el) => (sectionsRef.current[1] = el)} />
            {/* Separador */}
            <div className="w-[70%] h-px bg-separador mx-auto mt-30"></div>

            {/* Tecnologías */}
            <Tecnologias ref={(el) => (sectionsRef.current[2] = el)} />
            {/* Separador */}
            <div className="w-[70%] h-px bg-separador mx-auto mt-30"></div>

            {/* Contacto */}
            <Contacto ref={(el) => (sectionsRef.current[3] = el)} />

        </main>
    );


}