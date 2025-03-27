import { translations } from "../../lib/constants/translations";

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
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute top-0 mt-5 flex items-center w-full justify-between px-10">
        <button
          className="text-gray-100 text-3xl focus:outline-none cursor-pointer"
          onClick={handleDarkMode}
          id="darkMode"
        >
          {!isDark ? (
            <svg width="0.90em" height="0.90em" viewBox="0 0 24 24">
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
            <svg width="0.90em" height="0.90em" viewBox="0 0 24 24">
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
          className="text-gray-100 text-3xl focus:outline-none cursor-pointer"
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
          className={`text-2xl font-semibold text-gray-100 my-4 transition-transform duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "opacity-0 translate-y-5"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
