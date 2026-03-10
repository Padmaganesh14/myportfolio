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

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-darker/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
                >
                    PG
                </motion.div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-muted hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Padma_Ganesh_Resume.pdf"
                        className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_4px_20px_#6366f166] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <Download size={15} />
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-dark border-b border-white/10 overflow-hidden"
                >
                    <ul className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-muted hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/resume.pdf"
                                download="Padma_Ganesh_Resume.pdf"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-white transition-colors"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
