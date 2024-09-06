const Hero = () => {
  const scrollTo = () => {
    const element = document.getElementById("contact");

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <section className="bg-gray-100 py-40 px-5 transition-all dark:bg-darker dark:text-gray-100">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="mb-5 flex flex-wrap text-6xl font-medium tracking-tight md:text-7xl">
          Professional Frontend&nbsp;
          <span className="text-indigo-500 dark:text-indigo-400">
            Developer
          </span>
        </h2>
        <p>
          Welcome to my portfolio. I am a passionate frontend developer who
          loves learning new technologies. I specialize in creating streamlined
          React applications, and styling them with Tailwind CSS.
        </p>

        <button
          onClick={scrollTo}
          className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
        >
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Hero;
