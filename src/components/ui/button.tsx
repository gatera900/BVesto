import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Btn(
  { className, variant = 'default', size = 'md', ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/40 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-brand-500 text-slate-900 hover:bg-brand-400 shadow-glow',
    secondary: 'bg-white/10 text-white hover:bg-white/15',
    ghost: 'bg-transparent hover:bg-white/10 text-slate-200',
    danger: 'bg-red-500/90 text-white hover:bg-red-500'
  }
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10'
  }
  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
})


