import { useState } from 'react'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Input } from '../components/ui/input'

function ROICalc() {
  const [initial, setInitial] = useState(10000)
  const [final, setFinal] = useState(12500)
  const roi = ((final - initial) / initial) * 100
  return (
    <Card>
      <CardHeader><div className="font-semibold">ROI Calculator</div></CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div><div className="text-sm mb-1">Initial</div><Input type="number" value={initial} onChange={e=>setInitial(+e.target.value)} /></div>
          <div><div className="text-sm mb-1">Final</div><Input type="number" value={final} onChange={e=>setFinal(+e.target.value)} /></div>
        </div>
        <div className="text-white/80">ROI: {roi.toFixed(2)}%</div>
      </CardContent>
    </Card>
  )
}

function RiskAssessment() {
  const [risk, setRisk] = useState(5)
  return (
    <Card>
      <CardHeader><div className="font-semibold">Risk Assessment (Mock)</div></CardHeader>
      <CardContent>
        <input type="range" min={1} max={10} value={risk} onChange={e=>setRisk(+e.target.value)} className="w-full" />
        <div className="text-sm text-white/70 mt-2">Risk tolerance: {risk}/10</div>
      </CardContent>
    </Card>
  )
}

function Compare() {
  const [a, setA] = useState('AAPL')
  const [b, setB] = useState('MSFT')
  return (
    <Card>
      <CardHeader><div className="font-semibold">Asset Comparison (Mock)</div></CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div><div className="text-sm mb-1">Asset A</div><Input value={a} onChange={e=>setA(e.target.value)} /></div>
          <div><div className="text-sm mb-1">Asset B</div><Input value={b} onChange={e=>setB(e.target.value)} /></div>
        </div>
        <div className="text-sm text-white/70">Volatility, P/E, Yield: mock metrics for {a} vs {b}</div>
      </CardContent>
    </Card>
  )
}

export default function ToolsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ROICalc />
      <RiskAssessment />
      <Compare />
    </div>
  )
}


