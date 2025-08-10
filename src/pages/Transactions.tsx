import { usePortfolio } from '../store/portfolio'

export default function TransactionsPage() {
  const txs = usePortfolio(s => s.transactions)
  return (
    <div className="card-surface p-4">
      <div className="text-lg font-semibold mb-3">Recent Transactions</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-white/60">
            <tr>
              <th className="text-left py-2">Time</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Asset</th>
              <th className="text-right py-2">Qty</th>
              <th className="text-right py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {txs.map(tx => (
              <tr key={tx.id} className="border-t border-white/10">
                <td className="py-2">{new Date(tx.time).toLocaleString()}</td>
                <td className="capitalize py-2">{tx.type}</td>
                <td className="py-2">{tx.asset}</td>
                <td className="py-2 text-right">{tx.qty}</td>
                <td className="py-2 text-right">${tx.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


