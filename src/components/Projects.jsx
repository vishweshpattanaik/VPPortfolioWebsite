import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: "Heat Index Monitoring System",
    description:
      "Smart greenhouse monitoring with ESP-01 and DHT11 sensors, featuring PWM-controlled alarm system for temperature and humidity management.",
    tags: ["Microcontroller", "ESP-01", "DHT11", "PWM", "C++"],
    category: "Embedded Systems"
  },
  {
    title: "Smart Pedestrian Crossing System",
    description:
      "Accessibility-focused system with audio and Bluetooth feedback for vision-impaired pedestrians using PIC16F18877 and Timer interrupts.",
    tags: ["PIC16F18877", "UART", "Bluetooth", "C", "Assembly"],
    category: "Embedded Systems"
  },
  {
    title: "Apple Quality Prediction Model",
    description:
      "Machine learning model achieving 75%+ accuracy with Gaussian Naive Bayes algorithm, optimized runtime performance by 30%.",
    tags: ["C++", "Data Mining", "Machine Learning"],
    category: "AI/ML"
  },
  {
    title: "NFL Superbowl Winner Predictor",
    description:
      "Sports analytics project using Python and Scikit-learn to predict NFL Superbowl outcomes.",
    tags: ["Python", "Scikit-learn", "Statistics"],
    category: "Data Science"
  },
  {
    title: "Find My Park App",
    description:
      "Campus parking solution with real-time availability tracking using sensor-based detection and mobile interface for UWI students.",
    tags: ["IoT", "Flutter", "Firebase"],
    category: "IoT"
  }
]

export default function Projects() {
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="px-4 sm:px-8 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <p className="text-gray-400 mb-8">
        A showcase of engineering solutions spanning embedded systems, AI/ML, and web development
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.title} className="bg-[#131313] p-5 rounded-xl border border-[#222] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-blue-300 bg-[#1e1e1e] px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs text-green-400 border border-green-400 px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
            <h3 className="text-lg text-white font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs text-gray-300 bg-[#1a1a1a] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
