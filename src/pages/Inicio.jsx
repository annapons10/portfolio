import fotoPerfilDark from '../assets/annaNegro.png';
import fotoPerfilLigth from '../assets/annaBlanco.png';
import { forwardRef } from 'react';

export const Inicio = forwardRef(({ theme }, ref) => {
    return (
        <section
            id="inicio"
            className="py-10"
            ref={ref} // Pasa el ref aquí y la establece. 
        >
            <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-20 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:place-items-center lg:h-96 lg:ml-20">
                <article className="text-center flex flex-col items-center gap-10">
                    {/* Título */}
                    <h1 data-aos="fade-right" className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                        ANNA PONS
                    </h1>

                    {/* Descripción */}
                    <p data-aos="fade-right" data-aos-delay="300" className="text-2xl md:text-3xl max-w-xs font-normal">
                        DESARROLLADORA DE SOFTWARE, FRONTEND Y DE APLICACIONES.
                    </p>
                </article>

                {/* Imagen mía futura */}
                <div className="w-full h-full mt-8 sm:mt-8">
                    {/* sm:w-40 sm:h-40 md:w-48 md:h-52 */}
                    <img
                        data-aos="fade-left"
                        className="w-full h-full max-w-sm object-cover"
                        src={theme === "light" ? fotoPerfilLigth : fotoPerfilDark}
                        alt="Foto de perfil"
                    />
                </div>
            </div>
        </section>
    );
});