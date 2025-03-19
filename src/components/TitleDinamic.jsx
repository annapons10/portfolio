/*HACER COMPONENTE H1 DINÁMICO CON CUSTOM HOOK USEOPTION() */
import { useOption } from "../hooks/useOption"

export const TitleDinamic = () => {

    const { option } = useOption(); 


    return (
        /* SI es inicio, quiero que se vea mi nombre a un lado, si no, que se vea en el centro con option. */
        <div className="min-h-screen flex  justify-center items-start m-16 lg:items-start lg:items-center">
            <h1 className="lg:font-bold lg:text-5xl text-center">{option}</h1>
      </div>
    )
}