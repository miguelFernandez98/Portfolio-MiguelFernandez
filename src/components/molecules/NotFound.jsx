import { useEffect } from "react";
import PropTypes from "prop-types";

export const NotFound = ({ isSpanish }) => {
  useEffect(() => {
    document.title = isSpanish
      ? "404 — Página no encontrada | Miguel Fernández"
      : "404 — Page Not Found | Miguel Fernández";
    const meta = document.querySelector('meta[name="robots"]');
    if (meta) {
      meta.setAttribute("content", "noindex");
    }
    return () => {
      if (meta) {
        meta.setAttribute("content", "index, follow");
      }
    };
  }, [isSpanish]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="section-marker mb-4">
        {"//"} {isSpanish ? "error" : "error"}
      </p>
      <h1 className="text-6xl md:text-8xl font-extrabold mb-2 bg-linear-to-br from-blue-500 to-emerald-600 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-xl">
        {isSpanish
          ? "La página que buscas no existe o fue movida."
          : "The page you're looking for doesn't exist or was moved."}
      </p>
      <a
        href="/"
        className="font-mono text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
      >
        {isSpanish ? "← Volver al inicio" : "← Back to home"}
      </a>
    </section>
  );
};

NotFound.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
