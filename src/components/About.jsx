import { motion } from 'framer-motion';
import { profileData } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const languageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="glass p-8 md:p-10"
                    >
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <BookOpen className="text-secondary" />
                            <h3 className="text-2xl font-display font-bold">My Story</h3>
                        </motion.div>
                        <motion.p
                            className="text-muted leading-relaxed text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            {profileData.summary}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="glass p-8"
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GraduationCap className="text-primary" />
                                <h3 className="text-2xl font-display font-bold">Education</h3>
                            </motion.div>
                            <motion.div
                                className="space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.1 }
                                    }
                                }}
                            >
                                {profileData.education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                transition: { duration: 0.5 }
                                            }
                                        }}
                                        className="space-y-2 border-l-2 border-primary/20 pl-6 relative hover:border-primary/50 transition-colors duration-300"
                                    >
                                        <motion.div
                                            className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-2"
                                            whileHover={{ scale: 1.5, boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)" }}
                                        />
                                        <motion.div
                                            className="flex flex-wrap justify-between items-center gap-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                            <motion.span
                                                className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {edu.period}
                                            </motion.span>
                                        </motion.div>
                                        <p className="text-muted">{edu.institution}, {edu.location}</p>
                                        <p className="text-primary font-medium">CGPA: {edu.cgpa}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="glass p-8"
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Award className="text-secondary" />
                                <h3 className="text-2xl font-display font-bold">Languages</h3>
                            </motion.div>
                            <motion.div
                                className="flex flex-wrap gap-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.05 }
                                    }
                                }}
                            >
                                {profileData.languages.map((lang, index) => (
                                    <motion.span
                                        key={index}
                                        custom={index}
                                        variants={languageVariants}
                                        whileHover={{ scale: 1.1, translateY: -3 }}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:border-secondary transition-colors duration-300 cursor-default"
                                    >
                                        {lang}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
