import { ProjectCard } from '../components/ProjectCard';
import { Projects } from '../data/infoProjects';
import { Technologies } from '../data/technologies';
import { RedesSociales } from '../data/redesSociales';
import { FaCode } from "react-icons/fa";
import AOS from 'aos';


export const MainLayout = ({ sectionsRef }) => {


    return (
        /* Sección de presentación: */
        <main className='mt-50 flex flex-col items-center justify-center h-full w-'>
            {/* SECCIÓN INICIO. La ref React toma el DOM node y lo asigna al array. Almacena la referencia del DOM.*/}
            <section id='inicio' className="py-10" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-20
                lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:place-items-center lg:h-96 lg:ml-20">
                    <article className="text-center flex flex-col items-center gap-10">
                        {/* Título */}
                        <h1 data-aos="fade-right" className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                            ANNA PONS
                        </h1>

                        {/* Descripción */}
                        <p data-aos="fade-right" data-aos-delay="300" className="text-2xl md:text-3xl  max-w-xs font-normal">
                            DESARROLLADORA DE SOFTWARE, FRONTEND Y DE APLICACIONES.
                        </p>
                    </article>

                    <FaCode data-aos="fade-left" data-aos-delay="300" className=' text-6xl lg:text-9xl'/>

                    {/* Imagen mía futura */}
                    {/* <div className="mt-6 sm:mt-8 ">
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-52 object-cover rounded-full" src={fotoPerfil} alt="Foto de perfil" />
                    </div> */}
                </div>
            </section>


            <div className="w-[70%] h-px bg-separador mx-auto mt-20"></div>

            {/* SECCIÓN PROYECTOS */}
            <section id='proyectos' ref={(el) => (sectionsRef.current[1] = el)} >

                <div className='flex items-center justify-center m-20'>
                    <h2 className='text-5xl '>Mis proyectos</h2>
                </div>

                <div className='flex  flex-col lg:flex-wrap items-center justify-center lg:flex-row gap-10'>
                    
                    {Projects.map((project) => {
                        return (
                            <a key={project.name}   className='transition-transform duration-400 ease-in-out hover:scale-105' href={project.url}>
                                <ProjectCard  name={project.name} image={project.image} description={project.description} technologies={project.technologies} />
                            </a>
                        )
                    })}

                </div>

            </section>

            <div className="w-[70%] h-px bg-separador mx-auto mt-30"></div>

            {/* SECCIÓN TECNOLOGÍAS */}
            <section id='tecnologias' className="py-10" ref={(el) => (sectionsRef.current[2] = el)}>
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

          

            <div className="w-[70%] h-px bg-separador mx-auto mt-30"></div>

            {/* SECCIÓN CONTACTO */}
            <section id='contacto' className="py-10" ref={(el) => (sectionsRef.current[3] = el)}>
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
                        return(
                            <a key={red.nombre} href={red.url}  className="text-6xl transition-transform duration-400 ease-in-out hover:scale-150">
                                {red.icono}
                            </a>
                        )
                    })}
                    </div>

                </div>
            </section>

        </main>
    );


}