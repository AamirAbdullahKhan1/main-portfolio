"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Shield, Brain, Code, Gamepad2, Rocket } from "lucide-react"
import SectionHeader from "./SectionHeader"

const projects = [
  {
    id: 1,
    title: "AI Security Analyzer",
    category: "cybersecurity",
    description:
      "An intelligent security analysis tool that uses machine learning to detect vulnerabilities in web applications and provide automated remediation suggestions.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
    features: [
      "Real-time vulnerability scanning",
      "ML-powered threat detection",
      "Automated reporting",
      "API integration",
    ],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 2,
    title: "Ollama Chat Interface",
    category: "ai",
    description:
      "A sophisticated chat interface for local LLM deployment using Ollama, featuring custom model fine-tuning and conversation management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Ollama", "WebSocket", "MongoDB"],
    features: ["Local LLM deployment", "Real-time chat", "Model switching", "Conversation history"],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 3,
    title: "Cybersecurity Learning Platform",
    category: "fullstack",
    description:
      "An interactive platform for learning cybersecurity concepts with hands-on labs, progress tracking, and gamified learning experiences.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Supabase", "Docker", "Tailwind CSS"],
    features: ["Interactive labs", "Progress tracking", "Gamification", "Community features"],
    github: "#",
    demo: "#",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Neural Network Visualizer",
    category: "ai",
    description:
      "A 3D visualization tool for understanding neural network architectures and training processes in real-time.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Three.js", "React", "Python", "FastAPI", "WebGL"],
    features: ["3D visualization", "Real-time training", "Interactive exploration", "Educational content"],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 5,
    title: "Tiny Knight",
    category: "gaming",
    description:
      "A simple game project with moving, jumping, attacking and coin collecting functionality.",
    image: "https://live.staticflickr.com/65535/54647702315_09f339a710_b.jpg",
    technologies: ["Godot", "C#", "Node.js", "WebRTC", "Blockchain"],
    features: ["Multiplayer support", "Anti-cheat system", "Blockchain rewards", "Real-time communication"],
    github: "#",
    demo: "#",
    status: "in-progress",
  },
  {
    id: 6,
    title: "Penetration Testing Toolkit",
    category: "cybersecurity",
    description:
      "A comprehensive toolkit for ethical hackers with automated scanning, reporting, and vulnerability assessment capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Bash", "Nmap", "Metasploit", "Django"],
    features: ["Automated scanning", "Custom payloads", "Detailed reporting", "Plugin system"],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 7,
    title: "School Management System",
    category: "fullstack",
    description:
      "An interactive platform for managing a school's operations with features for student, teacher, and course management along with attendance tracking and report generation.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Supabase", "Docker", "Tailwind CSS"],
    features: ["Student management", "Teacher management", "Course management", "Report generation", "Attendacne Tracking"],
    github: "#",
    demo: "#",
    status: "in-progress",
  },
  {
    id: 8,
    title: "E-Commernce Product Catalog",
    category: "fullstack",
    description:
      "An interactive platform for managing a product catalog with features for product management, inventory tracking, and order management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React.js", "JavaScript", "Postgres", "Render", "Tailwind CSS"],
    features: ["Product management", "Inventory tracking", "Order management", "Payment integration"],
    github: "#",
    demo: "#",
    status: "in-progress",
  },
  {
    id: 9,
    title: "Venue Booking Platform",
    category: "fullstack",
    description:
      "An interactive platform for managing a venue booking with features for venue management, booking management, and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React.js", "JavaScript", "Neon.tech", "Render", "Tailwind CSS"],
    features: ["Venue management", "Booking management", "Payment integration", "Customer management"],
    github: "#",
    demo: "#",
    status: "in-progress",
  },
  {
    id: 10,
    title: "Real Time Chat Application",
    category: "fullstack",
    description:
      "An interactive platform for managing a real time chat application with features for message sending, receiving, and notification integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React.js", "JavaScript", "Socket.io", "Render", "Tailwind CSS"],
    features: ["Message sending", "Message receiving", "Notification integration", "Customer management"],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 11,
    title: "Movie Details Website - XenStream",
    category: "fullstack",
    description:
      "A website for looking into upcoming and trending movies with their details and reviews using the TMDB API.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React.js", "JavaScript", "TMDB API", "Render", "Tailwind CSS"],
    features: ["Movie details", "Movie reviews", "Movie ratings", "Movie recommendations"],
    github: "#",
    demo: "#",
    status: "completed",
  },
]

const categories = [
  { id: "all", name: "All Projects", icon: Code },
  { id: "ai", name: "AI & ML", icon: Brain },
  { id: "cybersecurity", name: "Cybersecurity", icon: Shield },
  { id: "fullstack", name: "Full Stack", icon: Code },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="PROJECTS"
          subtitle="Innovative solutions at the intersection of AI, cybersecurity, and modern development"
          icon={<Rocket className="h-8 w-8" />}
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-green-400/20 text-green-400 border border-green-400/50"
                    : "bg-black/40 text-gray-300 border border-gray-600/30 hover:border-green-400/30"
                } backdrop-blur-md`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "completed"
                      ? "bg-green-400/20 text-green-400 border border-green-400/30"
                      : "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                  }`}
                >
                  {project.status === "completed" ? "Completed" : "In Progress"}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4"
                >
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-green-400/20 rounded-full text-green-400 hover:bg-green-400/30 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-cyan-400/20 rounded-full text-cyan-400 hover:bg-cyan-400/30 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  {project.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-gray-400">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-green-400/10 text-green-400 text-sm rounded border border-green-400/30 hover:bg-green-400/20 transition-colors text-center"
                  >
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-cyan-400/10 text-cyan-400 text-sm rounded border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors text-center"
                  >
                    Demo
                  </motion.a>
                </div>
              </div>
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
            <div className="font-mono text-sm space-y-2">
              <div className="text-green-400">$ git log --oneline --graph</div>
              <div className="text-gray-300">* a1b2c3d Added neural network visualizer</div>
              <div className="text-gray-300">* d4e5f6g Implemented security scanner</div>
              <div className="text-gray-300">* g7h8i9j Enhanced chat interface</div>
              <div className="text-green-400">$ git status</div>
              <div className="text-cyan-400">On branch main</div>
              <div className="text-cyan-400">Your branch is ahead of 'origin/main' by 3 commits.</div>
              <div className="text-gray-300">nothing to commit, working tree clean</div>
              <div className="text-green-400 flex items-center">
                Ready for next innovation
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
