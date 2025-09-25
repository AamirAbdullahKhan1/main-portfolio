"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("")

  const loadingTexts = [
    "Initializing neural networks...",
    "Loading AI models...",
    "Establishing secure connection...",
    "Decrypting portfolio data...",
    "Activating hacker mode...",
    "System ready.",
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)])
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center space-y-8">
        <motion.div
          animate={{
            textShadow: ["0 0 5px #00ff00", "0 0 20px #00ff00", "0 0 5px #00ff00"],
          }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="text-6xl font-mono font-bold text-green-400"
        >
          {"<LOADING/>"}
        </motion.div>

        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 font-mono text-lg"
        >
          {currentText}
        </motion.p>

        <div className="text-green-400 font-mono text-sm">{progress}%</div>
      </div>
    </motion.div>
  )
}
