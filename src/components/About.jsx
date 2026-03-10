import { motion } from 'framer-motion';
import { profileData } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass p-8 md:p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="text-secondary" />
                            <h3 className="text-2xl font-display font-bold">My Story</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-lg">
                            {profileData.summary}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="text-primary" />
                                <h3 className="text-2xl font-display font-bold">Education</h3>
                            </div>
                            {profileData.education.map((edu, index) => (
                                <div key={index} className="space-y-2 border-l-2 border-primary/20 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-2" />
                                    <div className="flex flex-wrap justify-between items-center gap-2">
                                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                        <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-muted">{edu.institution}, {edu.location}</p>
                                    <p className="text-primary font-medium">CGPA: {edu.cgpa}</p>
                                </div>
                            ))}
                        </div>

                        <div className="glass p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="text-secondary" />
                                <h3 className="text-2xl font-display font-bold">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {profileData.languages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:border-secondary transition-colors"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
