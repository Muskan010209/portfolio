import { FaReact, FaNodeJs, FaDatabase, FaJs, FaPython, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaCode } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'
import myLogo from '../assets/musk.jpg'

const About = () => {
    const frontendSkills = [
        { name: 'React', icon: <FaReact className="text-4xl text-blue-400" />, level: 95 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-gray-100" />, level: 85 },
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" />, level: 90 },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: 85 },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl text-purple-500" />, level: 80 }
    ]

    const backendSkills = [
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" />, level: 90 },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-600" />, level: 80 },
        { name: 'Redis', icon: <SiRedis className="text-4xl text-red-500" />, level: 75 },
        { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-500" />, level: 70 }
    ]

    const devOpsSkills = [
        // { name: 'AWS', icon: <FaAws className="text-4xl text-orange-400" />, level: 80 },
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" />, level: 75 },
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-500" />, level: 90 }
    ]

    const blockchainSkills = [
        { name: 'Solidity', icon: <FaCode className="text-4xl text-gray-400" />, level: 85 },
        { name: 'Web3.js', icon: <FaCode className="text-4xl text-yellow-400" />, level: 80 },
        { name: 'Ethereum', icon: <FaCode className="text-4xl text-blue-400" />, level: 85 },
        { name: 'Chainalysis', icon: <FaCode className="text-4xl text-purple-400" />, level: 75 }
    ]

    const SkillCard = ({ skill, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-600 rounded-full h-2">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                />
            </div>
            <span className="text-sm text-gray-400 mt-1">{skill.level}%</span>
        </motion.div>
    )

    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-bold mb-4 text-blue-400">My Story</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    With 4+ years of experience in full-stack development, I specialize in
                                    building scalable web applications and blockchain solutions using modern technologies. Currently working as a Senior Developer in blockchain at Eopsin Tech Pvt Ltd, I'm passionate
                                    about creating efficient, maintainable code and exploring emerging technologies in the decentralized space.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold mb-4 text-blue-400">What I Do</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    I've worked on various projects ranging from e-commerce platforms to
                                    blockchain applications and cryptocurrency compliance solutions. Currently handling Notabene Travel Alliance and contributing to Chainalysis ecosystem. Always focusing on performance, security, and best
                                    practices, I love solving complex problems and exploring the latest in emerging technologies.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">30+</div>
                                    <div className="text-gray-400">Projects Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">4+</div>
                                    <div className="text-gray-400">Years Experience</div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <div className="w-72 h-72 rounded-full bg-gray-800 flex items-center justify-center">
                                    <img
                                        src={myLogo}
                                        alt="Muskan Rajput Logo"
                                        className="w-full h-full rounded-full object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl font-bold mb-4">Technical Skills</h3>
                            <p className="text-gray-400 text-lg">Technologies I work with</p>
                        </motion.div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-6 text-blue-400">Frontend Development</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {frontendSkills.map((skill, index) => (
                                        <SkillCard key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-6 text-green-400">Backend Development</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {backendSkills.map((skill, index) => (
                                        <SkillCard key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-6 text-orange-400">DevOps & Tools</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {devOpsSkills.map((skill, index) => (
                                        <SkillCard key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About