import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Search } from "lucide-react";
import project1_home_page from "../assets/projects/project1/home_page.png";

const Projects = ({ darkMode }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        if (selectedProject || lightboxImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject, lightboxImage]);

    const projectsData = {
        personal_finance_website: {
            id: 'personal_finance_website',
            title: 'Personal Finance Website',
            description: 'A personal finance website for tracking expenses, income, and budgeting.',
            longDescription: 'This personal finance website is designed to help users manage their finances effectively. It offers features like expense tracking, income categorization, budget creation, and detailed reporting. The website provides a user-friendly interface for monitoring financial health and making informed decisions.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            icon: project1_home_page ? null : 'fas fa-wallet',
            gallery: [
                { image: project1_home_page, title: 'Home Page' }
            ],
            liveDemo: 'https://project-sena.nabilafalia.my.id'
        },
    };

    const projectList = Object.values(projectsData);

    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        cardBg: "bg-white/80",
        border: "border-gray-200",
        tagBg: "bg-orange-50",
        tagText: "text-orange-700",
        tagBorder: "border-orange-200",
        modalBg: "bg-white",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        cardBg: "bg-gray-800/80",
        border: "border-gray-700",
        tagBg: "bg-orange-900/20",
        tagText: "text-orange-400",
        tagBorder: "border-orange-800",
        modalBg: "bg-gray-800",
    };

    const colors = darkMode ? darkColors : lightColors;

    const openLightbox = (gallery, index) => {
        setLightboxImage(gallery);
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    // const changeLightboxImage = (direction) => {
    //     if (!lightboxImage) return;
    //     const newIndex = (lightboxIndex + direction + lightboxImage.length) % lightboxImage.length;
    //     setLightboxIndex(newIndex);
    // };

    const getProjectCover = (project) => {
        return project.icon || project.gallery?.[0]?.image || null;
    };

    // Style untuk optimasi rendering gambar
    const imageStyle = {
        imageRendering: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
    };

    return (
        <>
            <section id="projects" className={`py-20 px-6 md:px-12 lg:px-20 ${
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
                            My <span className="text-orange-500">Projects</span>
                        </h2>
                    </motion.div>

                    <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {projectList.map((proyek, index) => (
                            <motion.div
                                key={proyek.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedProject(proyek)}
                                className={`p-4 rounded-md border cursor-pointer transition-all duration-300 shadow-md ${
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
                                    
                                    <p className={`text-base/loose mb-4 ${colors.textSecondary}`}>
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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODAL PROJECT - MENGGUNAKAN PORTAL */}
            {selectedProject && createPortal(
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-99999 flex items-center justify-center p-4"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border ${colors.border} ${colors.modalBg} shadow-2xl`}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-6">
                            {getProjectCover(selectedProject) && (
                                <div className="mx-auto mb-6 w-full max-w-711.75 aspect-video overflow-hidden rounded-xl border-2 border-orange-500/30 shadow-lg bg-linear-to-br from-orange-500/20 to-amber-500/20">
                                    <img
                                        src={getProjectCover(selectedProject)}
                                        alt={selectedProject.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-center"
                                        style={imageStyle}
                                    />
                                </div>
                            )}

                            <h2 className={`text-3xl font-bold mb-4 ${colors.textPrimary}`}>
                                {selectedProject.title}
                            </h2>
                            
                            <p className={`mb-6 leading-relaxed ${colors.textSecondary}`}>
                                {selectedProject.longDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className={`py-1.5 px-4 border rounded-full font-semibold text-sm ${
                                            darkMode
                                                ? 'border-orange-500/30 bg-orange-900/20 text-orange-400'
                                                : 'border-orange-300 bg-orange-50 text-orange-700'
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4 text-orange-500">Project Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {selectedProject.gallery.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => openLightbox(selectedProject.gallery, index)}
                                            className={`relative aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-sm ${
                                                darkMode 
                                                    ? 'border-gray-700 hover:border-orange-500' 
                                                    : 'border-gray-200 hover:border-orange-400'
                                            } hover:shadow-lg hover:shadow-orange-500/20 group`}
                                        >
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                style={{
                                                    ...imageStyle,
                                                    willChange: 'transform',
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                                                <Search className="w-8 h-8 text-white" />
                                                <span className="text-white text-sm font-semibold text-center px-2">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                <a 
                                    href={selectedProject.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-linear-to-r from-orange-500 to-amber-500 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                                >
                                    <ExternalLink className="w-5 h-5" /> View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>,
                document.body
            )}

            {/* LIGHTBOX - MENGGUNAKAN PORTAL */}
            {lightboxImage && createPortal(
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-99999 flex items-center justify-center p-4"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)' }}
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* <button
                        onClick={(e) => { e.stopPropagation(); changeLightboxImage(-1); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        ←
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); changeLightboxImage(1); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        →
                    </button> */}

                    <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={lightboxImage[lightboxIndex]?.image} 
                            alt={lightboxImage[lightboxIndex]?.title}
                            loading="lazy"
                            className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            style={{
                                ...imageStyle,
                                filter: 'blur(0.3px)',
                            }}
                        />
                    </div>
                </motion.div>,
                document.body
            )}
        </>
    );
};

export default Projects;