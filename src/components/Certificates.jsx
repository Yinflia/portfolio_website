import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Award, Eye, X, ExternalLink } from "lucide-react";

import certificate_1 from "../assets/certificates/certificate_1.jpg";
import certificate_2 from "../assets/certificates/certificate_2.jpg";
import certificate_3 from "../assets/certificates/certificate_3.jpg";
import certificate_4 from "../assets/certificates/certificate_4.jpg";
import certificate_5 from "../assets/certificates/certificate_5.jpg";
import certificate_6 from "../assets/certificates/certificate_6.jpg";
import certificate_7 from "../assets/certificates/certificate_7.jpg";

const certificatesData = [
    {
        id: 1,
        title: "AI Productivity and AI API Integration for Developers — Maju Bareng AI Program",
        issuer: "Hacktiv8 Indonesia (in collaboration with AVPN, supported by Google.org & ADB)",
        year: "July 2026",
        image: certificate_6,
        link: "https://students.hacktiv8.com/certificates/5f5a9949-f171-4e03-8e1b-827cc87fd70b",
        tools: ["Gemini", "Chatbot", "Gemini API", "Prompt Engineering", "REST API"],
        description: "Completed 10 learning hours of the Maju Bareng AI program (part of the AI Opportunity Fund: Asia-Pacific) and successfully developed a final project on AI productivity and AI API integration. Certificate ID: 08448/H8/CSR/MBA2/VII/2026"
    },
    {
        id: 2,
        title: "1st Integrated Speaking Program",
        issuer: "Kampung Inggris Language Center",
        year: "August 2026",
        image: certificate_7,
        link: "https://drive.google.com/file/d/1gWLvCIp5hU2SKI5oCqaXzYcZP-9ZjUJs/view?usp=sharing.org/certification/fcc123/javascript-algorithms",
        tools: ["English Speaking", "Communication", "Public Speaking"],
        description: "Completed a one-month intensive English speaking program with an average score of 81 (Satisfactory). Certificate No. 00592/UNIT/ISP/VIII/2026"
    },
    {
        id: 3,
        title: "Fullstack Study Jam 2026: “From Interface to Infrastructure”",
        issuer: "Google Developer Groups On Campus – Institut STTS, Universitas Airlangga & Universitas Trunojoyo Madura",
        year: "April 2026",
        image: certificate_4,
        link: "https://drive.google.com/file/d/16Ju7Kxew99KGE_MUA835vjEQwCEeOy9D/view?usp=sharing",
        tools: ["HTML", "CSS", "JavaScript"],
        description: "Participant in an on-campus fullstack study jam covering topics from frontend interface to infrastructure, held at Universitas Airlangga, Surabaya."
    },
    {
        id: 4,
        title: "Artificial Intelligence Trial Class",
        issuer: "Haltev IT Learning Center",
        year: "February 2026",
        image: certificate_3,
        link: "https://drive.google.com/file/d/112j0nzM8tw2aAd54eknzJ2uH8A5e7Eut/view?usp=sharing.org/account/accomplishments/verify/ABC123",
        tools: ["Tailwind CSS", "AI Assistant Tools", "Github Pages"],
        description: "LearHands-on experience in building a portfolio website using Tailwind CSS and AI Assistant tools, covering project setup, development, and deployment to GitHub Pages.ned the fundamentals of data analysis and machine learning, including exploratory data analysis (EDA), model development, insight generation, and decision-making processes within modern AI systems.Advanced React patterns, hooks, and state management for production applications."
    },
    {
        id: 5,
        title: "Artificial Intelligence Trial Class",
        issuer: "Haltev IT Learning Center",
        year: "February 2026",
        image: certificate_1,
        link: "https://drive.google.com/file/d/1d4bXqXSLnlgLMVNjMRy2wD2mtmjbX5ed/view?usp=sharing.org/account/accomplishments/verify/XYZ789",
        tools: ["Python", "Google Colab"],
        description: "User-Learned the fundamentals of data analysis and machine learning, including exploratory data analysis (EDA), model development, insight generation, and decision-making processes within modern AI systems. design principles, wireframing, and prototyping with Figma."
    },
    {
        id: 6,
        title: "Cyber Security Trial Class",
        issuer: "Haltev IT Learning Center",
        year: "February 2026",
        image: certificate_2,
        link: "https://drive.google.com/file/d/1oCewt9uI5PNV2WeB5RnCEDFrejYfyUpM/view?usp=sharing",
        tools: ["Burp Suite", "SQLMap", "Nmap", "OWASP ZAP", "Kali Linux"],
        description: "Learned the fundamentals of penetration testing, including vulnerability identification, IDOR and SQL Injection exploitation, code analysis, mitigation strategies, and ethical considerations in cybersecurity."
    },
    {
        id: 7,
        title: "Build with AI Tech Talk: Empowering Developers: “Navigating the New Era of AI Production”",
        issuer: "Google Developer Groups On Campus – Institut Teknologi Sepuluh Nopember (GDGoC ITS)",
        year: "May 2026",
        image: certificate_5,
        link: "https://drive.google.com/file/d/15fNmlmI-kyEhRRZuUg5CDukcea2X5qii/view?usp=sharing",
        tools: ["AI Production"],
        description: "Participant in an on-campus fullstack study jam covering topics from frontend interface to infrastructure, held at Universitas Airlangga, Surabaya."
    },
];

const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
};

const Certificates = ({ darkMode }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
    const [selectedCert, setSelectedCert] = useState(null);

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
        tagBg: "bg-orange-50",
        tagText: "text-orange-700",
        tagBorder: "border-orange-200",
        modalBg: "bg-white",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        cardBg: "bg-gray-800/50",
        border: "border-gray-700",
        tagBg: "bg-orange-900/20",
        tagText: "text-orange-400",
        tagBorder: "border-orange-800",
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

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

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
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${colors.textPrimary}`}>
                        My <span className="text-orange-500">Certificates</span>
                    </h2>
                </motion.div>

                <div className="relative px-10 sm:px-12 md:px-16">
                    <div className="overflow-hidden rounded-2xl relative">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${safeActiveIndex * 100}%)` }}
                        >
                            {slides.map((slide, slideIndex) => (
                                <div key={slideIndex} className="w-full shrink-0">
                                    
                                    <div className="proyek-box mt-0 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                                        {slide.map((cert, index) => (
                                            <motion.div
                                                key={cert.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                whileHover={{ y: -8 }}
                                                onClick={() => setSelectedCert(cert)}
                                                className={`group p-4 rounded-md border overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full ${
                                                    darkMode 
                                                        ? 'bg-gray-800/80 border-gray-700 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20' 
                                                        : 'bg-white border-gray-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/50'
                                                }`}
                                            >
                                                {/* Container Gambar dengan Shadow */}
                                                <div className="overflow-hidden rounded-md mb-4 relative shadow-md group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all duration-300">
                                                    <div 
                                                        className={`w-full flex items-center justify-center ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                                                        style={{ aspectRatio: '17/12' }}
                                                    >
                                                        <img 
                                                            src={cert.image} 
                                                            alt={cert.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                    
                                                    <button
                                                        onClick={() => setSelectedCert(cert)}
                                                        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 cursor-pointer"
                                                    >
                                                        <span className="text-white font-semibold text-sm drop-shadow-md flex items-center gap-1 pointer-events-none">
                                                            <Eye className="w-4 h-4" />
                                                            View Certificate
                                                        </span>
                                                    </button>
                                                </div>
                                                
                                                {/* Konten Kartu */}
                                                <div className="flex flex-col flex-1">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/40">
                                                            <Award className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h1 className={`text-xl font-bold my-0 ${colors.textPrimary} line-clamp-2`}>
                                                                {cert.title}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    
                                                    <p className={`text-sm mb-4 ${colors.textSecondary}`}>
                                                        {cert.issuer} • {cert.year}
                                                    </p>
                                                    
                                                    <div className="flex flex-wrap gap-2 mt-auto">
                                                        {cert.tools.slice(0, 4).map((tool, idx) => (
                                                            <span
                                                                key={idx}
                                                                className={`py-1 px-3 border rounded-md font-semibold text-xs sm:text-sm ${
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
                            ))}
                        </div>
                    </div>

                    {/* Tombol Navigasi Carousel */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        className={`absolute -left-2 sm:-left-4 md:left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${colors.cardBg} border ${colors.border} shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10`}
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className={`absolute -right-2 sm:-right-4 md:right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ${colors.cardBg} border ${colors.border} shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10`}
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className={`text-center mt-6 text-sm ${colors.textSecondary}`}>
                        <span className="font-semibold text-orange-500">{safeActiveIndex + 1}</span>
                        <span> / {totalSlides}</span>
                    </div>
                </div>
            </div>

            {/* MODAL FULL SCREEN */}
            {typeof window !== 'undefined' && createPortal(
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-5 sm:p-8"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl"
                        >
                           <button
                                onClick={() => setSelectedCert(null)}
                                aria-label="Tutup"
                                className={`absolute -top-[10px] -right-[10px] sm:-top-[20px] sm:-right-[20px] z-20 size-9 sm:size-10 rounded-full flex items-center justify-center p-0 transition-colors cursor-pointer shadow-lg border ${
                                    darkMode
                                        ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900 border-gray-300'
                                }`}
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                            <div
                                className={`max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl border ${colors.border} ${colors.modalBg} shadow-2xl`}
                            >
                                <div className="p-4 sm:p-6">
                                    <div className="mx-auto mb-6 w-full max-w-[80%] aspect-[17/12] overflow-hidden rounded-xl border-2 border-orange-500/30 shadow-lg bg-linear-to-br from-orange-500/20 to-amber-500/20">
                                        <img 
                                            src={selectedCert.image} 
                                            alt={selectedCert.title}
                                            loading="lazy"
                                            className="w-full h-full object-contain"
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
                                            className="w-full sm:w-auto bg-linear-to-r from-orange-500 to-amber-500 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] inline-flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <ExternalLink className="w-5 h-5" /> View Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )}
        </section>
    );
};

export default Certificates;
