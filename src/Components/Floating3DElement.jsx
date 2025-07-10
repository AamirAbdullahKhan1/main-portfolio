"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Shield, Lock, Cpu, Network, Database, Terminal } from "lucide-react"

const FloatingIcon = ({ icon: Icon, color, size = "w-8 h-8", delay = 0, duration = 4, range = 20 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [-range, range, -range],
        x: [0, range / 2, -range / 2, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={`absolute ${color} opacity-30`}
    >
      <Icon className={size} />
    </motion.div>
  )
}

export default function Floating3DElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const elements = [
    { icon: Shield, color: "text-green-400", top: "10%", left: "5%", delay: 0 },
    { icon: Lock, color: "text-cyan-400", top: "20%", right: "10%", delay: 1 },
    { icon: Cpu, color: "text-purple-400", top: "40%", left: "8%", delay: 2 },
    { icon: Network, color: "text-blue-400", top: "60%", right: "5%", delay: 3 },
    { icon: Database, color: "text-yellow-400", top: "80%", left: "10%", delay: 4 },
    { icon: Terminal, color: "text-red-400", top: "70%", right: "15%", delay: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
          }}
        >
          <FloatingIcon
            icon={element.icon}
            color={element.color}
            delay={element.delay}
            duration={6 + index}
            range={30 + index * 5}
          />
        </div>
      ))}
    </div>
  )
}
