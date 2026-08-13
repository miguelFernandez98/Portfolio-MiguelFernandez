import PropTypes from "prop-types";

export const Footer = ({ isSpanish }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-400/15 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-2 text-center">
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
          © {year} Miguel Fernández
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {isSpanish
            ? "Full-stack Developer — Isla de Margarita, Venezuela"
            : "Full-stack Developer — Margarita Island, Venezuela"}
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
