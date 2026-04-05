import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { profileData } from '../data';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, XCircle, Loader } from 'lucide-react';

// ─── EmailJS Config ──────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    Template variables used: {{from_name}}, {{from_email}}, {{message}}, {{to_name}}
// 4. Go to Account → API Keys → copy your Public Key
// Update these values in your .env file in the project root:
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const formFieldVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;

        setStatus('loading');
        setErrorMsg('');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
            // Reset to idle after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setErrorMsg(err?.text || 'Something went wrong. Please try again.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* ── Left: Contact Info ─────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="glass p-10 flex flex-col justify-between"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h3 className="text-3xl font-display font-bold mb-6">Let's Connect</h3>
                            <p className="text-muted text-lg mb-10">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <motion.div
                                className="space-y-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <motion.div
                                        className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mail size={24} />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-1">Email</h4>
                                        <a href={`mailto:${profileData.email}`} className="text-lg font-medium text-white hover:text-primary transition-colors duration-300">
                                            {profileData.email}
                                        </a>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <motion.div
                                        className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Phone size={24} />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-1">Phone</h4>
                                        <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="text-lg font-medium text-white hover:text-secondary transition-colors duration-300">
                                            {profileData.phone}
                                        </a>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <motion.div
                                        className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MapPin size={24} />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-1">Location</h4>
                                        <span className="text-lg font-medium text-white">
                                            {profileData.location}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="mt-12 pt-8 border-t border-white/10 flex gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.a
                                href={profileData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                href={profileData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={24} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Contact Form ────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="glass p-10 relative"
                    >
                        {/* Toast Notification */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: -16, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -16, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute top-6 left-6 right-6 flex items-center gap-3 bg-green-500/20 border border-green-500/40 text-green-400 rounded-xl px-5 py-4 z-10"
                                >
                                    <CheckCircle size={20} className="shrink-0" />
                                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: -16, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -16, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute top-6 left-6 right-6 flex items-center gap-3 bg-red-500/20 border border-red-500/40 text-red-400 rounded-xl px-5 py-4 z-10"
                                >
                                    <XCircle size={20} className="shrink-0" />
                                    <span className="font-medium">{errorMsg || 'Failed to send. Please try again.'}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.form
                            ref={formRef}
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                }
                            }}
                        >
                            <motion.div
                                className="space-y-2"
                                custom={0}
                                variants={formFieldVariants}
                            >
                                <label className="text-sm font-bold text-muted uppercase tracking-widest">Name</label>
                                <motion.input
                                    type="text"
                                    name="from_name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-white/30"
                                    placeholder="Your Name"
                                    required
                                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>
                            <motion.div
                                className="space-y-2"
                                custom={1}
                                variants={formFieldVariants}
                            >
                                <label className="text-sm font-bold text-muted uppercase tracking-widest">Email</label>
                                <motion.input
                                    type="email"
                                    name="from_email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-white/30"
                                    placeholder="your@email.com"
                                    required
                                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>
                            <motion.div
                                className="space-y-2"
                                custom={2}
                                variants={formFieldVariants}
                            >
                                <label className="text-sm font-bold text-muted uppercase tracking-widest">Message</label>
                                <motion.textarea
                                    rows="5"
                                    name="message"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none placeholder-white/30"
                                    placeholder="How can I help you?"
                                    required
                                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>

                            {/* Hidden field — sends your name to the EmailJS template */}
                            <input type="hidden" name="to_name" value={profileData.name} />

                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full btn btn-primary flex items-center justify-center gap-3 py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader size={20} className="animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>

                <motion.footer
                    className="mt-24 text-center text-muted text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    &copy; 2026 {profileData.name}. All rights reserved.
                </motion.footer>
            </div>
        </section>
    );
}

                                <div className="flex items-center gap-6 group">
                                    <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-1">Location</h4>
                                        <span className="text-lg font-medium text-white">
                                            {profileData.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
                            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* ── Right: Contact Form ────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 relative"
                    >
                        {/* Toast Notification */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: -16, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -16, scale: 0.95 }}
                                    className="absolute top-6 left-6 right-6 flex items-center gap-3 bg-green-500/20 border border-green-500/40 text-green-400 rounded-xl px-5 py-4 z-10"
                                >
                                    <CheckCircle size={20} className="shrink-0" />
                                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: -16, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -16, scale: 0.95 }}
                                    className="absolute top-6 left-6 right-6 flex items-center gap-3 bg-red-500/20 border border-red-500/40 text-red-400 rounded-xl px-5 py-4 z-10"
                                >
                                    <XCircle size={20} className="shrink-0" />
                                    <span className="font-medium">{errorMsg || 'Failed to send. Please try again.'}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-white/30"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-white/30"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted uppercase tracking-widest">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none placeholder-white/30"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>

                            {/* Hidden field — sends your name to the EmailJS template */}
                            <input type="hidden" name="to_name" value={profileData.name} />

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full btn btn-primary flex items-center justify-center gap-3 py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader size={20} className="animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <footer className="mt-24 text-center text-muted text-sm">
                    &copy; 2026 {profileData.name}. All rights reserved.
                </footer>
            </div>
        </section>
    );
}
