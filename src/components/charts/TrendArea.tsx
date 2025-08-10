import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function TrendArea({ data }: { data: { t: number; v: number }[] }) {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22ff8b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22ff8b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{ background: 'rgba(18,24,33,.9)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12 }}
            labelFormatter={() => ''}
            formatter={(v: number) => [`$${v.toLocaleString()}`, 'Value']}
          />
          <Area type="monotone" dataKey="v" stroke="#22ff8b" fill="url(#trend)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}


