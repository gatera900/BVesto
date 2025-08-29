import { Card, CardContent, CardHeader } from "../ui/card";
import { usePortfolio } from "../../store/portfolio";

export default function RecentTransactions() {
  const txs = usePortfolio((s) => s.transactions).slice(0, 5);
  return (
    <Card>
      <CardHeader>
        <div className="font-semibold">Recent Transactions</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          {txs.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0"
            >
              <div className="flex items-center gap-2">
                <span className="capitalize bg-white/10 px-2 py-0.5 rounded-md">
                  {tx.type}
                </span>
                <span>{tx.asset}</span>
              </div>
              <div className="text-white/70">
                {new Date(tx.time).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
