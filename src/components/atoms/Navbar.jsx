import { useEffect } from "react";
import logoWhite from "../../assets/MF_WHITE.svg";
import logoAlter from "../../assets/MF_ALTER.svg";
import { translations } from "../../lib/constants/translationsNabar";
import PropTypes from "prop-types";

export const Navbar = ({
  menuOpen,
  setMenuOpen,
  isDark,
  toggleDarkMode,
  isSpanish,
}) => {
  const { navBar } = translations;
  const currentLang = isSpanish ? "es" : "en";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#f3f4f6]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md">
      <section className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-mono text-lg font-bold">
          <img
            className="h-6 w-auto"
            src={isDark ? logoWhite : logoAlter}
            alt="Logo staff"
          />
        </a>
        <div className="flex items-center gap-2">
          <div className="flex md:hidden items-center justify-center w-10 h-10 cursor-pointer hover:bg-gray-500/10 rounded-full transition">
            <button
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              className="text-xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {navBar[currentLang].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors"
              >
                <span className="text-emerald-500">{"//"}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <button
            aria-label="Dark mode"
            onClick={toggleDarkMode}
            className="ml-2 flex items-center justify-center w-10 h-10 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-full transition-all"
          >
            {!isDark ? (
              <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
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
              <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
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
        </div>
      </section>
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isSpanish: PropTypes.bool.isRequired,
};

