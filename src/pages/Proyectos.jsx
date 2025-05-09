import { Projects } from '../data/infoProjects';
import { ProjectCard } from '../components/ProjectCard';
import { forwardRef } from 'react'

export const Proyectos = forwardRef(({}, ref) => {
    return (
        /* Sección de proyectos: */
        <section id='proyectos' ref={ref} className="py-10" data-testid="proyectos">

            <div className='flex items-center justify-center m-20'>
                <h2 className='text-5xl '>Mis proyectos</h2>
            </div>

            <div className='flex  flex-col lg:flex-wrap items-center justify-center lg:flex-row gap-10'>

                {Projects.map((project) => {
                    return (
                        <a key={project.name} className='transition-transform duration-400 ease-in-out hover:scale-105' href={project.url}>
                            <ProjectCard name={project.name} image={project.image} description={project.description} technologies={project.technologies} />
                        </a>
                    )
                })}

            </div>

        </section>

    );
});