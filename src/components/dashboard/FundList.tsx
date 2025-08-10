import { Card, CardContent, CardHeader } from '../../components/ui/card'
import FundRow from './FundRow'
import type { Fund } from '../../App'

export default function FundList({ funds, selectedId, onSelect }: { funds: Fund[]; selectedId?: string; onSelect: (id: string) => void }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="font-semibold">Your Funds</div>
          <div className="text-sm text-white/60">{funds.length} items</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {funds.map(f => (
            <FundRow
              key={f.id}
              {...f}
              active={f.id === selectedId}
              onClick={() => onSelect(f.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


