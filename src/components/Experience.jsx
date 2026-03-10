import { motion } from 'framer-motion';
import { profileData } from '../data';
import { Briefcase, Trophy, Calendar } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Experience & Achievements
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {profileData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12 pb-12 border-l-2 border-white/10 last:pb-0"
                            >
                                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-darker shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

                                <div className="glass p-8 group hover:border-primary/30 transition-all">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-primary mb-1">
                                                <Briefcase size={16} />
                                                <span className="text-sm font-bold uppercase tracking-wider">{exp.type}</span>
                                            </div>
                                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-lg text-muted font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-muted">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>
                                    <p className="text-muted leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {profileData.hackathons.map((h, index) => (
                            <motion.div
                                key={`h-${index}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative pl-12 border-l-2 border-white/10"
                            >
                                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-secondary rounded-full border-4 border-darker shadow-[0_0_15px_rgba(236,72,153,0.5)]" />

                                <div className="glass p-8 group hover:border-secondary/30 transition-all">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-secondary mb-1">
                                                <Trophy size={16} />
                                                <span className="text-sm font-bold uppercase tracking-wider">Hackathon</span>
                                            </div>
                                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-secondary transition-colors">
                                                {h.name}
                                            </h3>
                                            <p className="text-lg text-muted font-medium">{h.event}</p>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-muted">
                                            <Calendar size={14} />
                                            {h.year}
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg">
                                        <p className="text-white font-bold mb-1">Project: {h.project}</p>
                                        <p className="text-muted text-sm">
                                            {h.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
