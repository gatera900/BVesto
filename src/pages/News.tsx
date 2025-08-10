const news = [
  { id: 'n1', title: 'Tech stocks rally as AI demand surges', source: 'MarketWatch', time: '2h ago' },
  { id: 'n2', title: 'Bond yields ease ahead of Fed minutes', source: 'Bloomberg', time: '4h ago' },
  { id: 'n3', title: 'Gold steady amid inflation concerns', source: 'Reuters', time: '6h ago' }
]

export default function NewsPage() {
  return (
    <div className="card-surface p-4 space-y-3">
      <div className="text-lg font-semibold">News Feed (Mock)</div>
      {news.map(n => (
        <div key={n.id} className="rounded-lg bg-white/5 p-3">
          <div className="font-medium">{n.title}</div>
          <div className="text-sm text-white/60">{n.source} • {n.time}</div>
        </div>
      ))}
    </div>
  )
}


