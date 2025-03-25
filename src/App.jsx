import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home, About, Projects, Contact } from "./components/sections";
import { Toaster } from "sonner";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <section
        className={`min-h-screen transition-all duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <Toaster theme={isDark ? "dark" : "light"} richColors />
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          isDark={isDark} 
          toggleDarkMode={() => setIsDark(!isDark)}
        />
        <MobileMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen}
          isDark={isDark}
          toggleDarkMode={() => setIsDark(!isDark)}
        />
        <Home isDark={isDark} />
        <About isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </section>
    </>
  );
}

export default App;