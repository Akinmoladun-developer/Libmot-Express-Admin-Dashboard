import { useState } from 'react'
import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  Handshake,
  BarChart2,
  Settings,
  Bell,
  MessageSquare,
  LogIn,
  ChevronRight,
  Building2,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, chevron: false },
  { label: 'Shipments', icon: Package, chevron: true },
  { label: 'Trucks', icon: Truck, chevron: true },
  { label: 'Merchants', icon: Users, chevron: true },
  { label: 'B2B Clients', icon: Handshake, chevron: true },
  { label: 'Messages', icon: MessageSquare, chevron: true },
  { label: 'Notifications', icon: Bell, chevron: true },
  { label: 'Reports', icon: BarChart2, chevron: true },
  { label: 'Settings', icon: Settings, chevron: true },
  { label: 'Login', icon: LogIn, chevron: false },
]

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="w-64 bg-white text-gray-700 flex flex-col h-full shadow-md border-r border-gray-100">

      {/* Logo / Brand */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center">
          <Building2 size={20} color="white" />
        </div>
        <div>
          <h1 className="text-base font-bold text-gray-800 leading-none">Libmot Express</h1>
          <p className="text-xs text-gray-400 mt-0.5">Logistics Admin</p>
        </div>
      </div>

      {/* Nav Label */}
      <div className="px-6 pt-5 pb-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Main Menu
        </p>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 pb-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group
                ${isActive
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <div className="flex items-center gap-3">
                {/* Icon Container */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${isActive
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                </div>
                {item.label}
              </div>

              {/* Chevron */}
              {item.chevron && (
                <ChevronRight
                  size={15}
                  className={`transition-all ${isActive ? 'text-blue-500' : 'text-gray-300 group-hover:text-gray-400'}`}
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700">Admin User</p>
            <p className="text-xs text-gray-400">Okota Terminal</p>
          </div>
        </div>
      </div>

    </div>
  )
}