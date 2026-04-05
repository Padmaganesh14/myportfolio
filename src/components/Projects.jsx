import { motion } from "framer-motion";
import { profileData } from "../data";
import { Github, ExternalLink } from "lucide-react";

const projectImages = {
    "Patient Health Record Management System": "/assets/patient.png",
    "Smart Waste Management System": "/assets/waste.png",
    "Plant Care AI — Intelligent Plant Health Assistant": "/assets/plant.png"
};

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { profileData } from "../data";
import { Github, ExternalLink } from "lucide-react";

const projectImages = {
    "Patient Health Record Management System": "/assets/patient.png",
    "Smart Waste Management System": "/assets/waste.png",
    "Plant Care AI — Intelligent Plant Health Assistant": "/assets/plant.png"
};

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const techTagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.3
            }
        })
    };

    return (
        <section id="projects" className="py-24 relative">
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-5 pointer-events-none"
                animate={{
                    background: [
                        "radial-gradient(600px at 0% 0%, rgba(99, 102, 241, 0.1) 1%, transparent 80%)",
                        "radial-gradient(600px at 100% 100%, rgba(236, 72, 153, 0.1) 1%, transparent 80%)"
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title text-3xl font-bold mb-16 text-center"
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {profileData.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            variants={cardVariants}
                            techTagVariants={techTagVariants}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, variants, techTagVariants }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const backgroundImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`;

    return (
        <motion.div
            variants={variants}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 bg-[#0f172a]"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Hover glow effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage }}
            />

            {/* Project Image */}
            <motion.div
                className="aspect-video overflow-hidden relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.img
                    src={projectImages[project.title]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                className="p-6 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ letterSpacing: "0.02em" }}
                >
                    {project.title}
                </motion.h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.05 }
                        }
                    }}
                >
                    {project.technologies.map((tech, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={techTagVariants}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 border border-white/10 rounded transition-colors duration-300"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition px-3 py-2 rounded-lg hover:bg-white/5 relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className="absolute inset-0 bg-primary/10 opacity-0 group-hover/btn:opacity-100"
                            layoutId={`btn-bg-${index}-code`}
                        />
                        <span className="relative flex items-center gap-2">
                            <Github size={18} />
                            Code
                        </span>
                    </motion.a>

                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition px-3 py-2 rounded-lg hover:bg-white/5 relative overflow-hidden group/btn"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 bg-primary/10 opacity-0 group-hover/btn:opacity-100"
                                layoutId={`btn-bg-${index}-demo`}
                            />
                            <span className="relative flex items-center gap-2">
                                <ExternalLink size={18} />
                                Demo
                            </span>
                        </motion.a>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}