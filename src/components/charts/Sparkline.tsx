import { Line, LineChart, ResponsiveContainer } from 'recharts'

export default function Sparkline({ points, positive }: { points: number[]; positive: boolean }) {
  const data = points.map((v, i) => ({ i, v }))
  const stroke = positive ? '#22ff8b' : '#ff6b6b'
  return (
    <div className="h-10 w-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="v" stroke={stroke} dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


