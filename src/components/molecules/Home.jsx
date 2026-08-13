import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { Typewriter } from "../atoms/Typewriter";
import cvPdfEs from "../../assets/MiguelFernandez-CV-ES.pdf";
import cvPdfEn from "../../assets/MiguelFernandez-CV-EN.pdf";
import { translations } from "../../lib/constants/translationsHome";
import PropTypes from "prop-types";

export const Home = ({ isSpanish }) => {
  const {
    prompt,
    firstName,
    lastName,
    roles,
    tagline,
    tech,
    downloadCv,
  } = translations.home;
  const currentLang = isSpanish ? "es" : "en";
  const cvPdf = isSpanish ? cvPdfEs : cvPdfEn;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">
          <p className="terminal-prompt font-mono text-sm text-gray-500 dark:text-gray-400 mb-6">
            {prompt[currentLang]}
            <span className="animate-blink ml-1 text-emerald-500">_</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight">
            <span className="block">{firstName[currentLang]}</span>
            <span className="block bg-linear-to-br from-blue-500 to-emerald-600 bg-clip-text text-transparent">
              {lastName[currentLang]}
            </span>
          </h1>
          <div className="h-8 mb-6">
            <Typewriter words={roles[currentLang]} />
          </div>
          <p className="dark:text-gray-400 text-gray-500 text-md mb-8 max-w-xl mx-auto">
            {tagline[currentLang]}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tech[currentLang].map((t, key) => (
              <span
                key={key}
                className="bg-blue-600/10 text-blue-700 dark:bg-blue-500/10 dark:text-blue-500 border border-blue-600/20 dark:border-blue-500/20 hover:bg-blue-600/20 py-1 px-3 rounded-3xl text-sm transition"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/miguel-angel-fernandez-soto-06b8b9252/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-gray-100 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(37,99,235,0.4)]"
            >
              <svg width="1.2em" height="1.2em" viewBox="0 0 128 128">
                <path
                  fill="currentColor"
                  d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3M39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5a10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/miguelFernandez98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 dark:bg-white/10 text-gray-100 py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(168,85,247,0.4)]"
            >
              <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                />
              </svg>
              GitHub
            </a>
            <a
              href={cvPdf}
              download={`MiguelFernandez-CV-${isSpanish ? "ES" : "EN"}.pdf`}
              className="flex items-center gap-2 bg-linear-to-br from-blue-500 to-emerald-600 text-gray-100 py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(16,185,129,0.4)]"
            >
              <svg width="1.2em" height="1.2em" viewBox="0 0 14 14">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z" />
                  <path d="m9 8l-2 2l-2-2m2 2V4.5" />
                </g>
              </svg>
              {downloadCv[currentLang]}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

Home.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
