import { useState } from 'react'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { usePortfolio } from '../store/portfolio'

export default function OrdersPage() {
  const addTx = usePortfolio(s => s.addTransaction)
  const [side, setSide] = useState<'buy' | 'sell'>('buy')
  const [type, setType] = useState<'market' | 'limit' | 'stop'>('market')
  const [asset, setAsset] = useState('Vanguard 500')
  const [qty, setQty] = useState(1)
  const [price, setPrice] = useState(100)
  const [msg, setMsg] = useState('')

  const submit = () => {
    if (type !== 'market' && price <= 0) { setMsg('Enter a valid price'); return }
    addTx({ id: crypto.randomUUID(), time: new Date().toISOString(), type: side, asset, qty, price })
    setMsg('Order accepted (mock). Executed instantly for demo.')
  }

  return (
    <Card>
      <CardHeader><div className="font-semibold">Place Order (Mock)</div></CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <button className={`rounded-lg px-3 py-2 ${side==='buy'?'bg-green-500/20':'bg-white/10'}`} onClick={()=>setSide('buy')}>Buy</button>
          <button className={`rounded-lg px-3 py-2 ${side==='sell'?'bg-red-500/20':'bg-white/10'}`} onClick={()=>setSide('sell')}>Sell</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div>
            <div className="text-sm mb-1">Asset</div>
            <Input value={asset} onChange={e=>setAsset(e.target.value)} />
          </div>
          <div>
            <div className="text-sm mb-1">Type</div>
            <select className="h-10 w-full rounded-lg bg-white/5 border border-white/10 px-3" value={type} onChange={e=>setType(e.target.value as any)}>
              <option value="market">Market</option>
              <option value="limit">Limit</option>
              <option value="stop">Stop-loss</option>
            </select>
          </div>
          <div>
            <div className="text-sm mb-1">Qty</div>
            <Input type="number" value={qty} onChange={e=>setQty(+e.target.value)} />
          </div>
          {type !== 'market' && (
            <div>
              <div className="text-sm mb-1">Price</div>
              <Input type="number" value={price} onChange={e=>setPrice(+e.target.value)} />
            </div>
          )}
        </div>
        <Button onClick={submit}>Submit</Button>
        {msg && <div className="text-sm text-white/80">{msg}</div>}
      </CardContent>
    </Card>
  )
}


