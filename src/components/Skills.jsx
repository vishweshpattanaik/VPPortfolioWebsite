import { motion } from 'framer-motion'

const skills = ['React', 'Tailwind CSS', 'C++', 'Python', 'MATLAB', 'PIC MCUs', 'VHDL', 'Assembly']
const skillGroups = [
  { title: "Programming Languages", items: ["C++", "Python", "MATLAB", "Assembly", "JavaScript", "TypeScript"] },
  { title: "Web Development", items: ["React", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Responsive Design"] },
  { title: "Embedded Systems", items: ["PIC16F18877", "ESP-01", "DHT11", "PWM", "UART", "7-Segment Display"] },
  { title: "Tools & Technologies", items: ["Git", "Visual Studio", "VS Code", "Proteus", "MPLAB X", "Basys 3 FPGA"] },
  { title: "Data Science & AI", items: ["Scikit-learn", "Data Mining", "Machine Learning", "Statistics", "Data Analysis"] },
  { title: "Soft Skills", items: ["Teamwork", "Fast Learner", "Problem Solving", "Leadership", "Communication"] }
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Skills & <span className="text-blue-500">Expertise</span>
      </h2>
      <p className="text-gray-400 mb-8">
        A comprehensive toolkit spanning hardware, software, and everything in between
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="bg-[#111] p-5 rounded-xl border border-[#222]">
            <h3 className="text-md font-semibold text-white mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span key={item} className="text-xs bg-[#1a1a1a] text-gray-300 px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
