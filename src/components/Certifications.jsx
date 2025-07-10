const certs = [
  { title: "Google Project Management Certificate", issuer: "Coursera", year: "2025" },
  { title: "MATLAB Onramp", issuer: "MathWorks", year: "2023" }
]

export default function Certifications() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white">
        <span className="text-green-400">Certifications</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((cert, idx) => (
          <div key={idx} className="bg-[#111] border border-[#222] p-4 rounded-lg">
            <h3 className="text-white text-sm font-semibold mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-xs">{cert.issuer}</p>
            <p className="text-green-400 text-xs font-medium mt-2">Certified {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
