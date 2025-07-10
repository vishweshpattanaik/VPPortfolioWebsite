import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-gray-300 mb-4">
            I'm an Electrical & Computer Engineering student at the University of the West Indies,
            driven by a passion for creating innovative solutions that bridge the gap between
            hardware and software.
          </p>
          <p className="text-gray-300">
            My expertise spans from embedded systems and microcontroller programming to machine
            learning and modern web development. I thrive on tackling complex engineering challenges
            and turning ideas into reality.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {["Embedded Systems", "AI/ML", "Web Development", "Problem Solving"].map(skill => (
              <span key={skill} className="bg-[#1a1a1a] px-4 py-2 rounded-full text-sm text-blue-300 border border-[#2a2a2a]">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#111111] p-6 rounded-xl shadow-md">
          <h3 className="text-lg text-gray-300 font-semibold mb-3">Core Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {["MATLAB", "C++", "Python", "React", "Tailwind CSS", "PIC16F18877", "ESP-01", "DHT11", "PWM", "UART"].map(tag => (
              <span key={tag} className="bg-[#222] text-gray-300 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <blockquote className="text-sm italic text-blue-300 bg-[#1b1b1b] p-4 rounded-lg border-l-4 border-blue-500">
            "Passionate about building smart solutions for real-world problems, from greenhouse
            monitoring systems to AI-powered predictive models."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
