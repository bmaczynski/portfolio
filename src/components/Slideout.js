import { motion } from "framer-motion";
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
const Slideout = ({ mobileMenu, setMobileMenu }) => {
  return (
    <motion.div
      initial={{ y: "-200px", opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { stiffness: 0 } }}
      exit={{ y: "-200px" }}
      className="fixed right-0 w-full border-y bg-white dark:border-b-darkest dark:bg-dark lg:hidden"
    >
      <div className="flex w-full justify-end">
        <div className="flex flex-col gap-5 p-5">
          {navLinks.map((link, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  const element = document.getElementById(
                    link.name.toLowerCase()
                  );
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }}
                className="text-right"
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Slideout;
