import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  const entries = [
    {
      title: "Electrical & Instrumentation Intern",
      org: "PowerGen Trinidad",
      year: "2023",
      location: "Trinidad",
      type: "Internship",
      achievements: [
        "Analyzed health, safety, and environmental protocols",
        "Developed solution proposals for operational improvements",
        "Gained hands-on experience with industrial electrical systems"
      ]
    },
    {
      title: "Digital Operations Intern",
      org: "Aronco Services Ltd.",
      year: "2022",
      location: "Trinidad",
      type: "Internship",
      achievements: [
        "Worked with industrial automation systems and SCADA integration",
        "Digitized legacy equipment documentation using cloud platforms",
        "Assisted engineers with real-time diagnostics of industrial PLCs"
      ]
    }
  ]

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="px-4 sm:px-8 py-20 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
        Professional <span className="text-blue-500">Experience</span>
      </h2>
      <div className="space-y-8">
        {entries.map((exp, idx) => (
          <div key={idx} className="bg-[#111] p-6 rounded-xl border border-[#222]">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
                <p className="text-blue-400 text-sm">{exp.org}</p>
              </div>
              <div className="text-right">
                <span className="text-xs bg-[#1a1a1a] text-gray-400 px-3 py-1 rounded-full mr-2">{exp.type}</span>
                <span className="text-xs text-gray-400">{exp.year}</span>
                <div className="text-xs text-gray-500">{exp.location}</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-green-400 font-semibold mb-1">Key Achievements</h4>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
