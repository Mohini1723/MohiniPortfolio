import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About <span className="text-gradient">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <GraduationCap className="w-8 h-8 text-purple-500" />
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>

                        <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                            <h4 className="text-xl font-bold mb-2">B.Tech. Computer Science</h4>
                            <p className="text-gray-400 mb-2">Medi-Caps University, Indore</p>
                            <p className="text-purple-400 font-semibold">CGPA: 9.13</p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-pink-500" />
                            <h4 className="text-xl font-bold mb-2">Higher Secondary</h4>
                            <p className="text-gray-400 mb-2">Sandipani Academy, Mandleshwar</p>
                            <p className="text-pink-400 font-semibold">77.8%</p>
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="w-8 h-8 text-pink-500" />
                            <h3 className="text-2xl font-semibold">Achievements & Certifications</h3>
                        </div>

                        <div className="glass-card p-6 rounded-2xl">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                                    <span className="text-gray-300">AWS Academy Cloud Foundations & Architecting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-pink-500" />
                                    <span className="text-gray-300">Cisco Cybersecurity Essentials</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                                    <span className="text-gray-300">Head Girl, Sandipani Academy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-pink-500" />
                                    <span className="text-gray-300">Winner – District Level Debate Competition</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
