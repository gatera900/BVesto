import { useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import TrendArea from '../charts/TrendArea'

const sets: Record<string, { t: number; v: number }[]> = {
  daily: Array.from({ length: 24 }, (_, i) => ({ t: i, v: 1000 + Math.sin(i/2)*100 + i*10 })),
  weekly: Array.from({ length: 7 }, (_, i) => ({ t: i, v: 1000 + Math.sin(i)*200 + i*80 })),
  monthly: Array.from({ length: 30 }, (_, i) => ({ t: i, v: 1000 + Math.sin(i/3)*300 + i*60 })),
  yearly: Array.from({ length: 12 }, (_, i) => ({ t: i, v: 1000 + Math.sin(i/2)*400 + i*200 }))
}

export default function PerformanceSection() {
  const [tf, setTf] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly')
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="font-semibold">Performance</div>
          <div className="rounded-lg bg-white/5 p-1 text-sm">
            {(['daily','weekly','monthly','yearly'] as const).map(k => (
              <button key={k} onClick={()=>setTf(k)} className={`px-3 py-1 rounded-md ${tf===k? 'bg-white/10' : ''}`}>{k[0].toUpperCase()+k.slice(1)}</button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TrendArea data={sets[tf]} />
      </CardContent>
    </Card>
  )
}


