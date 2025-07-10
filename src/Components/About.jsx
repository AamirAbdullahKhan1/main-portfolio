"use client"

import { motion } from "framer-motion"
import { Code, Brain, Shield, Gamepad2, GraduationCap, Award, User } from "lucide-react"
import SectionHeader from "./SectionHeader"

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "3+", icon: Code },
    { label: "AI Models Trained", value: "5+", icon: Brain },
    { label: "Security Projects", value: "3+", icon: Shield },
    { label: "Full Stack Projects", value: "8+", icon: Award },
    { label: "Certificates Earned", value: "10+", icon: Award },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="ABOUT_ME"
          subtitle="Exploring the intersection of AI, cybersecurity, and innovation"
          icon={<User className="h-8 w-8" />}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6" />
                Academic Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently pursuing B.Tech CSE with specialization in Gaming Technology at
                <span className="text-green-400 font-semibold"> SRM University, Ramapuram</span> (3rd Year). My academic
                focus combines traditional computer science with cutting-edge gaming technologies.
              </p>
            </div>

            <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                <Brain className="mr-3 h-6 w-6" />
                Technical Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Specialized in <span className="text-cyan-400">AI model creation using Ollama</span>, fine-tuning LLMs,
                and developing intelligent chatbots. My passion for cybersecurity drives me to explore ethical hacking
                techniques and security implementations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a full-stack developer, I create end-to-end solutions with modern frameworks, always keeping security
                and performance at the forefront of development.
              </p>
            </div>

            <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                <Gamepad2 className="mr-3 h-6 w-6" />
                Gaming Technology Focus
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My specialization in Gaming Technology allows me to bridge the gap between traditional software
                development and interactive entertainment, creating immersive experiences with cutting-edge
                technologies.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-400/10 rounded-full">
                      <Icon className="h-8 w-8 text-green-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Easter Egg - Hidden Terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-black/60 border border-green-400/30 rounded-lg p-4 font-mono text-sm"
            >
              <div className="text-green-400 mb-2">$ cat motivation.txt</div>
              <div className="text-gray-300">
                "Code is poetry, AI is magic, and security is the shield that protects both."
              </div>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-green-400 inline-block mt-1"
              >
                _
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
