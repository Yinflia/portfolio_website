import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Search } from "lucide-react";

const Projects = ({ darkMode }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
            if (selectedProject) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, [selectedProject]);

    const projectsData = {
        ecommerce: {
            id: 'ecommerce',
            title: 'E-Commerce Platform',
            description: 'A comprehensive full-stack e-commerce solution featuring product management, shopping cart functionality, secure payment gateway integration.',
            longDescription: 'This e-commerce platform was developed to provide businesses with a complete online selling solution. The system includes features such as product catalog management with categories and filters, advanced search functionality, secure user authentication and authorization, shopping cart with wishlist, multiple payment gateway integration, real-time order tracking, inventory management, and a comprehensive admin dashboard.',
            technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Midtrans API', 'jQuery'],
            icon: 'fas fa-shopping-cart',
            gallery: [
                { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', title: 'Halaman Utama' },
                { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', title: 'Halaman Produk' },
                { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', title: 'Shopping Cart' },
                { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', title: 'Checkout' }
            ],
            liveDemo: 'https://project-sena.nabilafalia.my.id'
        },
        taskapp: {
            id: 'taskapp',
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, team collaboration features, task assignment, deadline tracking.',
            longDescription: 'This task management application helps teams organize, track, and manage their work more effectively. Key features include creating and assigning tasks to team members, setting priorities and deadlines, real-time notifications and updates, file attachments and comments, progress tracking with visual charts.',
            technologies: ['PHP', 'MySQL', 'CSS3', 'JavaScript', 'WebSocket', 'Chart.js'],
            icon: 'fas fa-tasks',
            gallery: [
                { image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', demo: '#', title: 'Dashboard' },
                { image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', demo: '#', title: 'Task Board' },
                { image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', demo: '#', title: 'Analytics' }
            ],
            liveDemo: 'https://taskapp-anda.vercel.app'
        },
        analytics: {
            id: 'analytics',
            title: 'Analytics Dashboard',
            description: 'An interactive data visualization dashboard featuring real-time analytics, customizable charts and graphs, data export functionality.',
            longDescription: 'This analytics dashboard provides businesses with powerful data visualization and reporting capabilities. The system features real-time data updates, interactive charts using D3.js and Chart.js, customizable dashboard widgets, data filtering and segmentation, automated report generation.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'D3.js', 'Chart.js', 'PHP'],
            icon: 'fas fa-chart-line',
            gallery: [
                { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', demo: '#', title: 'Dashboard Overview' },
                { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', demo: '#', title: 'Reports' },
                { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', demo: '#', title: 'Data Visualization' },
                { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', demo: '#', title: 'Settings' }
            ],
            liveDemo: 'https://analytics-anda.netlify.app'
        }
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

    const changeLightboxImage = (direction) => {
        if (!lightboxImage) return;
        const newIndex = (lightboxIndex + direction + lightboxImage.length) % lightboxImage.length;
        setLightboxIndex(newIndex);
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
                                {/* PERUBAHAN 1: Aspect Ratio 9:16 pada container gambar */}
                                <div className="overflow-hidden rounded-md mb-4">
                                    <div 
                                        className={`w-full flex items-center justify-center ${
                                            darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                                        }`}
                                        style={{ aspectRatio: '17/12' }}
                                    >
                                        {proyek.icon ? (
                                            <i className={`${proyek.icon} text-6xl text-orange-500`}></i>
                                        ) : (
                                            <img 
                                                src={proyek.gallery[0]?.image} 
                                                alt={proyek.title}
                                                loading="lazy" /* PERUBAHAN 2: Lazy loading */
                                                className="w-full h-full object-cover"
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
                            {selectedProject.icon ? (
                                <div 
                                    className="w-full bg-linear-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6"
                                    style={{ aspectRatio: '16/9', maxHeight: '400px' }}
                                >
                                    <i className={`${selectedProject.icon} text-8xl text-orange-500`}></i>
                                </div>
                            ) : selectedProject.gallery[0] && (
                                <div 
                                    className="w-full rounded-xl overflow-hidden mb-6"
                                    style={{ aspectRatio: '16/9', maxHeight: '400px' }}
                                >
                                    <img 
                                        src={selectedProject.gallery[0].image} 
                                        alt={selectedProject.title}
                                        loading="lazy" /* PERUBAHAN 4: Lazy loading */
                                        className="w-full h-full object-cover"
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
                                                loading="lazy" /* PERUBAHAN 5: Lazy loading */
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

                    <button
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
                    </button>

                    <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={lightboxImage[lightboxIndex]?.image} 
                            alt={lightboxImage[lightboxIndex]?.title}
                            loading="lazy" /* PERUBAHAN 6: Lazy loading */
                            className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </motion.div>,
                document.body
            )}
        </>
    );
};

export default Projects;