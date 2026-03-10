import { motion } from 'framer-motion';
import { profileData } from '../data';
import { ChevronRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="blob blob-1"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="blob blob-2"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-secondary font-display font-medium mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent text-glow hover-glow cursor-default inline-block">
                            {profileData.name}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="text-xl md:text-2xl text-muted mb-10 leading-relaxed"
                    >
                        Building efficient, real-world technical solutions with a focus on impact and innovation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#projects" className="btn btn-primary flex items-center gap-2 group">
                            View My Work
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Padma_Ganesh_Resume.pdf"
                            className="btn btn-outline flex items-center gap-2 group hover:border-primary"
                        >
                            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
