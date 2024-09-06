import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Slideout from "./components/Slideout";
import { AnimatePresence } from "framer-motion";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="bg-gray-100 text-neutral-700 transition-all dark:text-gray-100">
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <AnimatePresence>
        {mobileMenu && (
          <Slideout mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        )}
      </AnimatePresence>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
