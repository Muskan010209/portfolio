import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        try {
            // Replace with your EmailJS service details
            const result = await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                'YOUR_PUBLIC_KEY'
            )

            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-2xl text-blue-400" />,
            title: "Email",
            details: "kamuskan01@gmail.com",
            link: "mailto:kamuskan01@gmail.com"
        },
        {
            icon: <FaPhone className="text-2xl text-green-400" />,
            title: "Phone",
            details: "+91 7062086541",
            link: "tel:+917062086541"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl text-red-400" />,
            title: "Location",
            details: "Jaipur, Rajasthan",
            link: "#"
        }
    ]

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/Muskan010209", color: "hover:text-white" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muskan-rajput01", color: "hover:text-blue-400" },
        { icon: <FaTwitter />, href: "https://x.com/kamuskan01?s=11", color: "hover:text-blue-300" }
    ]

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        Let's discuss how we can work together to bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question, want to collaborate, or just want to say hi,
                                feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 group"
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{info.title}</h4>
                                        <p className="text-gray-400">{info.details}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        className={`text-gray-400 ${social.color} transition-colors duration-300 p-3 bg-gray-700 rounded-full hover:bg-gray-600`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-700 p-8 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-600 text-white rounded-lg">
                                Sorry, there was an error sending your message. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                                <textarea
                                    required
                                    rows={6}
                                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact