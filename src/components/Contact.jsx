import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In <span className="text-gradient">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:mohinirinzwe@gmail.com" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-medium">mohinirinzwe@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+917566332002" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="font-medium">+91-7566332002</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="font-medium">Indore, M.P.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl space-y-6"
                        action="https://formsubmit.co/mohinirinzwe@gmail.com"
                        method="POST"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://mohini1723.github.io/MohiniPortfolio/" />

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
