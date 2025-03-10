export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 py-1 bg-gradient-to-r from-blue-600 to-green-700 bg-clip-text text-transparent leading-right">
          Hi, I'm Miguel Fernandez
        </h1>
        <p className="text-gray-400 text-md mb-8 max-w-lg mx-auto">
          I'm Miguel Fernández, a systems engineer specializing in front-end
          development. I create interactive and responsive user interfaces,
          applying Clean Code principles and SOLID design patterns to ensure
          maintainable and efficient solutions. I also have experience working
          with APIs and building scalable systems.
        </p>
      </div>
    </section>
  );
};
