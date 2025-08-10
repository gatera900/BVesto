import { cn } from '../../lib/utils'
import { Compass, Star, Briefcase, CandlestickChart, LineChart, Wrench, Bell, Newspaper } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const nav = [
  { label: 'Explore', icon: Compass, to: '/' },
  { label: 'Watchlist', icon: Star, to: '/watchlist' },
  { label: 'Investments', icon: Briefcase, to: '/' },
  { label: 'Markets', icon: CandlestickChart, to: '/markets' },
  { label: 'Transactions', icon: LineChart, to: '/transactions' },
  { label: 'Orders', icon: Briefcase, to: '/orders' },
  { label: 'News', icon: Newspaper, to: '/news' },
  { label: 'Alerts', icon: Bell, to: '/alerts' },
  { label: 'Tools', icon: Wrench, to: '/tools' }
]

export default function Sidebar() {
  return (
    <div className="p-4 md:p-5 h-full">
      <div className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Invest</div>

      <nav className="space-y-2 text-sm">
        {nav.map((item) => (
          <NavLink key={item.label} to={item.to} className={({ isActive }) => cn('card-surface hover-card flex items-center gap-3 px-3 py-2', isActive && 'ring-2 ring-brand-500/40')}>
            <item.icon size={18} className="text-white/80" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}


