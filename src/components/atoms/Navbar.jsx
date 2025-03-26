import { useEffect } from "react";
import logoWhite from "../../assets/MF_WHITE.svg";
import logoAlter from "../../assets/MF_ALTER.svg";
import { translations } from "../../composables/translations";

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
    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <section className="max-w-xl mx-auto px-6 py-2 flex justify-between items-center">
        <div>
          <a className="font-mono">
            <img
              className="h-5 w-auto"
              src={isDark ? logoWhite : logoAlter}
              alt="Logo staff"
            />
          </a>
        </div>
        <div className="flex justify-center items-center h-12 p-3 md:px-6 md:backdrop-blur-sm md:border md:border-white/20 md:shadow-lg md:rounded-full">
          <div
            className=" relative text-center cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>
          <div className="hidden md:flex items-center space-x-9">
            {navBar[currentLang].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <button
            aria-label="Dark mode"
            onClick={toggleDarkMode}
            id="darkMode"
            className="font-mono cursor-pointer hover:text-blue-500 hover:bg-blue-500/50 hover:backdrop-blur-sm transition-all hover:rounded-full p-1"
          >
            {!isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 24 24"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 24 24"
              >
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
