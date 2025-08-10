import { create } from 'zustand'

type SettingsState = {
  currency: 'USD' | 'EUR' | 'INR'
  rates: Record<string, number>
  theme: 'dark' | 'light'
  setCurrency: (c: SettingsState['currency']) => void
  toggleTheme: () => void
}

export const useSettings = create<SettingsState>((set, get) => ({
  currency: 'USD',
  rates: { USD: 1, EUR: 0.92, INR: 83.2 },
  theme: 'dark',
  setCurrency: (c) => set({ currency: c }),
  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    if (next === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    set({ theme: next })
  }
}))


