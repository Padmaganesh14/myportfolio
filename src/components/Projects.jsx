import { motion } from "framer-motion";
import { profileData } from "../data";
import { Github, ExternalLink } from "lucide-react";

const projectImages = {
    "Patient Health Record Management System": "/assets/patient.png",
    "Smart Waste Management System": "/assets/waste.png",
    "Plant Care AI — Intelligent Plant Health Assistant": "/assets/plant.png"
};

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-3xl font-bold mb-12 text-center"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {profileData.projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-500 bg-[#0f172a]"
                        >

                            {/* Project Image */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={projectImages[project.title]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 border border-white/10 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-4">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition px-3 py-2 rounded-lg hover:bg-white/5"
                                    >
                                        <Github size={18} />
                                        <span>Code</span>
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition px-3 py-2 rounded-lg hover:bg-white/5"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Demo</span>
                                        </a>
                                    )}

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}