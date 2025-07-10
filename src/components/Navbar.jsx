import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      className="bg-[#0d0d0d] text-white sticky top-0 z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text tracking-widest"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          VP
        </motion.h1>
        <ul className="hidden md:flex gap-6 text-sm text-green-300">
          {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map(section => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${section.toLowerCase()}`} className="hover:text-white transition duration-200">
                {section}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
