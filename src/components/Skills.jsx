import { motion } from 'framer-motion';
import { profileData } from '../data';
import { Code2, Layout, Database, Terminal } from 'lucide-react';

export default function Skills() {
    const categories = [
        {
            title: "Languages",
            items: profileData.skills.programming,
            icon: <Code2 className="text-primary" />
        },
        {
            title: "Frameworks & Library",
            items: profileData.skills.frameworks,
            icon: <Layout className="text-secondary" />
        },
        {
            title: "Data Analysis",
            items: profileData.skills.dataAnalysis,
            icon: <Database className="text-primary" />
        },
        {
            title: "Other Skills",
            items: profileData.skills.other,
            icon: <Terminal className="text-secondary" />
        }
    ];

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
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const skillItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="skills" className="py-24 bg-dark/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Technical Skills
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass p-8 hover:bg-white/[0.07] transition-colors duration-300"
                        >
                            <motion.div
                                className="flex items-center gap-4 mb-8"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className="p-3 bg-white/5 rounded-xl"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {cat.icon}
                                </motion.div>
                                <h3 className="text-2xl font-display font-bold">{cat.title}</h3>
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
                                {cat.items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        custom={i}
                                        variants={skillItemVariants}
                                        whileHover={{ scale: 1.05, translateY: -2 }}
                                        className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 group hover:border-primary/50 transition-all duration-300"
                                    >
                                        <motion.div
                                            className="w-2 h-2 bg-primary rounded-full group-hover:shadow-[0_0_8px_rgba(99,102,241,1)]"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <span className="font-medium text-muted group-hover:text-white transition-colors duration-300">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
