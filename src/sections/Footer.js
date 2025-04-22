import { FaCloudsmith } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import BackToTop from "../components/BackToTop";

const Footer = () => {
  return (
    <>
      <section className="relative bg-gray-100 py-20 px-5 dark:bg-darker dark:!text-gray-100">
        <BackToTop />
        <div className="mx-auto flex max-w-screen-lg flex-row flex-wrap">
          <div className="flex w-full flex-col">
            <div className="relative right-[4px] flex w-full items-center text-2xl font-semibold tracking-tight">
              <FaCloudsmith className="text-indigo-500 dark:text-indigo-400" />
              Brandon Maczynski
            </div>
          </div>
          <div className="mt-5 flex w-full flex-wrap gap-10 lg:flex-nowrap lg:justify-between">
            <div className="flex flex-col">
              <div className="mb-1.5 flex text-lg font-semibold tracking-tight">
                Work
              </div>
              <div className="flex flex-col space-y-1 text-sm">
                <a
                  href="https://typeify.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-opacity-80 hover:text-opacity-100"
                >
                  Typeify
                </a>
                <a
                  href="/reddit-browser"
                  target="_blank"
                  className="text-opacity-80 hover:text-opacity-100"
                >
                  Reddit Browser
                </a>
                <a
                  href="/blackjack"
                  target="_blank"
                  className="text-opacity-80 hover:text-opacity-100"
                >
                  Blackjack
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-1.5 flex text-lg font-semibold tracking-tight">
                Socials
              </div>
              <div className="flex flex-col space-y-1 text-sm">
                <a
                  href="https://github.com/bmaczynski"
                  rel="noreferrer"
                  target="_blank"
                  className="text-opacity-80 hover:text-opacity-100"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/brandondm/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-opacity-80 hover:text-opacity-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-1.5 flex text-lg font-semibold tracking-tight">
                Information
              </div>
              <div className="space-y-1 text-sm">
                <a
                  href="mailto:bmaczynski11@yahoo.com"
                  className="flex items-center gap-1 text-opacity-80 hover:text-opacity-100"
                >
                  <HiOutlinePaperAirplane /> bmaczynski11@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
