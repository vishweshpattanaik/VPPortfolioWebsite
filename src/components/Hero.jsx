import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-[#0d0d0d]">
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Vishwesh <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Pattanaik</span>
      </motion.h1>

      <motion.p
        className="text-gray-400 max-w-2xl text-lg mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Electrical & Computer Engineering student. Passionate about embedded systems, AI/ML, and building impactful tech.
      </motion.p>

      <motion.a
        href="#projects"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        View My Work
      </motion.a>

      <motion.div
        className="mt-10 text-green-400 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        ↓
      </motion.div>
    </section>
  )
}
