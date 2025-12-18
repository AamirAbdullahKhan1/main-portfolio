"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Terminal, Shield, Brain, Code } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Full Stack Developer & AI Engineer"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal Window */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">terminal</span>
            </div>
            <div className="font-mono text-left">
              <div className="text-green-400">
                <span className="text-gray-400">$</span> whoami
              </div>
              <div className="text-white mt-2">Aamir Abdullah Khan</div>
              <div className="text-green-400 mt-4">
                <span className="text-gray-400">$</span> cat role.txt
              </div>
              <div className="text-white mt-2">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-green-400"
                >
                  |
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400"
              >
                INNOVATE. SECURE. CREATE.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              >
                Crafting intelligent solutions with AI, securing digital frontiers with cybersecurity, and building the
                next generation of applications.
              </motion.p>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                {["AI/ML", "Cybersecurity", "Full Stack", "Ollama", "React", "React Native"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, glow: "0 0 20px #00ff00" }}
                    className="px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full text-green-400 font-mono text-sm backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex space-x-6"
              >
                {[
                  { icon: Github, href: "https://github.com/AamirAbdullahKhan1", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/aamir-abdullah-khan", label: "LinkedIn" },
                  { icon: Mail, href: "aamirak2004@gmail.com", label: "Email" },
                  { icon: Terminal, href: "#", label: "Blog" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-green-400/10 border border-green-400/30 rounded-full text-green-400 hover:bg-green-400/20 transition-colors backdrop-blur-sm"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
              >
                Initialize Connection
              </motion.button>
            </div>

            {/* Right Column - Image and 3D Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-400/30 backdrop-blur-md bg-black/40">
                  <img
                    src="https://live.staticflickr.com/65535/54644987566_28480da066_z.jpg"
                    alt="Your Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 border-2 border-green-400/50 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40"
                >
                  <Shield className="h-8 w-8 text-green-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-cyan-400/50 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40"
                >
                  <Brain className="h-8 w-8 text-cyan-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 -left-8 w-12 h-12 border-2 border-purple-400/50 rounded-lg flex items-center justify-center backdrop-blur-md bg-black/40"
                >
                  <Code className="h-6 w-6 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
