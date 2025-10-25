import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' }
    ]

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/Muskan010209", color: "hover:text-white" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muskan-rajput01", color: "hover:text-blue-400" },
        { icon: <FaTwitter />, href: "https://x.com/kamuskan01?s=11", color: "hover:text-blue-300" },
    ]

    return (
        <footer className="bg-gray-900 border-t border-gray-700">
            <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <FaCode className="text-white text-lg" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Muskan Rajput</h3>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            Full-stack developer passionate about creating exceptional digital experiences.
                            Let's build something amazing together.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    className={`text-gray-400 ${social.color} transition-colors duration-300 p-3 bg-gray-800 rounded-full hover:bg-gray-700`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                        <div className="space-y-3">
                            <p className="text-gray-400">
                                <span className="text-blue-400">Email:</span><br />
                                kamuskan01@gmail.com
                            </p>
                            <p className="text-gray-400">
                                <span className="text-blue-400">Phone:</span><br />
                                +91 7062086541
                            </p>
                            <p className="text-gray-400">
                                <span className="text-blue-400">Location:</span><br />
                                Jaipur, Rajasthan
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-gray-700 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-center md:text-left">
                            © {currentYear} Muskan Rajput. All rights reserved.
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Made with</span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-red-500"
                            >
                                <FaHeart />
                            </motion.span>
                            <span>and React</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer