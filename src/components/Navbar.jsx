import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

const Navbar = () => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="relative group p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.name}
                        </span>
                    </a>
                ))}
            </motion.div>
        </div>
    );
};

export default Navbar;
