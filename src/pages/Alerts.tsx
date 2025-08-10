import { useState } from 'react'
import { useAlerts } from '../store/alerts'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export default function AlertsPage() {
  const alerts = useAlerts(s => s.alerts)
  const add = useAlerts(s => s.add)
  const toggle = useAlerts(s => s.toggle)
  const remove = useAlerts(s => s.remove)
  const [symbol, setSymbol] = useState('AAPL')
  const [threshold, setThreshold] = useState<number>(200)

  return (
    <div className="space-y-4">
      <div className="card-surface p-4">
        <div className="text-lg font-semibold mb-2">Create Price Alert</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Input value={symbol} onChange={e=>setSymbol(e.target.value.toUpperCase())} placeholder="Symbol" />
          <Input type="number" value={threshold} onChange={e=>setThreshold(+e.target.value)} placeholder="Threshold" />
          <Button onClick={()=>add({ id: crypto.randomUUID(), type: 'price', target: symbol, threshold, enabled: true })}>Add</Button>
        </div>
      </div>
      <div className="card-surface p-4">
        <div className="text-lg font-semibold mb-2">Alerts</div>
        <div className="space-y-2">
          {alerts.map(a => (
            <div key={a.id} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
              <div className="text-sm">
                <span className="capitalize">{a.type}</span>
                {a.target && <> • {a.target}</>}
                {a.threshold!=null && <> • {a.threshold}</>}
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded-md bg-white/10" onClick={()=>toggle(a.id)}>{a.enabled? 'Disable':'Enable'}</button>
                <button className="px-2 py-1 rounded-md bg-red-500/80" onClick={()=>remove(a.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


