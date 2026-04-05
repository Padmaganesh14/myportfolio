import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { profileData } from '../data';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-darker/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
                >
                    PG
                </motion.div>

                {/* Desktop Nav */}
                <motion.ul
                    className="hidden md:flex items-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            variants={itemVariants}
                        >
                            <motion.a
                                href={link.href}
                                className="text-sm font-medium text-muted hover:text-white transition-colors duration-300 relative overflow-hidden"
                                whileHover="hover"
                                variants={{
                                    hover: {
                                        color: ["rgba(148, 163, 184, 1)", "rgba(255, 255, 255, 1)"]
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {link.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    className="hidden md:flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <motion.a
                        href={profileData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Github size={20} />
                    </motion.a>
                    <motion.a
                        href={profileData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                        href="/resume.pdf"
                        download="Padma_Ganesh_Resume.pdf"
                        className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_4px_20px_#6366f166] transition-all duration-300"
                        whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(99, 102, 241, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={15} />
                        Resume
                    </motion.a>
                </motion.div>

                {/* Mobile Toggle */}
                <motion.button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    whiles={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden bg-dark border-b border-white/10 overflow-hidden"
            >
                <motion.ul
                    className="flex flex-col p-6 gap-4"
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1
                            }
                        }
                    }}
                >
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            custom={index}
                            variants={mobileItemVariants}
                        >
                            <motion.a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-muted hover:text-white transition-colors duration-300 block"
                                whileHover={{ x: 5, color: "white" }}
                            >
                                {link.name}
                            </motion.a>
                        </motion.li>
                    ))}
                    <motion.li
                        custom={navLinks.length}
                        variants={mobileItemVariants}
                    >
                        <motion.a
                            href="/resume.pdf"
                            download="Padma_Ganesh_Resume.pdf"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-white transition-colors duration-300"
                            whileHover={{ x: 5 }}
                        >
                            <Download size={18} />
                            Download Resume
                        </motion.a>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.nav>
    );
}
