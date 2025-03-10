import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        aria-label="Close menu"
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        Home{" "}
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        About{" "}
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#Projects"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        Projects{" "}
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        Contact{" "}
      </a>
    </div>
  );
};
