import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Certificates from "./components/Certificates";
// import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${
      darkMode 
        ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900'
        : 'bg-linear-to-br from-gray-50 to-blue-50'
    }`}>
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        {/* <Projects darkMode={darkMode} />
        <Certificates darkMode={darkMode} />
        <Contact darkMode={darkMode} /> */}
      </main>

      {/* Footer */}
      <footer className={`relative z-10 py-8 text-center border-t ${
        darkMode ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"
      }`}>
        <p>© 2026 Nabila Falih Amalia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;