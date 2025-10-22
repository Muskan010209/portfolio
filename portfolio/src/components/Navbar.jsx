import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold text-white">
                        <span className="text-blue-400">Muskan R</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900 rounded-lg mt-2 p-4">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;