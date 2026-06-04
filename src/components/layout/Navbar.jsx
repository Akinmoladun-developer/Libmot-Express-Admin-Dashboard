import { Bell, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3.5 flex items-center justify-between shadow-sm">

      {/* Left — Page Title */}
      <div>
        <h2 className="text-base font-semibold text-gray-800 leading-none">
          Libra Logistic Operations Dashboard
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">Okota Terminal — Live View</p>
      </div>

      {/* Right — Search + Bell + Avatar */}
      <div className="flex items-center gap-3">

        {/* Search bar */}
        <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
          <Search size={14} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-gray-600 outline-none w-36 placeholder-gray-400"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
          <Bell size={16} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-gray-700 leading-none">Admin</p>
            <p className="text-xs text-gray-400 mt-0.5">Okota Terminal</p>
          </div>
        </div>

      </div>
    </header>
  )
}