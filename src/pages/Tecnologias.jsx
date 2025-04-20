import { Technologies } from '../data/technologies';
import { forwardRef } from 'react';

export const Tecnologias = forwardRef(({}, ref) => {
    return (
        /* Sección de tecnologías: */
        <section id='tecnologias' className="py-10" ref={ref}>
            <div className='flex items-center justify-center m-20'>
                <h2 className='text-5xl '>Tecnologías</h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:flex-wrap lg:gap-20 mx-5">
                {Technologies.map((tech) => {
                    return (
                        <div key={tech.nombre} className="flex flex-col relative gap-4  items-center justify-center  text-8xl group">
                            <div className='group-hover:opacity-10 transition-opacity duration-300'>
                                {tech.simbolo}
                            </div>
                            {/* Nombre de la tecnología, oculto inicialmente */}
                            <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300  font-extrabold text-2xl">
                                {tech.nombre}
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    );
});
