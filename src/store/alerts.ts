import { create } from 'zustand'

export type Alert = { id: string; type: 'price' | 'news' | 'performance' | 'order'; target?: string; threshold?: number; enabled: boolean }

type AlertsState = {
  alerts: Alert[]
  add: (a: Alert) => void
  toggle: (id: string) => void
  remove: (id: string) => void
}

export const useAlerts = create<AlertsState>((set) => ({
  alerts: [
    { id: 'a1', type: 'price', target: 'AAPL', threshold: 200, enabled: true },
    { id: 'a2', type: 'news', enabled: true },
    { id: 'a3', type: 'performance', threshold: 10, enabled: false }
  ],
  add: (a) => set(s => ({ alerts: [a, ...s.alerts] })),
  toggle: (id) => set(s => ({ alerts: s.alerts.map(x => x.id===id? { ...x, enabled: !x.enabled } : x) })),
  remove: (id) => set(s => ({ alerts: s.alerts.filter(x => x.id !== id) }))
}))


