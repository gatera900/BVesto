import { cn } from '../../lib/utils'
import { PropsWithChildren } from 'react'

export function Card({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('card-surface', className)}>{children}</div>
}

export function CardHeader({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('px-5 pt-4 pb-2', className)}>{children}</div>
}

export function CardContent({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('px-5 pb-4', className)}>{children}</div>
}

export function CardFooter({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('px-5 pb-4 pt-2', className)}>{children}</div>
}


