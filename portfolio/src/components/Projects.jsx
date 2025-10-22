import { useState } from 'react'
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

const Projects = () => {
    // ✅ Reordered so Platinx and Archub appear first
    const projects = [
        {
            title: "Platinx Exchange",
            description: "A secure and transparent blockchain-powered system ensuring integrity, anonymity, and real-time results with cryptographic verification — built as part of Platinx Exchange.",
            tech: ["Solidity", "Web3.js", "React", "Ethereum", "Chainalysis", "Blockchain", "Cryptography", "Notabene Travel Alliance"],
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
            github: "https://github.com/muskan010209",
            live: "https://platinx.exchange",
            category: "Blockchain"
        },
        {
            title: "Archub",
            description: "A full-stack e-commerce solution with advanced features including payment processing, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            github: "https://github.com/muskan010209",
            live: "https://archub.in",
            category: "Full Stack"
        },
        {
            title: "Dashboard",
            description: "A comprehensive project management tool with drag-and-drop functionality, team collaboration features, and detailed analytics. Built for productivity and team efficiency.",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            github: "https://github.com/muskan010209",
            live: "https://example.com",
            category: "Frontend"
        },

    ]

    const categories = ["All", "Full Stack", "Frontend", "Blockchain"]
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory)

    const getCategoryIcon = (category) => {
        switch (category) {
            case "Full Stack": return <FaCode className="text-lg" />
            case "Frontend": return <FaCode className="text-lg" />
            case "AI/ML": return <FaDatabase className="text-lg" />
            case "Blockchain": return <FaServer className="text-lg" />
            default: return <FaCode className="text-lg" />
        }
    }

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and side projects. Each project represents
                        a unique challenge and learning opportunity.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            {getCategoryIcon(category)}
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        <FaGithub className="text-gray-800" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        <FaExternalLinkAlt className="text-gray-800" />
                                    </a>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaGithub />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
