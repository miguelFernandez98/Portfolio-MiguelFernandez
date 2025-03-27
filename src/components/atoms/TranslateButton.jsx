export const TranslateButton = ({ setIsSpanish }) => {
  const toggleLanguage = () => {
    setIsSpanish((prev) => {
      const newLang = !prev;
      localStorage.setItem("preferredLang", newLang ? "es" : "en");
      return newLang;
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed cursor-pointer bottom-4 right-4 z-40 p-3 dark:bg-blue-500/50 bg-blue-500/40 dark:text-blue-500 text-blue-500 dark:hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:bg-blue-500/30  rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.35em"
        height="1.35em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"
        />
      </svg>
    </button>
  );
};
