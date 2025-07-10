import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  return (
    <motion.section
      id="hero"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 text-center max-w-4xl mx-auto"
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
        Vishwesh Pattanaik
      </h1>
      <p className="text-gray-300 text-base sm:text-lg mb-6">
        Electrical & Computer Engineering Student | Passionate about Embedded Systems, AI, and Data-Driven Design
      </p>
      <a
        href="#projects"
        className="mt-4 inline-block px-6 py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        View My Work
      </a>
    </motion.section>
  )
}
