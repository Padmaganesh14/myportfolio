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

    return (
        <section id="skills" className="py-24 bg-dark/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 hover:bg-white/[0.07] transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {cat.items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3 group hover:border-primary/50 transition-all"
                                    >
                                        <div className="w-2 h-2 bg-primary rounded-full group-hover:shadow-[0_0_8px_rgba(99,102,241,1)]" />
                                        <span className="font-medium text-muted group-hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
