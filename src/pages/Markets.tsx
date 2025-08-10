import { useEffect, useState } from 'react'

type Ticker = { symbol: string; price: number; change: number }

export default function MarketsPage() {
  const [tickers, setTickers] = useState<Ticker[]>([
    { symbol: 'AAPL', price: 220.12, change: 0.54 },
    { symbol: 'MSFT', price: 421.44, change: -0.21 },
    { symbol: 'NVDA', price: 124.33, change: 1.42 }
  ])

  useEffect(() => {
    const id = setInterval(() => {
      setTickers(prev => prev.map(t => ({
        ...t,
        price: +(t.price * (1 + (Math.random()-0.5)/500)).toFixed(2),
        change: +((Math.random()-0.5)*2).toFixed(2)
      })))
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="card-surface p-4">
      <div className="text-lg font-semibold mb-3">Live Market Data (Mock)</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {tickers.map(t => (
          <div key={t.symbol} className="rounded-xl bg-white/5 p-3">
            <div className="text-white/70 text-sm">{t.symbol}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-semibold">${t.price}</div>
              <div className={t.change>=0? 'text-[#22ff8b]' : 'text-red-400'}>
                {t.change>=0? '+' : ''}{t.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


