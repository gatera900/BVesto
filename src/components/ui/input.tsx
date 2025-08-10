import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          'h-10 w-full rounded-lg bg-white/5 border border-white/10 px-3 text-sm outline-none',
          'placeholder:text-slate-400 focus:border-brand-400 focus:ring-1 focus:ring-brand-500/40',
          className
        )}
        {...props}
      />
    )
  }
)


