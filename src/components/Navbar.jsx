import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Sun, Moon, X, Menu } from "lucide-react"

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // 1. SCROLLSPY MANUAL
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. HIDE/SHOW NAVBAR SAAT SCROLL
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false); 
            } else {
                setIsVisible(true); 
            }
            lastScrollY.current = currentScrollY;

            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setIsVisible(true);
            }, 150);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
            clearTimeout(scrollTimeout.current);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    const lightColors = {
        navBg: 'bg-linear-to-br from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const darkColors = {
        navBg: 'bg-linear-to-br from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-orange-400',
        textActive: 'text-orange-400',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const colors = darkMode ? darkColors : lightColors;

    // 3. SMOOTH SCROLL DENGAN OFFSET
    const handleNavClick = (e, itemName, href) => {
        e.preventDefault();
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);

        setTimeout(() => {
            if (itemName.toLowerCase() === 'home') {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
                document.body.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(href);
                if (element) {
                    const offset = 30; 
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                }
            }
        }, 100);
    }

    return (
        <div className="flex justify-center w-full fixed z-50 mt-4">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
            >
                <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
                    
                    {/* Logo Section */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <span className={`text-xl font-bold ${colors.textPrimary}`}>
                            portfolio<span className="text-orange-500">.</span>
                        </span>
                    </motion.a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.name, item.href)}
                                className="relative"
                            >
                                <motion.span
                                    className={`font-medium transition-colors duration-300 ${
                                        activeSection === item.name.toLowerCase()
                                            ? colors.textActive
                                            : `${colors.textSecondary} hover:text-orange-500`
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.span>
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Right Side: Dark Mode & Hire Me */}
                    <div className="flex items-center space-x-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}
                            aria-label={darkMode ? 'switch to light mode' : 'switch to dark mode'}
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-300" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" />
                            )}
                        </motion.button>
                        
                        {/* Desktop Contact Me Button dengan Offset Scroll */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'Contact', '#contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center space-x-4 px-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                        >
                            {isMenuOpen ? (
                                <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                            ) : (
                                <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute top-full left-0 right-0 mt-2 mx-4 lg:hidden ${
                                darkMode ? 'bg-gray-900/95' : 'bg-white/95'
                            } backdrop-blur-lg rounded-xl shadow-lg border ${
                                darkMode ? 'border-gray-700' : 'border-gray-200'
                            }`}
                        >
                            <div className="p-4 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.name, item.href)}
                                        className="block"
                                    >
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className={`py-3 px-4 rounded-lg text-center ${
                                                activeSection === item.name.toLowerCase()
                                                    ? (darkMode ? 'bg-gray-800' : 'bg-orange-50')
                                                    : ''
                                            }`}
                                        >
                                            <span className={`font-medium ${
                                                activeSection === item.name.toLowerCase()
                                                    ? colors.textActive
                                                    : colors.textSecondary
                                            }`}>
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    </a>
                                ))}
                                
                                {/* Mobile Contact Me Button dengan Offset Scroll */}
                                <motion.a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, 'Contact', '#contact')}
                                    whileTap={{ scale: 0.95 }}
                                    className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md mt-4`}
                                >
                                    Contact Me
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    )
}

export default Navbar