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
      <div className="max-w-3-xl mx-auto px-4">
        <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
          {" "}
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-0 transition-all">
          <p className="text-gray-300 mb-b">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure
            sed facere doloribus! Hic delectus repellat voluptatibus excepturi
          </p>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" rounded-3xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-3xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-3xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
