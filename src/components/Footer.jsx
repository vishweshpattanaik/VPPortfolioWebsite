export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1a1a1a] py-8 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Vishwesh Pattanaik. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-purple-400">
          <a href="https://github.com/vishweshpattanaik" target="_blank" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/vishweshpattanaik" target="_blank" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
