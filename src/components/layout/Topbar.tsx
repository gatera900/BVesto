import { Search, HelpCircle, Moon, Sun } from 'lucide-react'
import Avatar from '../../components/ui/avatar'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { useSettings } from '../../store/settings'

export default function Topbar() {
  const theme = useSettings(s => s.theme)
  const toggle = useSettings(s => s.toggleTheme)
  return (
    <div className="flex items-center justify-between">
      <div className="hidden md:block text-lg font-semibold text-white/90">Dashboard</div>
      <div className="flex items-center gap-3">
        <button className="h-10 w-10 grid place-items-center rounded-lg hover:bg-white/10">
          <Search className="text-white/80" size={18} />
        </button>
        <button className="h-10 w-10 grid place-items-center rounded-lg hover:bg-white/10">
          <HelpCircle className="text-white/80" size={18} />
        </button>
        <button className="h-10 w-10 grid place-items-center rounded-lg hover:bg-white/10" onClick={toggle}>
          {theme === 'dark' ? <Sun className="text-white/80" size={18} /> : <Moon className="text-white/80" size={18} />}
        </button>
        <Button>Deposit</Button>
        <div className="flex items-center gap-3 pl-3 border-l border-white/10">
          <Avatar />
          <div>
            <div className="text-sm">Alex Carter</div>
            <Badge className="mt-0.5">PRO</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}


