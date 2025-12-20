import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                    Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Mohini Rinzwe
                </p>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
