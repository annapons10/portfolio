
import { useSection } from "../hooks/useSection";
import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useEffect, useState } from "react";




describe("UseSection", () => {
    //Defino método global para poder llamar al callback manualemnte:
    let triggerIntersection;
    //Mockeo IntesectionObserve antes de cada test de este bloque:
    beforeAll(() => {
        //global:"widows" para que pueda usarlo aunque no este en el entorno (el callback real).
        globalThis.IntersectionObserver = vi.fn().mockImplementation((callback) => {
            //Método que simula la sección ha entrado en el viewport:
            triggerIntersection = (isIntesecting, targetId) => {
                //Llama al callback manualmente real que se haya defincdo en el useSection.js :
                callback([{isIntesecting, target: {id:targetId}}]);
            }
            //para que pueda usar los métodos del custom hook y poder comprobar que se han llamado desde el test: 
            return{
                observe: vi.fn(),
                unobserve: vi.fn(),
                disconnect: vi.fn()
            }
        });
    });  

    it("Debería empezar con la seccion activa correcta", () => {
        function WrapperUseSection (){
            const { activeSection } = useSection();
            return(
                <div>
                    <span>{ activeSection }</span>
                </div>
            )
        }

        render(
            <WrapperUseSection />
        )

        const activeSection = screen.getByText("Inicio");
        expect(activeSection).toBeInTheDocument();

    });

    it("Debería cambiar la sección correctamente", async() => {
        //Usar el mock para observar las secciones y cambiarlas manualmente y ver que activeSection cambia: 
        function WrapperUseSection (){
            const { activeSection, sectionsRef } = useSection();
            const [render, setRender] = useState(false);

            //Creo un useEffect para relacionar y cada ve que activeSection cambie, cambie el render(provocar el re-render):
            useEffect(()=> {
                
                setRender(prev => !prev);

            },[activeSection])
        
            return(
                <>
                {/* Manualmente creo las páginas con las refs: */}
                    <div>
                        <span>{ activeSection }</span>
                    </div>
                    <section id="inicio" ref={ (el) => (sectionsRef.current[0] = el)}>Inicio</section>
                    <section id="proyectos" ref={ (el) => (sectionsRef.current[1] = el)}>Proyectos </section>
                    <section id="tecnologia" ref={ (el) => (sectionsRef.current[2] = el)}>Tecnología</section>
                    <section id="contacto" ref={ (el) => (sectionsRef.current[3] = el)}>Contacto</section>
                </>
            )

        }

        render(
            <WrapperUseSection />
        )

        //Compruebo que inicio aparece dos veces, span(activa) y section: 
        const firstActiveSection = screen.getAllByText("Inicio");
        expect(firstActiveSection).toHaveLength(2);

        
        //Con act para asegurarme de que hace los cambios (re-renders), se complenten antes de seguir con el test: 
        act(() => {
            triggerIntersection(true, "proyectos");
        });


        await waitFor(() => {
            //Ahora aparecerá proyectos dos veces: 
            const activeSection = screen.getAllByText("Proyectos");
            expect(activeSection).toHaveLength(2);
            //Compruebo que ahora solo existe inicio una vez de la section: 
            expect(firstActiveSection).toHaveLength(1);
        })

    });
})