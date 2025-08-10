import { cn } from '../../lib/utils'

export default function Avatar({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  return (
    <div className={cn('h-9 w-9 rounded-full overflow-hidden ring-2 ring-white/10', className)}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-white/10 grid place-items-center text-sm">A</div>
      )}
    </div>
  )
}


