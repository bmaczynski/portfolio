import SectionWrapper from "../wrappers/SectionWrapper";
import redditapp from "../images/redditapp.png";
import blackjack from "../images/blackjack.png";
import typeify from "../images/typeify.png";

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      description="Listed below are the projects I am currently working on that are functional, or have been completed."
      gray="true"
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="flex w-full flex-col items-center gap-5 rounded-md bg-white p-5 shadow-lg dark:bg-dark dark:shadow-none lg:flex-row">
          <div className="flex h-32 w-32 shrink-0 rounded-full bg-gray-200">
            <img src={redditapp} alt="" className="flex rounded-full" />
          </div>
          <div>
            <h4 className="text-xl font-medium">Browser for Reddit</h4>
            <p>
              An app I created that uses Reddit's API to display current
              information on any subreddit.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  window.open("/reddit-browser", "_blank");
                }}
                className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
              >
                View project
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Goastio/reddit-browser",
                    "_blank"
                  );
                }}
                className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
              >
                Source
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-5 rounded-md bg-white p-5 shadow-lg dark:bg-dark dark:shadow-none lg:flex-row">
          <div className="flex h-32 w-32 shrink-0 rounded-full bg-gray-200">
            <img
              src={blackjack}
              alt=""
              className="flex rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium">Blackjack</h4>
            <p>
              Programmed from the ground up without the use of APIs. One of my
              first projects.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  window.open("/blackjack", "_blank");
                }}
                className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
              >
                View project
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Goastio/blackjack-react",
                    "_blank"
                  );
                }}
                className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
              >
                Source
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-5 rounded-md bg-white p-5 shadow-lg dark:bg-dark dark:shadow-none lg:flex-row">
          <div className="flex h-32 w-32 shrink-0 rounded-full bg-gray-200">
            <img src={typeify} alt="" className="flex rounded-full" />
          </div>
          <div>
            <h4 className="text-xl font-medium">Typeify.io</h4>
            <p>
              Typeify.io, built with React and TailwindCSS, is a dynamic typing
              website that improves user typing speed and accuracy. I am
              dedicated to implementing features over time.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  window.open("https://typeify.io/", "_blank");
                }}
                className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
              >
                View project
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/bmaczynski/Typeify",
                    "_blank"
                  );
                }}
                className="mt-5 rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darkest"
              >
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
