import { create } from 'zustand'

export type Transaction = {
  id: string
  time: string
  type: 'buy' | 'sell' | 'sip'
  asset: string
  qty: number
  price: number
}

type Allocation = { label: string; value: number }

type PortfolioState = {
  value: number
  allocations: Allocation[]
  transactions: Transaction[]
  watchlist: string[]
  addToWatchlist: (id: string) => void
  removeFromWatchlist: (id: string) => void
  addTransaction: (tx: Transaction) => void
}

export const usePortfolio = create<PortfolioState>((set) => ({
  value: 1365837,
  allocations: [
    { label: 'Equity', value: 56 },
    { label: 'Debt', value: 18 },
    { label: 'International', value: 14 },
    { label: 'Gold', value: 7 },
    { label: 'Cash', value: 5 }
  ],
  transactions: [
    { id: 't1', time: new Date().toISOString(), type: 'buy', asset: 'Vanguard 500', qty: 10, price: 490 },
    { id: 't2', time: new Date(Date.now() - 86400000).toISOString(), type: 'sell', asset: 'Fidelity Bond', qty: 20, price: 92 },
    { id: 't3', time: new Date(Date.now() - 2*86400000).toISOString(), type: 'sip', asset: 'Dodge & Cox', qty: 1, price: 2000 }
  ],
  watchlist: ['AAPL', 'MSFT', 'GOOGL'],
  addToWatchlist: (id) => set(s => ({ watchlist: Array.from(new Set([...s.watchlist, id])) })),
  removeFromWatchlist: (id) => set(s => ({ watchlist: s.watchlist.filter(x => x !== id) })),
  addTransaction: (tx) => set(s => ({ transactions: [tx, ...s.transactions] }))
}))


