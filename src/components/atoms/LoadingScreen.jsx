import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const LoadingScreen = ({ onComplete, hidden }) => {
  const textRef = useRef(null);
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (textRef.current) {
        textRef.current.textContent = fullText.substring(0, index);
      }
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText, onComplete]);

  useEffect(() => {
    if (hidden) {
      document.body.classList.remove("no-scroll");
      return;
    }
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [hidden]);

  return (
    <section
      aria-hidden={hidden}
      className={`fixed inset-0 z-50 bg-white dark:bg-[#0a0a0a] dark:text-gray-100 text-gray-900 flex flex-col items-center justify-center transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        <span ref={textRef} />
        <span className="animate-blink ml-1">|</span>
      </div>
    </section>
  );
};

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};