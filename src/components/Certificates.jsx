import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Award, Eye, X, ExternalLink } from "lucide-react";

import certificate_1 from "../assets/certificate/sertificate_1.jpg";

const certificatesData = [
    {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Dicoding Indonesia",
        year: "2024",
        image: certificate_1,
        link: "https://www.dicoding.com/certificates/0LZ0E6X91X6Y",
        tools: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        description: "Comprehensive full-stack development course covering frontend, backend, and database management."
    },
    {
        id: 2,
        title: "JavaScript Algorithms",
        issuer: "freeCodeCamp",
        year: "2023",
        image: "cert2.jpg",
        link: "https://www.freecodecamp.org/certification/fcc123/javascript-algorithms",
        tools: ["JavaScript", "Algorithms", "Data Structures"],
        description: "Mastered data structures and algorithms through 300+ hours of coding challenges."
    },
    {
        id: 3,
        title: "React Developer Certification",
        issuer: "Meta (Coursera)",
        year: "2023",
        image: "cert3.jpg",
        link: "https://www.coursera.org/account/accomplishments/verify/ABC123",
        tools: ["React", "Hooks", "Redux", "JavaScript"],
        description: "Advanced React patterns, hooks, and state management for production applications."
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        issuer: "Google",
        year: "2022",
        image: "cert4.jpg",
        link: "https://www.coursera.org/account/accomplishments/verify/XYZ789",
        tools: ["Figma", "Design System", "Prototyping"],
        description: "User-centered design principles, wireframing, and prototyping with Figma."
    },
];

// Breakpoint disesuaikan: <640px (1 kolom), 640-1023px (2 kolom), >=1024px (3 kolom)
const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
};

const CertificateCard = ({ cert, colors, onView }) => {
    const [imgError, setImgError] = useState(false);

    return (
        // Tambahkan class "group" agar hover effect berfungsi di desktop
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className={`group rounded-xl border ${colors.border} ${colors.cardBg} ${colors.cardShadow} ${colors.cardShadowHover} transition-all duration-300 overflow-hidden flex flex-col h-full`}
        >
            <div className="relative w-full" style={{ aspectRatio: '17/12' }}>
                {!imgError ? (
                    <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-contain bg-linear-to-br from-orange-500/20 to-amber-500/20"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-orange-500/20 to-amber-500/20">
                        <Award className="w-16 h-16 text-orange-500 drop-shadow-lg" />
                    </div>
                )}
                
                <button
                    onClick={() => onView(cert)}
                    className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 cursor-pointer shadow-inner w-full h-full"
                >
                    <span className="drop-shadow-md flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                    </span>
                </button>
            </div>


            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 ${colors.iconBoxShadow}`}>
                        <Award className="w-5 h-5 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-base sm:text-lg leading-tight ${colors.textPrimary} line-clamp-2 drop-shadow-sm`}>
                            {cert.title}
                        </h3>
                    </div>
                </div>

                <p className={`text-xs sm:text-sm mb-3 ${colors.textSecondary}`}>
                    {cert.issuer} • {cert.year}
                </p>

                <p className={`text-xs mb-4 ${colors.textSecondary} flex-1 line-clamp-3`}>
                    {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cert.tools.map((tool, idx) => (
                        <span
                            key={idx}
                            className={`text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full border ${colors.tagBg} ${colors.tagText} ${colors.tagBorder} ${colors.tagShadow} font-medium transition-shadow duration-300`}
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Certificates = ({ darkMode }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
    const [selectedCert, setSelectedCert] = useState(null);

    // Mencegah scroll pada body saat modal terbuka
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        cardBg: "bg-white",
        border: "border-gray-200",
        cardShadow: "shadow-xl shadow-gray-200/60",
        cardShadowHover: "hover:shadow-2xl hover:shadow-orange-500/30",
        iconBoxShadow: "shadow-lg shadow-orange-500/40",
        tagBg: "bg-orange-50",
        tagText: "text-orange-700",
        tagBorder: "border-orange-200",
        tagShadow: "shadow-sm shadow-orange-200/50",
        navShadow: "shadow-lg shadow-gray-300/50",
        navShadowHover: "hover:shadow-xl hover:shadow-orange-500/40",
        modalBg: "bg-white",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        cardBg: "bg-gray-800/50",
        border: "border-gray-700",
        cardShadow: "shadow-xl shadow-black/60",
        cardShadowHover: "hover:shadow-2xl hover:shadow-orange-500/30",
        iconBoxShadow: "shadow-lg shadow-orange-500/40",
        tagBg: "bg-orange-900/20",
        tagText: "text-orange-400",
        tagBorder: "border-orange-800",
        tagShadow: "shadow-sm shadow-black/40",
        navShadow: "shadow-lg shadow-black/60",
        navShadowHover: "hover:shadow-xl hover:shadow-orange-500/40",
        modalBg: "bg-gray-800",
    };

    const colors = darkMode ? darkColors : lightColors;

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.max(1, Math.ceil(certificatesData.length / itemsPerSlide));
    const safeActiveIndex = Math.min(activeIndex, totalSlides - 1);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const slides = [];
    for (let i = 0; i < certificatesData.length; i += itemsPerSlide) {
        slides.push(certificatesData.slice(i, i + itemsPerSlide));
    }

    return (
        <section id="certificates" className={`py-20 px-4 sm:px-6 md:px-12 lg:px-20 ${darkMode ? 'bg-gray-900/60' : 'bg-white/60'}`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${colors.textPrimary} drop-shadow-sm`}>
                        My <span className="text-orange-500 drop-shadow-md">Certificates</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${colors.textSecondary}`}>
                        Professional certifications and achievements I&apos;ve earned
                    </p>
                </motion.div>

                <div className="relative px-10 sm:px-12 md:px-16">
                    <div className="overflow-hidden rounded-2xl relative">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${safeActiveIndex * 100}%)` }}
                        >
                            {slides.map((slide, slideIndex) => (
                                <div 
                                    key={slideIndex}
                                    className="w-full shrink-0"
                                >
                                    <div className={`grid gap-4 sm:gap-6 w-full ${itemsPerSlide === 1 ? 'grid-cols-1' : itemsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                        {slide.map((cert) => (
                                            <CertificateCard 
                                                key={cert.id} 
                                                cert={cert} 
                                                colors={colors} 
                                                onView={setSelectedCert}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tombol Previous - Posisi disesuaikan */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        className={`absolute -left-2 sm:-left-4 md:left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${colors.cardBg} border ${colors.border} ${colors.navShadow} ${colors.navShadowHover} flex items-center justify-center transition-all duration-300 hover:scale-110 z-10`}
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Tombol Next - Posisi disesuaikan */}
                    <button
                        type="button"
                        onClick={nextSlide}
                        className={`absolute -right-2 sm:-right-4 md:right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${colors.cardBg} border ${colors.border} ${colors.navShadow} ${colors.navShadowHover} flex items-center justify-center transition-all duration-300 hover:scale-110 z-10`}
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className={`text-center mt-6 text-sm ${colors.textSecondary} drop-shadow-sm`}>
                        <span className="font-semibold text-orange-500">{safeActiveIndex + 1}</span>
                        <span> / {totalSlides}</span>
                    </div>
                </div>
            </div>

            {/* MODAL FULL SCREEN */}
            {typeof window !== 'undefined' && selectedCert && createPortal(
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-99999 flex items-center justify-center p-2 sm:p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl border ${colors.border} ${colors.modalBg} shadow-2xl`}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                                    darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                                }`}
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                            <div className="p-4 sm:p-6">
                                <div 
                                    className="w-full rounded-xl overflow-hidden mb-6"
                                    style={{ aspectRatio: '16/9', maxHeight: '400px' }}
                                >
                                    <img 
                                        src={selectedCert.image} 
                                        alt={selectedCert.title}
                                        loading="lazy"
                                        className="w-full h-full object-contain bg-black"
                                    />
                                </div>

                                <h2 className={`text-xl sm:text-3xl font-bold mb-4 ${colors.textPrimary}`}>
                                    {selectedCert.title}
                                </h2>
                                
                                <p className={`mb-6 leading-relaxed text-sm sm:text-base ${colors.textSecondary}`}>
                                    {selectedCert.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedCert.tools.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={`py-1.5 px-3 sm:px-4 border rounded-full font-semibold text-xs sm:text-sm ${
                                                darkMode
                                                    ? 'border-orange-500/30 bg-orange-900/20 text-orange-400'
                                                    : 'border-orange-300 bg-orange-50 text-orange-700'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                    <a 
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto bg-linear-to-r from-orange-500 to-amber-500 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="w-5 h-5" /> View Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Certificates;