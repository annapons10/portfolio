import { RedesSociales } from '../data/redesSociales';
import { forwardRef } from 'react';


export const Contacto = forwardRef(({ }, ref) => {
    return (
        <section id='contacto' className="py-10" ref={ref}>
            <div className='m-20'>
                <h2 className='text-4xl lg:text-5xl text-center '>Estoy siempre abierta a nuevas oportunidades y colaboraciones.</h2>
            </div>

            <div className='flex flex-col items-center gap-10 mx-auto max-w-80 sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-7xl text-xl md:text-2xl lg:text-2xl'>
                <p className='text-justify   leading-relaxed max-w-full'>
                    Si estás buscando una desarrolladora con experiencia en diversas tecnologías y que se adapta fácilmente a nuevas herramientas, estaré encantada de hablar sobre cómo puedo aportar a tu equipo.
                </p>
                <p className='text-justify   leading-relaxed max-w-full'>
                    Estoy en constante aprendizaje y avance, y siempre busco mejorar mis habilidades. Puedes contactarme fácilmente a través de mi email
                    <span className='font-semibold text-base lg:text-2xl'> developer@annaponsprojects.com </span>
                    o enviarme un mensaje por LinkedIn.
                </p>
                <p className='text-justify   leading-relaxed max-w-full'>
                    También puedes ver más sobre mi trabajo en mi GitHub. ¡Espero poder conectar pronto!
                </p>

                {/* Redes sociales */}
                <div className='flex flex-col lg:flex-row gap-10'>
                    {RedesSociales.map((red) => {
                        return (
                            <a key={red.nombre} href={red.url} className="text-6xl transition-transform duration-400 ease-in-out hover:scale-150">
                                {red.icono}
                            </a>
                        )
                    })}
                </div>

            </div>
        </section>

    );
});