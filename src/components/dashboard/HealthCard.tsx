import { ShieldCheck } from 'lucide-react'
import { Card, CardContent } from '../../components/ui/card'

export default function HealthCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-4 p-2">
          <div className="h-12 w-12 rounded-lg bg-green-500/15 text-green-300 grid place-items-center">
            <ShieldCheck />
          </div>
          <div>
            <div className="font-semibold">Portfolio Health Analysis</div>
            <div className="text-sm text-white/70">Moderate risk profile. Diversification is good; consider increasing international exposure by 5-10%.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


