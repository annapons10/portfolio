export const Footer = () => {
    return (
          <footer className="flex flex-col items-center justify-center bg-[var(--color-fondo-footer)] h-30 w-screen mt-20">
            <p className="text-lg sm:text-xl md:text-2xl text-center">
            &copy; {new Date().getFullYear()} Anna Pons. Todos los derechos reservados.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Contacto: <a href="mailto:developer@annaponsprojects.com" className="hover:font-bold color[var(--color-hover)]">developer@annaponsprojects.com</a>
            </p>
        </footer>

        );
};
  