import { useEffect, useState } from "react";
import logo from "../assets/MF.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-sm">
      <section className="max-w-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <a href="#home" className="font-mono">
            <img className="h-5 w-auto" src={logo} alt="Logo staff" />
          </a>
        </div>
        <div className="flex justify-center items-center h-12 py-3 px-3 md:px-6 md:backdrop-blur-sm md:border md:border-white/20 md:shadow-lg md:rounded-full">
          <div
            className="w-7 h-5 relative text-center cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>
          <div className="hidden md:flex items-center space-x-9">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${
                  activeSection === link.id
                    ? "text-blue-500"
                    : "hover:text-white"
                }  transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <button id="darkMode" className="font-mono">
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
          </button>
        </div>
      </section>
    </nav>
  );
};
