import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = ['#22ff8b', '#00d1ff', '#ffdf6b', '#ff6b6b', '#c084fc']

export default function AllocationPie({ data }: { data: { label: string; value: number }[] }) {
  return (
    <div className="h-52 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip contentStyle={{ background: 'rgba(18,24,33,.9)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12 }} />
          <Pie data={data} dataKey="value" nameKey="label" outerRadius={80} innerRadius={50} stroke="none">
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


