import { Card, CardContent, CardHeader } from "../ui/card";
import AllocationPie from "../charts/AllocationPie";
import { usePortfolio } from "../../store/portfolio";

export default function AllocationCard() {
  const data = usePortfolio((s) => s.allocations);
  return (
    <Card>
      <CardHeader>
        <div className="font-semibold">Asset Allocation</div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6">
            <AllocationPie data={data} />
          </div>
          <div className="col-span-12 sm:col-span-6 grid grid-cols-2 gap-2">
            {data.map((a) => (
              <div key={a.label} className="rounded-lg bg-white/5 p-3">
                <div className="text-white/60 text-sm">{a.label}</div>
                <div className="text-lg font-semibold">{a.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
