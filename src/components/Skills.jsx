import { motion } from "framer-motion";
import { Languages, Monitor, Server, Wrench } from "lucide-react";

import htmlIcon from "../assets/icon_skills/html5-original.svg";
import cssIcon from "../assets/icon_skills/css3-original.svg";
import jsIcon from "../assets/icon_skills/javascript-original.svg";
import reactIcon from "../assets/icon_skills/react-original.svg";
import tailwindIcon from "../assets/icon_skills/tailwindcss-original.svg";
import gitIcon from "../assets/icon_skills/git-original.svg";
import githubIcon from "../assets/icon_skills/github-original.svg";
import nodeIcon from "../assets/icon_skills/nodejs-original.svg";
import pythonIcon from "../assets/icon_skills/python-original.svg";
import cppIcon from "../assets/icon_skills/cplusplus-original.svg";
import cIcon from "../assets/icon_skills/c-original.svg";
import expressIcon from "../assets/icon_skills/express-original.svg";
import canvaIcon from "../assets/icon_skills/canva-original.svg";
import postmanIcon from "../assets/icon_skills/postman-original.svg";
import figmaIcon from "../assets/icon_skills/figma-original.svg";

const Skills = ({ darkMode }) => {
    const skillsData = [
        {
            category: "Languages",
            icon: Languages,
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
                { name: "React", icon: reactIcon, color: "#61DAFB" },
                { name: "Tailwind CSS", icon: tailwindIcon, color: "#06B6D4" },
            ],
        },
        {
            category: "Backend",
            icon: Server,
            skills: [
                { name: "Node.js", icon: nodeIcon, color: "#339933" },
                { name: "Express.js", icon: expressIcon, color: "#737373" },
            ],
        },
        {
            category: "Tools",
            icon: Wrench,
            skills: [
                { name: "Git", icon: gitIcon, color: "#F05032" },
                { name: "GitHub", icon: githubIcon, color: "#181717" },
                { name: "Canva", icon: canvaIcon, color: "#00c4cc" },
                { name: "Postman", icon: postmanIcon, color: "#f37036" },
                { name: "Figma", icon: figmaIcon, color: "#a259ff" },
            ],
        },
    ];

    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        cardBg: "bg-white",
        border: "border-gray-200",
        cardHover: "hover:border-orange-300",
        cardShadow: "shadow-lg shadow-gray-200/50",
        cardShadowHover: "hover:shadow-xl hover:shadow-orange-200/60",
        iconBoxShadow: "shadow-lg shadow-orange-500/30",
        skillShadow: "shadow-sm shadow-gray-200/50",
        skillShadowHover: "hover:shadow-md hover:shadow-orange-300/50",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        cardBg: "bg-gray-800/50",
        border: "border-gray-700",
        cardHover: "hover:border-orange-500/50",
        cardShadow: "shadow-lg shadow-black/40",
        cardShadowHover: "hover:shadow-xl hover:shadow-orange-500/20",
        iconBoxShadow: "shadow-lg shadow-orange-500/40",
        skillShadow: "shadow-sm shadow-black/30",
        skillShadowHover: "hover:shadow-md hover:shadow-orange-500/30",
    };

    const colors = darkMode ? darkColors : lightColors;

    return (
        <section id="skills" className={`py-20 px-6 md:px-12 lg:px-20 ${
            darkMode ? 'bg-gray-900/60' : 'bg-white/60'
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
                                whileHover={{ scale: 1.01, y: -4 }}
                                className={`rounded-2xl border ${colors.border} ${colors.cardBg} ${colors.cardHover} ${colors.cardShadow} ${colors.cardShadowHover} p-8 md:p-10 transition-all duration-300 backdrop-blur-sm`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                                    <div className="flex items-center gap-4 md:w-1/3">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 ${colors.iconBoxShadow}`}>
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
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${colors.skillShadow} ${colors.skillShadowHover} ${
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