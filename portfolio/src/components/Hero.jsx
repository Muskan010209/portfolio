import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { Toaster, toast } from 'react-hot-toast'
import myLogo from '../assets/musk.jpg'

const Hero = () => {
    const handleDownload = () => {
        toast.success('Downloading resume…', {
            style: {
                border: '1px solid #60A5FA',
                padding: '8px 16px',
                color: '#1E3A8A',
            },
            iconTheme: {
                primary: '#60A5FA',
                secondary: '#E0F2FE',
            },
        })

        const link = document.createElement('a')
        link.href = '/Muskan_Rajput_Resume.pdf'
        link.download = 'Muskan_Rajput_Resume.pdf'
        link.click()
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>

            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto mt-8 py-20 px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <img
                                src={myLogo}
                                alt="Muskan Rajput Logo"
                                className="w-full h-full rounded-full object-cover shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Muskan Rajput
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-2"
                    >
                        Full Stack Developer
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
                    >
                        Crafting exceptional digital experiences with modern technologies.
                        Passionate about building scalable applications and solving complex problems.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    >
                        {/* View My Work */}
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                View My Work
                            </motion.button>
                        </Link>

                        {/* Download CV with Toast */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                        >
                            <FaDownload />
                            Download CV
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex justify-center space-x-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="https://github.com/Muskan010209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="https://www.linkedin.com/in/muskan-rajput01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="mailto:kamuskan01@gmail.com"
                            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                        >
                            <FaEnvelope size={24} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
