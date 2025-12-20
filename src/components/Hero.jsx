import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50 animate-pulse" />
                        <img
                            src={`${import.meta.env.BASE_URL}profile.jpeg`}
                            alt="Mohini Rinzwe"
                            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto"
                        />
                    </div>

                    {/* <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-gray-300">
            Available for Hire
          </span> */}

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-outfit">
                        Hi, I'm <span className="text-gradient">Mohini Rinzwe</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Software Engineer specializing in scalable web applications, RESTful APIs, and data-driven systems.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            Contact Me <ArrowRight size={20} />
                        </a>
                        <a
                            href="/mohini_rinzwe.pdf"
                            download
                            className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            Download Resume <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
