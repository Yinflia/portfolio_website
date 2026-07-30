import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero.png";
import { FolderOpen } from "lucide-react";

const Hero = ({ darkMode }) => {
    const [typedText, setTypedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = ["Web Applications", "Mobile Apps", "Database Systems", "API Integrations", "Modern UI/UX"];

    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        badge: "bg-orange-100 text-orange-600 border-orange-200",
        button: "from-orange-500 to-amber-500",
        buttonOutline: "border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        badge: "bg-orange-900/30 text-orange-400 border-orange-800",
        button: "from-orange-500 to-amber-500",
        buttonOutline: "border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400",
    };

    const colors = darkMode ? darkColors : lightColors;

    useEffect(() => {
        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentText.length) {
                    setTypedText(currentText.substring(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(typedText.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    });

    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Content - Order 2 di mobile/tablet */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    <div className={`inline-block px-4 py-2 rounded-full border text-sm font-semibold mb-6 ${colors.badge}`}>
                        👋 Welcome to My Portfolio
                    </div>

                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${colors.textPrimary}`}>
                        Nabila Falih <span className="text-orange-500">Amalia</span>
                    </h1>

                    <div className={`text-xl sm:text-2xl md:text-3xl font-medium mb-6 ${colors.textSecondary}`}>
                        I build{" "}
                        <span className="text-orange-500 border-r-2 border-orange-500 pr-1">
                            {typedText}
                        </span>
                    </div>

                    <p className={`text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 ${colors.textSecondary}`}>
                        Passionate programmer who loves creating elegant solutions to complex problems.
                        Specialized in building modern web applications with cutting-edge technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full border-2 ${colors.buttonOutline} transition-colors`}
                        >
                            <FolderOpen className="w-5 h-5" />
                            View Projects
                        </motion.a>
                    </div>
                </motion.div>

                {/* Lanyard Visual - Order 1 di mobile/tablet (di atas) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
                >
                    <div className="lanyard-container">
                        <div className="lanyard-strap"></div>
                        <div className="breakaway-clip"></div>
                        <div className="metal-hook"></div>
                        <div className="id-card-holder">
                            <div className="card-slot"></div>
                            <div className="id-card-content">
                                <div className="id-photo-wrapper">
                                    <img src={heroImg} alt="Nabila Falih Amalia" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;