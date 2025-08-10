import { cn } from '../../lib/utils'
import Sparkline from '../charts/Sparkline'
import { Badge } from '../ui/badge'

type Props = {
  id: string
  name: string
  xirr: number
  sip: boolean
  dayChange: number
  returns: number
  returnsPct: number
  current: number
  spark: number[]
  positive: boolean
  active: boolean
  onClick: () => void
}

export default function FundRow(props: Props) {
  const { name, xirr, sip, dayChange, returns, returnsPct, current, spark, positive, active, onClick } = props

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3 md:p-4',
        active && 'ring-2 ring-brand-500/40'
      )}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="truncate font-medium">{name}</div>
            {sip && <Badge>SIP</Badge>}
          </div>
          <div className="text-xs text-white/60 mt-0.5">XIRR {xirr.toFixed(2)}%</div>
        </div>

        <div className="hidden sm:block">
          <Sparkline points={spark} positive={positive} />
        </div>

        <div className="text-right w-28">
          <div className={cn('text-sm', positive ? 'text-[#22ff8b]' : 'text-red-400')}>
            {positive ? '+' : ''}{returnsPct.toFixed(2)}%
          </div>
          <div className="text-xs text-white/60">Day {dayChange > 0 ? `+${dayChange.toFixed(2)}` : dayChange.toFixed(2)}</div>
        </div>

        <div className="text-right w-28">
          <div className="text-sm font-semibold">${current.toLocaleString()}</div>
          <div className="text-xs text-white/60">Returns ${returns.toLocaleString()}</div>
        </div>
      </div>
    </button>
  )
}


