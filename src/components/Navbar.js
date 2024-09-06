import { FaCloudsmith, FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import Toggle from "../context/ThemeToggle";

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const navLinks = [
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="h-[68px] bg-white"></div>
      <section className="fixed top-0 z-30 w-full border-b bg-white p-5 backdrop-blur-xl transition-all dark:border-darkest dark:bg-dark dark:text-gray-100 dark:opacity-100">
        <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between">
          <div className="flex items-center text-lg">
            <FaCloudsmith className="text-indigo-500 dark:text-indigo-400" />
            <div className="whitespace-nowrap font-bold tracking-tight">
              Brandon Maczynski
            </div>
          </div>
          <div className="flex w-full items-center justify-end">
            <Toggle />
            <div
              className={clsx(
                "flex rotate-0 transition-all duration-300 lg:hidden",
                mobileMenu && "rotate-180 transition-all duration-300"
              )}
            >
              {!mobileMenu ? (
                <button
                  className="p-1"
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                >
                  <FaBars className="text-lg" />
                </button>
              ) : (
                <button
                  className="p-1"
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                >
                  <FaTimes className="text-lg" />
                </button>
              )}
            </div>

            <div className="hidden gap-5 lg:flex">
              {navLinks.map((link, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(
                        link.name.toLowerCase()
                      );
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                    }}
                    className="flex"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
