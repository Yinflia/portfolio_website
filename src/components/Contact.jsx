import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, User, MessageSquare, Tag } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const lightColors = {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        textMuted: "text-gray-500",
        cardBg: "bg-white/80",
        border: "border-gray-200",
        inputBg: "bg-white",
        inputBorder: "border-gray-200",
        inputFocus: "focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20",
        contactCardBg: "bg-white/70",
        contactCardBorder: "border-gray-200",
        iconBoxBg: "bg-linear-to-br from-orange-500 to-amber-500",
        socialBg: "bg-white",
        socialBorder: "border-gray-200",
        socialHover: "hover:border-orange-500 hover:text-orange-500",
        labelColor: "text-gray-700",
        placeholderColor: "placeholder-gray-400",
        tagBg: "bg-orange-50",
        tagText: "text-orange-700",
        tagBorder: "border-orange-200",
    };

    const darkColors = {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textMuted: "text-gray-400",
        cardBg: "bg-gray-800/80",
        border: "border-gray-700",
        inputBg: "bg-gray-900/50",
        inputBorder: "border-gray-700",
        inputFocus: "focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20",
        contactCardBg: "bg-gray-800/50",
        contactCardBorder: "border-gray-700",
        iconBoxBg: "bg-linear-to-br from-orange-500 to-amber-500",
        socialBg: "bg-gray-800/50",
        socialBorder: "border-gray-700",
        socialHover: "hover:border-orange-500 hover:text-orange-500",
        labelColor: "text-gray-300",
        placeholderColor: "placeholder-gray-500",
        tagBg: "bg-orange-900/20",
        tagText: "text-orange-400",
        tagBorder: "border-orange-800",
    };

    const colors = darkMode ? darkColors : lightColors;

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "contact@nabilafalia.my.id",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Surabaya, Indonesia",
        },
        {
            icon: Clock,
            title: "Availability",
            value: "Mon - Fri: 8AM - 6PM",
        }
    ];

    const socialLinks = [
        { name: "GitHub", icon: "github", url: "https://github.com/yinflia" },
        { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/nabilafalia" },
        { name: "Instagram", icon: "instagram", url: "https://instagram.com/nabilafalia" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Validasi jika .env belum diisi
        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS credentials missing. Check your .env file.");
            setSending(false);
            alert("Konfigurasi email belum lengkap. Silakan cek file .env");
            return;
        }

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            publicKey
        ).then(() => {
            // LOGIC SUCCESS (Diperbaiki)
            setSending(false);
            setSent(true);
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
            
            // Hilangkan pesan sukses setelah 3 detik
            setTimeout(() => {
                setSent(false);
            }, 3000);
        }).catch((error) => {
            // LOGIC ERROR (Diperbaiki)
            console.error("FAILED...", error.text);
            setSending(false);
            alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.");
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className={`py-20 px-6 md:px-12 lg:px-20 ${
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
                        Contact <span className="text-orange-500">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* LEFT: Let's Talk + Contact Info + Follow Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-4 text-orange-500">
                            Let's Talk
                        </h3>
                        <p className={`text-base mb-10 ${colors.textSecondary}`}>
                            Have a question or want to work together? Feel free to reach out.
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-4 mb-10">
                            {contactMethods.map((method, idx) => {
                                const Icon = method.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className={`flex items-center gap-4 p-5 rounded-xl border ${colors.contactCardBorder} ${colors.contactCardBg} backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 group shadow-lg`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${colors.iconBoxBg} flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-semibold mb-1 ${colors.textPrimary}`}>
                                                {method.title}
                                            </h4>
                                            <p className={`text-sm truncate ${colors.textMuted}`}>
                                                {method.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Follow Me */}
                        <div>
                            <h3 className="text-2xl font-bold mb-5 text-orange-500">
                                Follow Me
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className={`w-12 h-12 rounded-xl ${colors.socialBg} border ${colors.socialBorder} ${colors.socialHover} flex items-center justify-center transition-all duration-300 ${colors.textPrimary} shadow-md`}
                                        aria-label={social.name}
                                    >
                                        {social.icon === "github" && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                        )}
                                        {social.icon === "linkedin" && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                        )}
                                        {social.icon === "instagram" && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                        )}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Send Me a Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`rounded-2xl border ${colors.border} ${colors.cardBg} backdrop-blur-xl p-8 md:p-10 shadow-2xl`}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-orange-500">
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${colors.labelColor}`}>
                                    <User className="w-4 h-4" />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-3 rounded-lg border ${colors.inputBorder} ${colors.inputBg} ${colors.inputFocus} ${colors.textPrimary} ${colors.placeholderColor} transition-all duration-300 outline-none`}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${colors.labelColor}`}>
                                    <Mail className="w-4 h-4" />
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className={`w-full px-4 py-3 rounded-lg border ${colors.inputBorder} ${colors.inputBg} ${colors.inputFocus} ${colors.textPrimary} ${colors.placeholderColor} transition-all duration-300 outline-none`}
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${colors.labelColor}`}>
                                    <Tag className="w-4 h-4" />
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Project Inquiry"
                                    className={`w-full px-4 py-3 rounded-lg border ${colors.inputBorder} ${colors.inputBg} ${colors.inputFocus} ${colors.textPrimary} ${colors.placeholderColor} transition-all duration-300 outline-none`}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${colors.labelColor}`}>
                                    <MessageSquare className="w-4 h-4" />
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className={`w-full px-4 py-3 rounded-lg border ${colors.inputBorder} ${colors.inputBg} ${colors.inputFocus} ${colors.textPrimary} ${colors.placeholderColor} transition-all duration-300 outline-none resize-none`}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={sending}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 rounded-lg bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold text-base shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {sending ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : sent ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;