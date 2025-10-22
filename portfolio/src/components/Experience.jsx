import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

const Experience = () => {
    const experiences = [
        {
            title: "Senior Developer - Blockchain",
            duration: "Aug 2025 - Present",
            company: "Eopsin Tech Pvt Ltd",
            description: "Leading blockchain development initiatives and learning emerging technologies. Handling Notabene Travel Alliance project and contributing to Chainalysis ecosystem. Focused on decentralized applications and cryptocurrency compliance solutions.",
            tech: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum", "Chainalysis", "Blockchain"]
        },
        {
            title: "Full Stack Developer",
            duration: "Jan 2022 - Apr 2025",
            company: "SStech Pvt Ltd",
            description: "Developed scalable web applications and RESTful APIs. Worked on multiple client projects and maintained existing applications.",
            tech: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"]
        },
        {
            title: "Frontend Developer",
            duration: "Aug 2020 - Jan 2022",
            company: "Geeksscan",
            description: "Focused on creating responsive and interactive user interfaces. Collaborated with design teams to implement pixel-perfect designs.",
            tech: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"]
        }
    ]

    return (
        <section id="experience" className="py-20 bg-gray-800">
            <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
                <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
                    Experience
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                            <p className="text-blue-400">{exp.duration}</p>
                            <p className="text-gray-300 mb-4">{exp.company}</p>
                            <p className="text-gray-400 mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience