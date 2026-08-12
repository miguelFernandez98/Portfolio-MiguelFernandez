import { translations } from "../../lib/constants/translationsNabar";
import PropTypes from "prop-types";

export const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  isDark,
  toggleDarkMode,
  isSpanish,
}) => {
  const { navBar } = translations;
  const currentLang = isSpanish ? "es" : "en";

  const handleDarkMode = () => {
    toggleDarkMode();
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute top-0 max-w-5xl w-full mx-auto px-6 py-4 flex justify-between items-center">
        <button
          aria-label={isDark ? "Cambiar a modo claro" : "Switch to dark mode"}
          className="text-gray-100 text-xl focus:outline-none cursor-pointer hover:text-emerald-500 transition-colors"
          onClick={handleDarkMode}
          id="darkMode"
        >
          {!isDark ? (
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
              />
            </svg>
          ) : (
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
              />
            </svg>
          )}
        </button>
        <button
          aria-label="Close menu"
          className="text-gray-100 text-3xl focus:outline-none cursor-pointer hover:text-emerald-500 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
      </div>
      {navBar[currentLang].map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          className="font-mono text-2xl font-semibold text-gray-100 my-4 transition-transform duration-300 hover:text-emerald-500"
        >
          <span className="text-emerald-500">{"//"}</span> {link.label}
        </a>
      ))}
    </div>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isSpanish: PropTypes.bool.isRequired,
};

