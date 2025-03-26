export const Footer = () => {
    return (
      <footer className=" flex flex-col items-center justify-center mt-20 bg-[var(--color-fondo-footer)] h-30 ">
        <p className="text-lg ">&copy; {new Date().getFullYear()} Anna Pons. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
          Contacto: <a href="mailto:developer@annaponsprojects.com" className="underline hover:text-gray-400">developer@annaponsprojects.com</a>
        </p>
      </footer>
    );
  };
  