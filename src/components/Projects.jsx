import { motion } from "framer-motion";
import { profileData } from "../data";
import { Github, ExternalLink, Star } from "lucide-react";

const projectImages = {
  "Patient Health Record Management System": "/assets/patient.png",
  "Smart Waste Management System": "/assets/waste.png",
  "Plant Care AI — Intelligent Plant Health Assistant": "/assets/plant.png",
};

const techColors = {
  "React.js": "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400",
  "React": "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400",
  "Node.js": "from-green-500/20 to-green-500/5 border-green-500/30 text-green-400",
  "Express.js": "from-gray-500/20 to-gray-500/5 border-gray-500/30 text-gray-300",
  "MongoDB": "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
  "Python": "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400",
  "Machine Learning": "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
  "HTML": "from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400",
  "CSS": "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400",
};

function TechBadge({ tech }) {
  const colorClass = techColors[tech] || "from-primary/20 to-primary/5 border-primary/30 text-primary";
  return (
    <span
      className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 bg-gradient-to-br ${colorClass} border rounded-full transition-transform hover:scale-105`}
    >
      {tech}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-bold mb-3">Portfolio</p>
          <h2 className="section-title !mb-4">Featured Projects</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Real-world applications built with modern technologies and a keen eye for detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="project-card group"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={projectImages[project.title]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn"
                    title="View Code"
                  >
                    <Github size={18} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn project-action-btn-primary"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Featured badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-yellow-400 font-semibold">
                  <Star size={11} fill="currentColor" />
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <TechBadge key={i} tech={tech} />
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  {project.demo && (
                    <>
                      <span className="text-white/10">•</span>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2 group"
          >
            <Github size={18} />
            View All on GitHub
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ChevronRight({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}