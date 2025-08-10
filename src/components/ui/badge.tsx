import { cn } from '../../lib/utils'

export function Badge({ children, className }: { children: any; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-[#00d1ff]/80 text-slate-900 px-2 py-0.5 text-xs font-semibold',
        className
      )}
    >
      {children}
    </span>
  )
}


