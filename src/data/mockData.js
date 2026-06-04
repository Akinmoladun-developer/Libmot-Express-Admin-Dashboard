export const dashboardStats = [
  { id: 1, label: "Damaged Shipments", value: 34, sub: "Total to date", icon: "AlertTriangle", color: "bg-red-500" },
  { id: 2, label: "Missing Shipments", value: 12, sub: "Total to date", icon: "PackageX", color: "bg-orange-500" },
  { id: 3, label: "Misrouted Shipments", value: 8, sub: "All existing misrouted", icon: "Shuffle", color: "bg-pink-500" },
  { id: 4, label: "Due for Collection", value: 57, sub: "Within 7 days of arrival", icon: "PackageCheck", color: "bg-teal-500" },
  { id: 5, label: "Demurrage", value: 23, sub: "Within 7 days", icon: "Clock", color: "bg-yellow-500" },
  { id: 6, label: "Due for Destruction", value: 5, sub: "Past 14 days in demurrage", icon: "Trash2", color: "bg-red-800" },
  { id: 7, label: "Shipment Weight Yesterday", value: "12,450 kg", sub: "Total at CoB yesterday", icon: "Weight", color: "bg-blue-500" },
  { id: 8, label: "Shipment Weight Today", value: "9,820 kg", sub: "At time of check", icon: "Scale", color: "bg-sky-500" },
  { id: 9, label: "Revenue Today", value: "₦1,240,000", sub: "At time of check", icon: "Banknote", color: "bg-green-500" },
  { id: 10, label: "Trucks in Transit", value: 18, sub: "Currently on the road", icon: "Truck", color: "bg-purple-500" },
  { id: 11, label: "Revenue Yesterday", value: "₦3,870,000", sub: "Total at CoB yesterday", icon: "TrendingUp", color: "bg-indigo-500" },
  { id: 12, label: "Active Merchants", value: 142, sub: "Business within 3 months", icon: "Store", color: "bg-lime-600" },
  { id: 13, label: "Active B2B", value: 67, sub: "Business within 3 months", icon: "Handshake", color: "bg-cyan-700" },
  { id: 14, label: "Total Revenue — Okota", value: "₦890,000", sub: "Okota Terminal last 24hrs", icon: "Building2", color: "bg-emerald-600" },
  { id: 15, label: "Incoming Shipments", value: 31, sub: "To Okota in next 24hrs", icon: "PackagePlus", color: "bg-violet-600" },
]

export const summaryTotals = [
  { label: "Total Shipments", value: "4,821", icon: "Package", change: "+12% this week" },
  { label: "Total Revenue", value: "₦58,340,000", icon: "NairaSign", change: "+8% this week" },
  { label: "Active Routes", value: "24", icon: "MapPin", change: "3 new this month" },
  { label: "Pending Issues", value: "47", icon: "AlertCircle", change: "Damaged + Missing + Misrouted" },
]

export const barChartData = [
  { day: "Mon", shipments: 120 },
  { day: "Tue", shipments: 98 },
  { day: "Wed", shipments: 145 },
  { day: "Thu", shipments: 110 },
  { day: "Fri", shipments: 160 },
  { day: "Sat", shipments: 75 },
  { day: "Sun", shipments: 50 },
]

export const lineChartData = [
  { day: "Mon", revenue: 1200000 },
  { day: "Tue", revenue: 980000 },
  { day: "Wed", revenue: 1450000 },
  { day: "Thu", revenue: 1100000 },
  { day: "Fri", revenue: 1600000 },
  { day: "Sat", revenue: 750000 },
  { day: "Sun", revenue: 500000 },
]

export const pieChartData = [
  { name: "Delivered", value: 620, color: "#22c55e" },
  { name: "In Transit", value: 180, color: "#3b82f6" },
  { name: "Pending", value: 95, color: "#f59e0b" },
  { name: "Damaged", value: 34, color: "#ef4444" },
  { name: "Missing", value: 12, color: "#f97316" },
]