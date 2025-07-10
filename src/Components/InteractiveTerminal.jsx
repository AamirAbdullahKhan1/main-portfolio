"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Terminal, Play, Square } from "lucide-react"

const commands = [
  { cmd: "whoami", output: "elite_hacker" },
  { cmd: "ls -la skills/", output: "drwxr-xr-x ai_ml/\ndrwxr-xr-x cybersecurity/\ndrwxr-xr-x fullstack/" },
  { cmd: "cat motivation.txt", output: "Code is poetry, AI is magic, security is the shield." },
  { cmd: "ping innovation.dev", output: "PING innovation.dev: 64 bytes from creativity: time=0.1ms" },
  { cmd: "sudo access_future", output: "Access granted. Welcome to tomorrow." },
]

export default function InteractiveTerminal() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [showOutput, setShowOutput] = useState(false)

  const runCommand = () => {
    if (isRunning) return

    setIsRunning(true)
    setShowOutput(false)
    setDisplayText("")

    const command = commands[currentCommand]
    let index = 0

    const typeCommand = () => {
      if (index < command.cmd.length) {
        setDisplayText((prev) => prev + command.cmd[index])
        index++
        setTimeout(typeCommand, 100)
      } else {
        setTimeout(() => {
          setShowOutput(true)
          setTimeout(() => {
            setIsRunning(false)
            setCurrentCommand((prev) => (prev + 1) % commands.length)
          }, 2000)
        }, 500)
      }
    }

    typeCommand()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mt-16"
    >
      <div className="backdrop-blur-md bg-black/80 border border-green-400/30 rounded-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-green-400/20">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <Terminal className="h-4 w-4 text-green-400 ml-4" />
            <span className="text-green-400 text-sm font-mono">interactive_terminal</span>
          </div>
          <motion.button
            onClick={runCommand}
            disabled={isRunning}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 px-3 py-1 bg-green-400/10 text-green-400 rounded text-xs hover:bg-green-400/20 transition-colors disabled:opacity-50"
          >
            {isRunning ? <Square className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            <span>{isRunning ? "Running" : "Execute"}</span>
          </motion.button>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm min-h-[120px]">
          <div className="flex items-center text-green-400 mb-2">
            <span className="text-gray-400">$</span>
            <span className="ml-2">{displayText}</span>
            {isRunning && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                className="text-green-400"
              >
                |
              </motion.span>
            )}
          </div>

          <AnimatePresence>
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gray-300 whitespace-pre-line"
              >
                {commands[currentCommand].output}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
