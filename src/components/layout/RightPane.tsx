import { useMemo, useState } from 'react'
import type { Fund } from '../../App'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

export default function RightPane({ fund }: { fund: Fund }) {
  const [plan, setPlan] = useState<'sip' | 'onetime'>('sip')
  const [amount, setAmount] = useState<string>('2000')
  const [date, setDate] = useState<string>(() => new Date().toISOString().slice(0, 10))
  const [method, setMethod] = useState<'card' | 'upi'>('card')

  const investedText = useMemo(() => `$${Math.round(fund.invested).toLocaleString()}`, [fund])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-white/70">Selected Fund</div>
            <div className="text-lg font-semibold">{fund.name}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/60">Invested</div>
            <div className="font-semibold">{investedText}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setPlan('sip')}
              className={`rounded-lg px-3 py-2 text-sm ${plan === 'sip' ? 'bg-brand-500 text-slate-900' : 'bg-white/10 hover:bg-white/15'}`}
            >Monthly SIP</button>
            <button
              onClick={() => setPlan('onetime')}
              className={`rounded-lg px-3 py-2 text-sm ${plan === 'onetime' ? 'bg-brand-500 text-slate-900' : 'bg-white/10 hover:bg-white/15'}`}
            >One-Time</button>
          </div>

          <div>
            <div className="text-sm mb-1">Amount</div>
            <Input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
          </div>

          <div>
            <div className="text-sm mb-1">Date</div>
            <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>

          <div className="space-y-2">
            <div className="text-sm">Payment Method</div>
            <div className="rounded-xl border border-white/10 p-3 bg-white/5">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="method" checked={method==='card'} onChange={() => setMethod('card')} />
                <span>Card ending ••42</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer mt-2">
                <input type="radio" name="method" checked={method==='upi'} onChange={() => setMethod('upi')} />
                <span>UPI (demo@bank)</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button variant="secondary">Add to Cart</Button>
            <Button>Start {plan === 'sip' ? 'SIP' : 'Investment'}</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


