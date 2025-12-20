import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript'] },
    { category: 'Backend', items: ['Python', 'FastAPI', 'RESTful APIs', 'Celery', 'Redis'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Data Modeling'] },
    { category: 'Tools & Others', items: ['Git/GitHub', 'Docker', 'AWS', 'OAuth2/JWT', 'OOP'] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical <span className="text-gradient">Skills</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
