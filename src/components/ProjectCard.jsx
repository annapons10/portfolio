export const ProjectCard = ({ name, image, description, technologies}) => {
    return(
        <>
            <figure className="border border-white-500 rounded-2xl shadow-[var(--color-shadow-tarjed-project)] overflow-hidden max-w-md ">
                <h2 className="text-center text-3xl  m-7.5"> { name } </h2>
                <div className="relative w-full h-48 mb-8">
                    {/* Imágen fondo: */}
                    <img className="object-cover w-full h-full " src={ image } alt={`Imágen del proyecto ${name}`} />
                    {/* Capa desenfoque: */}
                    <div class="absolute top-0 left-0 w-full h-full backdrop-blur-sm"></div>
                </div>
                <figcaption className="text-center text-3xl  m-6"> { description }  </figcaption>
                <div className="flex justify-center gap-2 m-7.5">
                    {technologies.map((technology, index) => {
                        return (
                            <span key={index} className="text-white"> #{technology} </span>
                        )
                    })}
                </div>
            </figure>
      </>
    ) 

} 
                    