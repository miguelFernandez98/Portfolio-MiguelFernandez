import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const Typewriter = ({ words }) => {
  const textRef = useRef(null);
  const stateRef = useRef({ wordIndex: 0, deleting: false, text: "" });

  useEffect(() => {
    if (!words.length) return;

    let timer;

    const step = () => {
      const { wordIndex, deleting, text: currentText } = stateRef.current;
      const current = words[wordIndex];
      let delay;

      if (!deleting && currentText === current) {
        stateRef.current.deleting = true;
        delay = 1900;
      } else if (deleting && currentText === "") {
        stateRef.current.deleting = false;
        stateRef.current.wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      } else {
        delay = deleting ? 45 : 85;
        stateRef.current.text = deleting
          ? current.substring(0, currentText.length - 1)
          : current.substring(0, currentText.length + 1);
        if (textRef.current) {
          textRef.current.textContent = stateRef.current.text;
        }
      }

      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 700);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className="font-mono text-lg md:text-xl text-blue-700 dark:text-blue-500">
      <span ref={textRef}>{"//"} </span>
      <span className="animate-blink ml-0.5 text-emerald-700 dark:text-emerald-500">_</span>
    </span>
  );
};

Typewriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};