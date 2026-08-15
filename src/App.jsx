import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. PAKSA SCROLL KE ATAS (HERO) SAAT REFRESH/MOUNT
    window.scrollTo(0, 0);

    // 2. Inisialisasi AOS
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    
    document.documentElement.classList.add('dark');

    // 3. Simulasi loading screen selama 2.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen darkMode={darkMode} />}
      </AnimatePresence>

      <div className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="relative z-10">
          {/* Kirim sinyal isLoaded ke Hero agar animasinya mulai setelah loading selesai */}
          <Hero darkMode={darkMode} isLoaded={!isLoading} />
          
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Certificates darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        {/* Footer */}
        <footer className={`relative z-10 py-8 text-center border-t transition-colors duration-300 ${
          darkMode ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"
        }`}>
          <p>© 2026 Nabila Falih Amalia. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;