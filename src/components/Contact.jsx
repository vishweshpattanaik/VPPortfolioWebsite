import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Connect</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded bg-[#1a1a1a] text-white" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-[#1a1a1a] text-white" />
        <textarea placeholder="Message" rows="4" className="p-3 rounded bg-[#1a1a1a] text-white" />
        <button className="bg-purple-600 py-3 rounded hover:bg-purple-700 transition">Send Message</button>
      </form>
    </motion.section>
  )
}
