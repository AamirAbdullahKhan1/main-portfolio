"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, BookOpen, Code, Trophy, Clock } from "lucide-react"
import SectionHeader from "./SectionHeader"

const experiences = [
  {
    type: "education",
    title: "B.Tech CSE - Gaming Technology",
    organization: "SRM University, Ramapuram",
    location: "Chennai, India",
    period: "2023 - 2027",
    description:
      "Specializing in Gaming Technology with focus on interactive systems, game development, and emerging technologies.",
    highlights: [
      "CGPA: 9.0/10",
      "Gaming Technology Specialization",
      "Active in tech communities",
      "Research in AI applications",
    ],
    icon: BookOpen,
    color: "from-blue-400 to-indigo-400",
  },
  {
    type: "internship",
    title: "Full Stack Developer",
    organization: "Prodigy InfoTech",
    location: "Remote",
    period: "Jan 2025 - Feb 2025",
    description:
      "Learnt and developed full stack projects based on MFA Authentication System and a real time chatting application.",
    highlights: [
      "MFA Authentication System",
      "Real time Chatting Application",
      "Socket.io",
      "Node.js",
    ],
    icon: Code,
    color: "from-purple-400 to-pink-400",
  },
  {
    type: "lead",
    title: "Technical Lead",
    organization: "Andropedia",
    location: "SRM Ramapuram, Chennai",
    period: "Nov 2024 - April 2025",
    description:
      "Led a talented team of tech enthusiasts in developing cutting-edge projects and conducting workshops to foster innovation within Andropedia Club.",
    highlights: [
      "Led a team of developers",
      "Conducted workshops",
      "Developed projects",
      "Fostered innovation",
    ],
    icon: Award,
    color: "from-red-400 to-orange-400",
  },
  {
    type: "role",
    title: "Founder",
    organization: "XenTek Community",
    location: "Chennai",
    period: "Feb 2025 - Present",
    description: "Founder of XenTek Community, a growing tech initiative aimed at empowering students and professionals through collaborative learning and innovation. Leading community-driven projects, workshops, and discussions focused on AI, cybersecurity, and full stack development, while fostering a culture of skill development and tech-driven creativity.",
    highlights: [
      "Led the development of 5+ projects",
      "Conducted workshops",
      "Developed projects",
      "Fostered innovation",
    ],
    icon: Trophy,
    color: "from-green-400 to-cyan-400",
  },
  {
    type: "role",
    title: "President",
    organization: "GameCom",
    location: "SRM Ramapuram, Chennai",
    period: "April 2025 - Present",
    description: "As the President of GameCom, I lead SRM's premier tech and gaming club, driving its vision to empower students in gaming, game development, and diverse technology domains. My role involves overseeing core operations, fostering innovation, and building a collaborative community that bridges academic learning with industry standards.",
    highlights: [
      "Conducted workshops",
      "AI & Cyber Security Driven",
      "Fostered innovation",
    ],
    icon: Trophy,
    color: "from-green-400 to-cyan-400",
  },
  {
    type: "role",
    title: "React Native Developer",
    organization: "ApexFlow Technologies",
    location: "Chennai",
    period: "Oct 2025 - Present",
    description: "Working on the frontend development of a mobile application focused on after-sales service support. Responsible for implementing responsive UI components, integrating APIs, and optimizing performance for a seamless user experience. Contributing to the overall design flow, debugging, and ensuring cross-platform functionality using React Native and modern development practices.",
    highlights: [
      "Built mobile applications",
      "Optimized performance",
      "Fostered innovation",
    ],
    icon: Code,
    color: "from-red-400 to-orange-400",
  },
]

const certifications = [
  "Ethical Hacking Essentials",
  "Data Science Basics",
  "Network Security Fundamentals",
  "Deep Learning Basics",
  "Full Stack Development",
  "Natural Language Processing",
  "Identity Accesss Management (IAM)",
  "Cyber Job Simulation",
  "Computer Vision 101",
]

export default function Experience() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="EXPERIENCE"
          subtitle="Journey through education, projects, and continuous learning in technology"
          icon={<Clock className="h-8 w-8" />}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-400 to-cyan-400"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full border-4 border-black z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-green-400">{exp.title}</h3>
                          <p className="text-cyan-400 font-medium">{exp.organization}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-12">
            Certifications & Achievements
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-black/40 border border-green-400/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
              <div className="text-green-400">$ cat achievements.log</div>
              <div className="text-gray-300">[2024] Advanced AI model deployment</div>
              <div className="text-gray-300">[2023] Cybersecurity specialization</div>
              <div className="text-gray-300">[2022] Full-stack development mastery</div>
              <div className="text-green-400">$ echo "Next milestone: Quantum computing"</div>
              <div className="text-cyan-400">Next milestone: Quantum computing</div>
              <div className="text-green-400 flex items-center">
                Journey continues...
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
