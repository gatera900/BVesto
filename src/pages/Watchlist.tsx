import { usePortfolio } from '../store/portfolio'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export default function WatchlistPage() {
  const watchlist = usePortfolio(s => s.watchlist)
  const add = usePortfolio(s => s.addToWatchlist)
  const remove = usePortfolio(s => s.removeFromWatchlist)
  const [symbol, setSymbol] = useState('')

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="text-lg font-semibold">Watchlist</div>
      <div className="flex gap-2">
        <Input value={symbol} onChange={e => setSymbol(e.target.value.toUpperCase())} placeholder="Add symbol" />
        <Button onClick={() => { if(symbol) { add(symbol); setSymbol('') } }}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {watchlist.map(s => (
          <div key={s} className="px-3 py-1.5 rounded-full bg-white/10">
            <span className="mr-2">{s}</span>
            <button className="text-white/70 hover:text-white" onClick={() => remove(s)}>×</button>
          </div>
        ))}
      </div>
    </div>
  )
}


