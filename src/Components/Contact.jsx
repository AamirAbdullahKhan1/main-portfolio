"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Terminal, MessageSquare, Wifi } from "lucide-react"
import SectionHeader from "./SectionHeader"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Show success message (you can implement a toast notification here)
    alert("Message sent successfully!")
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 12345 67890",
      href: "tel:+911234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-cyan-400",
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "#",
      color: "hover:text-purple-400",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="CONTACT"
          subtitle="Ready to collaborate on the next big innovation? Let's connect and build something amazing together."
          icon={<Wifi className="h-8 w-8" />}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <Terminal className="mr-3 h-6 w-6" />
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-400/5 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-green-400/10 rounded-full group-hover:bg-green-400/20 transition-colors">
                        <Icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-400 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-3 p-4 bg-green-400/5 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-300 text-gray-300 ${social.color}`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Terminal Easter Egg */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-black/60 border border-green-400/30 rounded-lg p-6"
            >
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">$ ping collaboration.network</div>
                <div className="text-gray-300">PING collaboration.network (192.168.1.1)</div>
                <div className="text-cyan-400">64 bytes from innovation: icmp_seq=1 ttl=64 time=0.1ms</div>
                <div className="text-cyan-400">64 bytes from creativity: icmp_seq=2 ttl=64 time=0.1ms</div>
                <div className="text-green-400 flex items-center">
                  Connection established. Ready to collaborate!
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-1"
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-green-400 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-green-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400/60 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-green-400 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-green-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400/60 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-green-400 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-green-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400/60 focus:outline-none transition-colors"
                    placeholder="Project collaboration"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-green-400 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/60 border border-green-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400/60 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
            <p className="text-gray-300 mb-4">"The best way to predict the future is to invent it." - Alan Kay</p>
            <div className="flex items-center justify-center space-x-2 text-green-400 font-mono">
              <Terminal className="h-5 w-5" />
              <span>Made with ❤️ and lots of ☕</span>
            </div>
            <div className="mt-4 text-gray-400 text-sm">© 2024 Your Name. All rights reserved.</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
