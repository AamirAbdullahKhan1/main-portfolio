"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Brain, Shield, Smartphone, Terminal, Zap } from "lucide-react"
import SectionHeader from "./SectionHeader"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "Ollama", level: 70, description: "Local LLM deployment and fine-tuning" },
      { name: "LLM Fine-tuning", level: 80, description: "Custom model training and optimization" },
      { name: "Chatbot Development", level: 80, description: "Intelligent conversational AI systems" },
      { name: "TensorFlow", level: 60, description: "Deep learning model development" },
      { name: "PyTorch", level: 50, description: "Neural network implementation" },
      { name: "Hugging Face", level: 30, description: "Transformer models and NLP" },
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-red-400 to-orange-400",
    skills: [
      { name: "Ethical Hacking", level: 40, description: "Penetration testing and vulnerability assessment" },
      { name: "Network Security", level: 50, description: "Firewall configuration and monitoring" },
      { name: "Cryptography", level: 30, description: "Encryption algorithms and implementation" },
      { name: "OWASP Top 10", level: 40, description: "Web application security best practices" },
      { name: "Security Auditing", level: 70, description: "Code review and security analysis" },
      { name: "Incident Response", level: 50, description: "Security breach handling and recovery" },
    ],
  },
  {
    title: "Full Stack Development",
    icon: Code,
    color: "from-green-400 to-cyan-400",
    skills: [
      { name: "React/Next.js", level: 92, description: "Modern frontend development" },
      { name: "Node.js", level: 88, description: "Server-side JavaScript development" },
      { name: "TypeScript", level: 65, description: "Type-safe JavaScript development" },
      { name: "Python", level: 80, description: "Backend development and scripting" },
      { name: "PostgreSQL", level: 70, description: "Database design and optimization" },
      { name: "Docker", level: 65, description: "Containerization and deployment" },
    ],
  },
  {
    title: "Mobile & Gaming",
    icon: Smartphone,
    color: "from-blue-400 to-indigo-400",
    skills: [
      { name: "React Native", level: 80, description: "Cross-platform mobile development" },
      { name: "Godot", level: 40, description: "Game engine development" },
      { name: "Flutter", level: 45, description: "Mobile app development" },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="SKILLS"
          subtitle="A comprehensive arsenal of technologies and methodologies for building the future"
          icon={<Zap className="h-8 w-8" />}
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === index
                    ? "bg-green-400/20 text-green-400 border border-green-400/50"
                    : "bg-black/40 text-gray-300 border border-gray-600/30 hover:border-green-400/30"
                } backdrop-blur-md`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.title}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-green-400">{skill.name}</h3>
                <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                />
              </div>

              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-md bg-black/60 border border-green-400/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-mono">skills.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-green-400">$ ./analyze_skills.py --mode=continuous_learning</div>
              <div className="text-gray-300">Scanning for new technologies...</div>
              <div className="text-cyan-400">✓ Quantum Computing: Learning in progress</div>
              <div className="text-cyan-400">✓ Web3 Security: Research phase</div>
              <div className="text-cyan-400">✓ Advanced AI Ethics: Study ongoing</div>
              <div className="text-green-400 flex items-center">
                Status: Always evolving
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-1"
                >
                  _
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
