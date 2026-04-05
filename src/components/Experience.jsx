import { motion } from 'framer-motion';
import { profileData } from '../data';
import { Briefcase, Trophy, Calendar } from 'lucide-react';

export default function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const dotVariants = {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.4, boxShadow: "0 0 30px rgba(99, 102, 241, 1)" }
    };

    return (
        <section id="experience" className="py-24 relative">
            {/* Background animation */}
            <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-20"
                animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                initial={false}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Experience & Achievements
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="space-y-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {profileData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative flex gap-8 mb-12 md:mb-20"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="flex flex-col items-center"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="w-5 h-5 bg-primary rounded-full border-4 border-darker shadow-[0_0_15px_rgba(99,102,241,0.5)] relative z-10"
                                        variants={dotVariants}
                                        whileHover="hover"
                                    />
                                    {index < profileData.experience.length - 1 && (
                                        <motion.div
                                            className="w-1 h-16 md:h-24 bg-gradient-to-b from-primary to-secondary opacity-40"
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, duration: 0.6 }}
                                            style={{ originY: 0 }}
                                        />
                                    )}
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    className="glass p-8 group hover:border-primary/50 transition-all duration-300 flex-1 min-w-0"
                                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(99,102,241,0.2)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="flex flex-wrap justify-between items-start gap-4 mb-4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                    >
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <motion.div
                                                className="flex items-center gap-2 text-primary mb-1"
                                                whileHover={{ gap: "12px" }}
                                            >
                                                <Briefcase size={16} />
                                                <span className="text-sm font-bold uppercase tracking-wider">{exp.type}</span>
                                            </motion.div>
                                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <p className="text-lg text-muted font-medium">{exp.company}</p>
                                        </motion.div>
                                        <motion.div
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-muted whitespace-nowrap"
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                                        >
                                            <Calendar size={14} />
                                            {exp.period}
                                        </motion.div>
                                    </motion.div>
                                    <motion.p
                                        className="text-muted leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        {exp.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Hackathons Section */}
                        <motion.div
                            className="mt-24 pt-12 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <motion.h3
                                className="text-3xl font-display font-bold mb-12 text-center text-secondary"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Hackathon Achievements
                            </motion.h3>

                            <motion.div
                                className="space-y-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.15,
                                            delayChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {profileData.hackathons.map((h, index) => (
                                    <motion.div
                                        key={`h-${index}`}
                                        variants={itemVariants}
                                        className="relative flex gap-8 mb-12"
                                    >
                                        {/* Timeline dot */}
                                        <motion.div
                                            className="flex flex-col items-center"
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 bg-secondary rounded-full border-4 border-darker shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                                                variants={dotVariants}
                                                whileHover="hover"
                                            />
                                            {index < profileData.hackathons.length - 1 && (
                                                <motion.div
                                                    className="w-1 h-16 md:h-24 bg-gradient-to-b from-secondary to-primary opacity-40"
                                                    initial={{ scaleY: 0 }}
                                                    whileInView={{ scaleY: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3, duration: 0.6 }}
                                                    style={{ originY: 0 }}
                                                />
                                            )}
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                            className="glass p-8 group hover:border-secondary/50 transition-all duration-300 flex-1 min-w-0"
                                            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(236,72,153,0.2)" }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <motion.div
                                                className="flex flex-wrap justify-between items-start gap-4 mb-4"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.1, duration: 0.5 }}
                                            >
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <div className="flex items-center gap-2 text-secondary mb-1">
                                                        <Trophy size={16} />
                                                        <span className="text-sm font-bold uppercase tracking-wider">Hackathon</span>
                                                    </div>
                                                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-secondary transition-colors duration-300">
                                                        {h.name}
                                                    </h3>
                                                    <p className="text-lg text-muted font-medium">{h.event}</p>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-muted whitespace-nowrap"
                                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(236, 72, 153, 0.1)" }}
                                                >
                                                    <Calendar size={14} />
                                                    {h.year}
                                                </motion.div>
                                            </motion.div>
                                            <motion.div
                                                className="bg-white/5 p-4 rounded-lg"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.2, duration: 0.5 }}
                                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                            >
                                                <p className="text-white font-bold mb-1">Project: {h.project}</p>
                                                <p className="text-muted text-sm">
                                                    {h.description}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
