import { motion } from "framer-motion";
import { Download } from "lucide-react";
import aboutImg from "../assets/hero.png";

const About = ({ darkMode }) => {
    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        cardBg: "bg-white/80",
        border: "border-gray-200",
        button: "from-orange-500 to-amber-500",
        buttonOutline: "border-orange-500 text-orange-600 hover:bg-orange-50",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        cardBg: "bg-gray-800/80",
        border: "border-gray-700",
        button: "from-orange-500 to-amber-500",
        buttonOutline: "border-orange-500 text-orange-400 hover:bg-orange-900/20",
    };

    const colors = darkMode ? darkColors : lightColors;

    return (
        <section id="about" className={`py-20 px-6 md:px-12 lg:px-20 ${
            darkMode ? 'bg-gray-800/40' : 'bg-orange-50/40'
        }`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${colors.textPrimary}`}>
                        About <span className="text-orange-500">Me</span>
                    </h2>
                </motion.div>

                {/* Grid Container untuk Teks dan Foto */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 1. Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <h3 className={`text-2xl sm:text-3xl font-bold mb-6 ${colors.textPrimary}`}>
                            Hello, I'm <span className="text-orange-500">Nabila Falih Amalia</span>
                        </h3>

                        <p className={`mb-4 leading-relaxed text-left ${colors.textSecondary}`}>
                            I am a Software Engineering student with a disciplined and detail-oriented approach to development.
                            I pride myself on my ability to write clean, maintainable code and my commitment to meeting project deadlines.
                        </p>

                        <p className={`mb-4 leading-relaxed text-left ${colors.textSecondary}`}>
                            I am a collaborative team player who values constructive feedback and is dedicated to contributing technical solutions
                            that align with organizational goals.
                        </p>

                        <p className={`mb-8 leading-relaxed text-left ${colors.textSecondary}`}>
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge with the developer community.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
                            <motion.a
                                href=""
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md`}
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* 2. Photo Circle */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
                    >
                        <div className="relative">
                            <div className="about-photo-circle w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                                <img
                                    src={aboutImg}
                                    alt="Nabila Falih Amalia"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
