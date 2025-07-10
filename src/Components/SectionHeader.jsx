"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function SectionHeader({ title, subtitle, icon }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Title with Glitch Effect */}
      <div className="relative inline-block">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-6 font-mono"
          animate={
            isHovered
              ? {
                  textShadow: ["0 0 5px #00ff00", "2px 0 0 #ff0000, -2px 0 0 #00ffff", "0 0 5px #00ff00"],
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          {"<"}
          {icon && <span className="inline-block mx-2">{icon}</span>}
          {title}
          {"/>"}
        </motion.h2>

        {/* Glitch Lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          className="absolute top-1/2 left-0 w-full h-0.5 bg-red-400 origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ delay: 0.1 }}
          className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-400 origin-right transform translate-y-1"
        />
      </div>

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8"
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Terminal Cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-3 h-8 bg-green-400 ml-2"
      />
    </motion.div>
  )
}
