import { RevealOnScroll } from "../atoms/RevealOnScroll";
import cvPdf from '../../assets/Miguel-AngelFernandezSotoCV.pdf';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 py-3 bg-gradient-to-br from-blue-500  to-emerald-600 bg-clip-text text-transparent leading-13 ">
            Hi, I'm Miguel Fernandez
          </h1>
          <p className="dark:text-gray-400 text-gray-500 text-md mb-8 max-w-xl mx-auto">
            I'm systems engineer, with a focus on front-end development,
            creating interactive and responsive user interfaces, and building
            scalable systems with expertise in APIs and clean code.
          </p>
          <div className="flex justify-center space-x-5">
            <a
              href="https://www.linkedin.com/in/miguel-angel-fernandez-soto-06b8b9252/"
              target="_blank"
              className="bg-blue-500 text-gray-100 py-3 px-6  rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3M39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5a10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/miguelFernandez98"
              target="_blank"
              className="bg-purple-600 text-gray-100 py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                />
              </svg>
            </a>
            <a
              href={cvPdf}
              download="Miguel-AngelFernandezSotoCV.pdf"
              className="bg-gradient-to-br from-blue-500  to-emerald-600  text-gray-100 py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.35em"
                height="1.35em"
                viewBox="0 0 14 14"
              >
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
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
