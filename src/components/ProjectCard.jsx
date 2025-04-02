export const ProjectCard = ({ name, image, description, technologies}) => {
    return(
        <>
            <figure className="border  border-[var(--color-border-tarjed-project)] rounded-2xl shadow-[var(--color-shadow-tarjed-project)] max-w-[320px] lg:max-w-sm">
                <h2 className="text-center text-3xl xl:text-4xl  m-7"> { name } </h2>
                <div className="relative w-full h-48 mb-8">
                    {/* Imágen fondo: */}
                    <img className="object-cover w-full h-full " src={ image } alt={`Imágen del proyecto ${name}`} />
                    {/* Capa desenfoque: */}
                    <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm"></div>
                </div>
                <figcaption className="text-center text-2xl  m-6"> { description }  </figcaption>
                <div className="flex justify-center flex-wrap gap-2 m-8">
                    {technologies.map((technology, index) => {
                        return (
                            <span key={index}> #{technology} </span>
                        )
                    })}
                </div>
            </figure>
      </>
    ) 

} 
                    