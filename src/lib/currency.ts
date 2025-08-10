import { useSettings } from '../store/settings'

export function formatCurrency(amount: number): string {
  const { currency, rates } = useSettings.getState()
  const rate = rates[currency] ?? 1
  const converted = amount * rate
  return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(converted)
}


