"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Experience from "./Components/Experience"
import Contact from "./Components/Contact"
import LoadingScreen from "./Components/LoadingScreen"
import MatrixBackground from "./Components/MatrixBG"
import ScrollProgress from "./Components/ScrollProgress"
import Floating3DElements from "./Components/Floating3DElement"
import ParticleSystem from "./Components/ParticleSystem"
import InteractiveTerminal from "./Components/InteractiveTerminal"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-green-400 overflow-x-hidden">
      <MatrixBackground />
      <ParticleSystem />
      <Floating3DElements />
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Navbar />
            <main>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <InteractiveTerminal />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
