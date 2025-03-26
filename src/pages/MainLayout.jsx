import fotoPerfil from '../assets/anna.jpg';
import { ProjectCard } from '../components/ProjectCard';
import { Projects } from '../data/infoProjects';
import { Technologies } from '../data/technologies';

export const MainLayout = ({ sectionsRef }) => {

    return (
        /* Sección de presentación: */
        <main className='mt-50 flex flex-col items-center justify-center'>
            {/* SECCIÓN INICIO. La ref React toma el DOM node y lo asigna al array. Almacena la referencia del DOM.*/}
            <section id='inicio' className="py-10" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-20
                lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:place-items-center lg:h-96 lg:ml-20">
                    <article className="text-center flex flex-col items-center gap-10">
                        {/* Título */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                            ANNA PONS
                        </h1>

                        {/* Descripción */}
                        <p className="text-lg sm:text-xl md:text-2xl max-w-xs font-normal">
                            DESARROLLADORA DE SOFTWARE, FRONTEND Y DE APLICACIONES.
                        </p>
                    </article>

                    {/* Imagen */}
                    <div className="mt-6 sm:mt-8 ">
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full" src={fotoPerfil} alt="Foto de perfil" />
                    </div>
                </div>
            </section>


            <div className="w-[70%] h-px bg-separador mx-auto"></div>

            {/* SECCIÓN PROYECTOS */}
            <section id='proyectos' ref={(el) => (sectionsRef.current[1] = el)} >

                <div className='flex items-center justify-center m-20'>
                    <h2 className='text-5xl '>Mis proyectos</h2>
                </div>

                <div className='flex flex-col flex-wrap items-center justify-center lg:flex-row lg:gap-10 mx-5  gap-28 '>
                    
                    {Projects.map((project) => {
                        return (
                            <a className='transition-all duration-400 ease-in-out hover:scale-105' href={project.url}>
                                <ProjectCard name={project.name} image={project.image} description={project.description} technologies={project.technologies} />
                            </a>
                        )
                    })}

                </div>

            </section>

            {/*   <div className="w-[70%] h-px bg-[var(--linear-gradient)] mx-auto"></div> */}

            {/* SECCIÓN TECNOLOGÍAS */}
            <section id='tecnologias' className="py-10" ref={(el) => (sectionsRef.current[2] = el)}>
                <div className='flex items-center justify-center m-20'>
                    <h2 className='text-5xl '>Tecnologías</h2>
                </div>

                <div className="flex flex-col items-center justify-center gap-20 lg:flex-row lg:flex-wrap lg:gap-20 mx-5">
                {Technologies.map((tech) => {
                    return (
                            <div className="flex flex-col relative gap-4  items-center justify-center  text-8xl group">
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

            {/*   <div className="w-[70%] h-px bg-white mx-auto"></div> */}
            {/* SECCIÓN CONTACTO */}
            <section id='contacto' className="py-10" ref={(el) => (sectionsRef.current[3] = el)}>
                
            </section>

            <div className="bg-mint-500 w-20 h-20 rounded-full">

            </div>
        </main>
    );


}