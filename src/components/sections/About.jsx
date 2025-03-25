import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontEndSkills = [
    "Javascript",
    "Typescript",
    "Vue",
    "React",
    "Flutter",
    "TailwindCSS",
  ];

  const backEndSkills = ["Node.js", "Express", "MongoDB", "Docker"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            {" "}
            About Me
          </h2>
          <article className="rounded-4xl p-8 border-white/10 border hover:-translate-y-0 transition-all">
            <p className="text-gray-300 mb-b text-center">
              Experienced frontend developer with backend basics. Adaptable to
              new technologies and continuous learner.{" "}
              <strong>University of Margarita graduate 2017-2022 </strong>.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <li className="rounded-4xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-3xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
              <li className="rounded-4xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-3xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </article>

          <div className="flex justify-center items-center gap-6 mt-8">
            <article className="p-6 rounded-4xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <h4 className="font-semibold">
                    Frontend developer <br /> OMNINEXO - WAIKERI HITECH{" "}
                    <span className="whitespace-nowrap">(2024 - Present)</span>
                  </h4>
                  <p>
                    {" "}
                    Developing mobile and web applications to optimize business
                    management and operations.{" "}
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">
                    Development specialist <br />
                    INSIDE MARKET/RIO SUPERMARKET{" "}
                    <span className="whitespace-nowrap">(2022 - 2024)</span>
                  </h4>
                  <p>
                    {" "}
                    Developed applications to enhance company efficiency and
                    user experience, including scheduling and reconciliation
                    tools.{" "}
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">
                    Development analyst <br /> GUUAO/LEIROS{" "}
                    <span className="whitespace-nowrap">(2023 - 2023)</span>
                  </h4>
                  <p>
                    {" "}
                    Improved an outdated mobile app by resolving errors and
                    enhancing functionality through design changes.{" "}
                  </p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
