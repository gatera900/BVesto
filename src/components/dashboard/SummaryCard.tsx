import { Card, CardContent, CardHeader } from '../../components/ui/card'
import TrendArea from '../charts/TrendArea'

type Perf = {
  currentValue: number
  investedValue: number
  totalReturns: number
  dailyChange: number
  projectedAnnualReturnPct: number
  trend: { t: number; v: number }[]
}

export default function SummaryCard({ data }: { data: Perf }) {
  const metrics = [
    { label: 'Current Value', value: `$${data.currentValue.toLocaleString()}` },
    { label: 'Invested Value', value: `$${data.investedValue.toLocaleString()}` },
    { label: 'Total Returns', value: `$${data.totalReturns.toLocaleString()}` },
    { label: 'Daily Change', value: `$${data.dailyChange.toLocaleString()}` },
    { label: 'Projected Annual', value: `${data.projectedAnnualReturnPct.toFixed(2)}%` }
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-white/80">Portfolio Overview</div>
            <div className="text-2xl font-semibold mt-1">${data.currentValue.toLocaleString()}</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full md:w-auto">
            {metrics.map(m => (
              <div key={m.label} className="rounded-lg bg-white/5 px-3 py-2 text-sm">
                <div className="text-white/60">{m.label}</div>
                <div className="font-semibold">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TrendArea data={data.trend} />
      </CardContent>
    </Card>
  )
}


