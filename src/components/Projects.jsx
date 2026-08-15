import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1_home_page from "../assets/projects/project1/home_page.png";

const Projects = ({ darkMode }) => {
    const projectsData = {
        personal_finance_website: {
            id: 'personal_finance_website',
            title: 'Personal Finance Website',
            description: 'A personal finance website for tracking expenses, income, and budgeting.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            icon: project1_home_page ? null : 'fas fa-wallet',
            gallery: [
                { image: project1_home_page, title: 'Home Page' }
            ],
            liveDemo: '/sena/',
        },
    };

    const projectList = Object.values(projectsData);

    const colors = darkMode
        ? {
            textPrimary: "text-white",
            textSecondary: "text-gray-300",
            cardBg: "bg-gray-800/80",
            border: "border-gray-700",
            tagBg: "bg-orange-900/20",
            tagText: "text-orange-400",
            tagBorder: "border-orange-800",
            modalBg: "bg-gray-800",
        }
        : {
            textPrimary: "text-gray-900",
            textSecondary: "text-gray-600",
            cardBg: "bg-white/80",
            border: "border-gray-200",
            tagBg: "bg-orange-50",
            tagText: "text-orange-700",
            tagBorder: "border-orange-200",
            modalBg: "bg-white",
        };

    const imageStyle = {
        imageRendering: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
    };

    return (
        <section
            id="projects"
            className={`py-20 px-6 md:px-12 lg:px-20 ${
                darkMode ? 'bg-gray-800/40' : 'bg-orange-50/40'
            }`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${colors.textPrimary}`}>
                        My <span className="text-orange-500">Projects</span>
                    </h2>
                </motion.div>

                <div className="mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {projectList.map((proyek, index) => (
                        <motion.div
                            key={proyek.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`p-4 rounded-md border shadow-md ${
                                darkMode
                                    ? 'bg-gray-800/80 border-gray-700 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20'
                                    : 'bg-white border-gray-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/50'
                            }`}
                        >
                            <div className="overflow-hidden rounded-md mb-4">
                                <div
                                    className={`w-full flex items-center justify-center ${
                                        darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                                    }`}
                                    style={{ aspectRatio: '16/9' }}
                                >
                                    {proyek.icon ? (
                                        <i className={`${proyek.icon} text-6xl text-orange-500`}></i>
                                    ) : (
                                        <img
                                            src={proyek.gallery[0]?.image}
                                            alt={proyek.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                            style={imageStyle}
                                        />
                                    )}
                                </div>
                            </div>

                            <div>
                                <h1 className={`text-2xl font-bold my-4 ${colors.textPrimary} hover:text-orange-500 transition-colors`}>
                                    {proyek.title}
                                </h1>

                                <p className={`text-base leading-loose mb-4 ${colors.textSecondary}`}>
                                    {proyek.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proyek.technologies.slice(0, 4).map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className={`py-1 px-3 border rounded-md font-semibold text-sm ${
                                                darkMode
                                                    ? 'border-orange-500/30 bg-orange-900/20 text-orange-400'
                                                    : 'border-orange-300 bg-orange-50 text-orange-700'
                                            }`}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                    <a
                                        href={proyek.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto bg-linear-to-r from-orange-500 to-amber-500 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="w-5 h-5" /> View Project
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;