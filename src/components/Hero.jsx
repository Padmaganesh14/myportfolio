import { motion, useScroll, useTransform } from 'framer-motion';
import { profileData } from '../data';
import { ChevronRight, Download } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="blob blob-1"
                style={{ y }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="blob blob-2"
                style={{ y: useTransform(scrollY, [0, 300], [0, -150]) }}
            />

            {/* Animated Grid Background */}
            <motion.div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-secondary font-display font-medium mb-4 text-lg tracking-widest uppercase"
                    >
                        Welcome to my portfolio
                    </motion.p>

                    <motion.div
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight overflow-hidden"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent text-glow hover-glow"
                        >
                            {profileData.name.split('').map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative mb-10"
                    >
                        <motion.div
                            className="absolute -inset-1 from-primary/20 to-secondary/20 rounded-lg blur opacity-0"
                            animate={{
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                        />
                        <p className="text-xl md:text-2xl text-muted leading-relaxed relative">
                            Building efficient, real-world technical solutions with a focus on impact and innovation.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#projects"
                            className="btn btn-primary flex items-center gap-2 group relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform -skew-x-12"
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 0.5,
                                }}
                            />
                            <span className="relative flex items-center gap-2">
                                View My Work
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ChevronRight size={20} />
                                </motion.span>
                            </span>
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download="Padma_Ganesh_Resume.pdf"
                            className="btn btn-outline flex items-center gap-2 group relative overflow-hidden"
                            whileHover={{ scale: 1.05, borderColor: 'rgb(99, 102, 241)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 bg-white/5"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                            <span className="relative flex items-center gap-2">
                                <motion.span
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Download size={18} />
                                </motion.span>
                                Download Resume
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
            >
                <motion.div
                    className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center p-1 cursor-pointer"
                    whileHover={{ borderColor: 'rgb(99, 102, 241)' }}
                >
                    <motion.div
                        className="w-1 h-2 bg-gradient-to-b from-primary to-secondary rounded-full"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
