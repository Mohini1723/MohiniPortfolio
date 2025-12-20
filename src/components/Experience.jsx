import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Software Engineer',
        company: 'Rapid Surge Innovations Pvt Ltd',
        period: 'Sep 2024 – Present',
        description: [
            'Working on RioAI, a quick commerce pharmacy solution enabling medicine delivery within 15–20 minutes.',
            'Designed and developed backend services and RESTful APIs using Python and FastAPI.',
            'Built interactive analytics dashboards using React and FastAPI.',
            'Implemented secure authentication (JWT/OAuth2) for internal dashboards.',
            'Collaborated with cross-functional teams to develop role-based dashboards.'
        ]
    },
    {
        role: 'Software Development Intern',
        company: 'Web Seeder Technologies',
        period: 'Mar 2023 – Aug 2023',
        description: [
            'Developed and maintained RESTful APIs using FastAPI.',
            'Integrated backend APIs with React.js frontend components.',
            'Assisted in debugging, performance optimization, and API response handling.',
            'Collaborated on code reviews and Git-based version control.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 md:pl-0 mb-12 last:mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                            <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 ring-4 ring-black" />

                                <div className="md:w-1/2 mb-4 md:mb-0">
                                    <div className={`flex items-center gap-2 text-gray-400 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <Calendar size={16} />
                                        <span className="text-sm">{exp.period}</span>
                                    </div>
                                </div>

                                <div className="md:w-1/2 glass-card p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <p className="text-purple-400 font-medium mb-4">{exp.company}</p>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
