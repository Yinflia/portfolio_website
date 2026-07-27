import { motion } from "framer-motion";
import { Monitor, Server, Wrench, Settings } from "lucide-react"; // ← Ganti Setting jadi Settings

import htmlIcon from "../assets/html5-original.svg";
import cssIcon from "../assets/css3-original.svg";
import jsIcon from "../assets/javascript-original.svg";
import reactIcon from "../assets/react-original.svg";
import tailwindIcon from "../assets/tailwindcss-original.svg";
import gitIcon from "../assets/git-original.svg";
import githubIcon from "../assets/github-original.svg";
import nodeIcon from "../assets/nodejs-original.svg";
import pythonIcon from "../assets/python-original.svg";
import cppIcon from "../assets/cplusplus-original.svg";
import cIcon from "../assets/c-original.svg";

const Skills = ({ darkMode }) => {
    const skillsData = [
        {
            category: "Languages",
            icon: Wrench,
            skills: [
                { name: "C", icon: cIcon, color: "#00599C" },
                { name: "C++", icon: cppIcon, color: "#00599C" },
                { name: "JavaScript", icon: jsIcon, color: "#F7DF1E" },
                { name: "Python", icon: pythonIcon, color: "#3776AB" },
            ],
        },
        {
            category: "Frontend",
            icon: Monitor,
            skills: [
                { name: "HTML", icon: htmlIcon, color: "#E34F26" },
                { name: "CSS", icon: cssIcon, color: "#1572B6" },
                { name: "JavaScript", icon: jsIcon, color: "#F7DF1E" },
                { name: "React", icon: reactIcon, color: "#61DAFB" },
                { name: "Tailwind", icon: tailwindIcon, color: "#06B6D4" },
                // ← Git dihapus dari sini
            ],
        },
        {
            category: "Backend",
            icon: Server,
            skills: [
                { name: "Node.js", icon: nodeIcon, color: "#339933" },
            ],
        },
        {
            category: "Tools",
            icon: Settings, // ← Ganti Setting jadi Settings
            skills: [
                { name: "Git", icon: gitIcon, color: "#F05032" }, // ← Tambahkan color
                { name: "GitHub", icon: githubIcon, color: "#181717" }, // ← Tambahkan color + perbaiki nama
            ],
        },
    ];

    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        cardBg: "bg-white",
        border: "border-gray-200",
        cardHover: "hover:border-orange-300",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        cardBg: "bg-gray-800/50",
        border: "border-gray-700",
        cardHover: "hover:border-orange-500/50",
    };

    const colors = darkMode ? darkColors : lightColors;

    return (
        <section id="skills" className={`py-20 px-6 md:px-12 lg:px-20 ${
            darkMode ? 'bg-gray-900/50' : 'bg-orange-50/30'
        }`}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${colors.textPrimary}`}>
                        My <span className="text-orange-500">Skills</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${colors.textSecondary}`}>
                        My skills are those I've learned and developed over the years. 
                        By studying, focusing, and being consistent in what I love most.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {skillsData.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.01 }}
                                className={`rounded-2xl border ${colors.border} ${colors.cardBg} ${colors.cardHover} p-8 md:p-10 transition-all duration-300 backdrop-blur-sm`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                                    <div className="flex items-center gap-4 md:w-1/3">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className={`text-2xl md:text-3xl font-bold ${colors.textPrimary}`}>
                                            {category.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-3 md:w-2/3 md:justify-start">
                                        {category.skills.map((skill) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                                                    darkMode 
                                                        ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700' 
                                                        : 'bg-gray-50 border-gray-200 hover:bg-orange-50'
                                                } transition-all duration-200 cursor-default`}
                                                style={{
                                                    borderLeft: `4px solid ${skill.color}`,
                                                }}
                                            >
                                                <img 
                                                    src={skill.icon} 
                                                    alt={skill.name}
                                                    className="w-5 h-5 shrink-0"
                                                />
                                                <span className={`text-sm font-medium ${colors.textSecondary}`}>
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;