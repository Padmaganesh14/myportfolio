import { motion } from 'framer-motion';
import { profileData } from '../data';
import { GraduationCap, Award, BookOpen, MapPin, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark/30 to-darker pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-bold mb-3">Who I Am</p>
          <h2 className="section-title !mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Avatar + quick info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Avatar card */}
            <div className="glass p-8 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-display font-black text-white shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                  PG
                </div>
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-2 border-darker rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">{profileData.name}</h3>
              <p className="text-primary text-sm font-semibold mb-4">Full Stack Developer</p>
              <div className="flex items-center gap-1.5 text-muted text-sm">
                <MapPin size={14} />
                {profileData.location}
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass p-6 flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-muted mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((lang, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:border-secondary/50 hover:text-secondary transition-all"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Story + Education */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-display font-bold">My Story</h3>
              </div>
              <p className="text-muted leading-relaxed text-base md:text-lg">
                {profileData.summary}
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-display font-bold">Education</h3>
              </div>
              {profileData.education.map((edu, index) => (
                <div key={index} className="relative border-l-2 border-primary/20 pl-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full -left-[9px] top-1 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                  />
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-muted text-sm mt-0.5">{edu.institution}, {edu.location}</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Award size={14} className="text-secondary" />
                    <span className="text-secondary font-semibold text-sm">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
