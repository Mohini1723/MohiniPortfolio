import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
    {
        title: 'Employee Attrition Prediction System',
        tech: ['Python', 'Machine Learning', 'Data Analysis'],
        description: 'Developed a ML-based system to predict employee attrition using historical workforce data. Performed data preprocessing, feature engineering, and model evaluation to improve prediction accuracy.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Kinnect – Digital Marketing Website',
        tech: ['React.js', 'Material-UI', 'React Router'],
        description: 'Developed a responsive digital marketing website focusing on modern UI design. Implemented dynamic UI updates and optimized performance for cross-device responsiveness.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card rounded-2xl overflow-hidden group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className="flex gap-2 mb-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors">
                                        <Github size={18} /> Code
                                    </button>
                                    <button className="flex items-center gap-2 text-sm font-medium hover:text-pink-400 transition-colors">
                                        <ExternalLink size={18} /> Live Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
