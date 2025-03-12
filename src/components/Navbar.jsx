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
      { threshold: 0.3, rootMargin: "0px 0px -50% 0px" }
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
        <div className="flex justify-center items-center h-12 py-3 px-6 md:bg-[rgba(10,10,10,0.8)] md:backdrop-blur-sm md:border md:border-white/20 md:shadow-lg md:rounded-4xl">
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
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
          <btn id="darkMode" className="font-mono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </btn>
        </div>
      </section>
    </nav>
  );
};
