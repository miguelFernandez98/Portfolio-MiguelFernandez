import { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/index.css";
import { TranslateButton } from "./components/atoms/TranslateButton";
import { LoadingScreen } from "./components/atoms/LoadingScreen";
import { Navbar } from "./components/atoms/Navbar";
import { MobileMenu } from "./components/atoms/MobileMenu";
import { Home } from "./components/molecules/Home";
import { About } from "./components/molecules/About";
import { Contact } from "./components/molecules/Contact";
import { Projects } from "./components/molecules/Projects";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useDarkMode } from "./context/DarkModeProvider";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, setIsDark } = useDarkMode();
  const [isSpanish, setIsSpanish] = useState(() => {
    const savedLang = localStorage.getItem("preferredLang");
    return savedLang !== null
      ? savedLang === "es"
      : navigator.language.startsWith("es");
  });

  useEffect(() => {
    document.documentElement.lang = isSpanish ? "es" : "en";
    document.title = isSpanish
      ? "Miguel Fernández — Full-stack Developer"
      : "Miguel Fernández — Full-stack Developer";
  }, [isSpanish]);

  return (
    <>
      <SpeedInsights />
      <LoadingScreen
        onComplete={() => setIsLoaded(true)}
        hidden={isLoaded}
      />
      <main
        id="main"
        className={`min-h-screen transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#f3f4f6] dark:bg-[#0a0a0a] dark:text-gray-100 text-gray-800/90`}
      >
        <Toaster theme={isDark ? "dark" : "light"} richColors />
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isDark={isDark}
          toggleDarkMode={() => setIsDark(!isDark)}
          isSpanish={isSpanish}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isDark={isDark}
          toggleDarkMode={() => setIsDark(!isDark)}
          isSpanish={isSpanish}
        />
        <Home isDark={isDark} isSpanish={isSpanish} />
        <About isDark={isDark} isSpanish={isSpanish} />
        <Projects isDark={isDark} isSpanish={isSpanish} />
        <Contact isDark={isDark} isSpanish={isSpanish} />
        <TranslateButton setIsSpanish={setIsSpanish} isSpanish={isSpanish} />
      </main>
    </>
  );
}

export default App;
