import { cn } from '../../utils/cn'

type BadgeVariant = 'default' | 'red' | 'navy' | 'outline'

interface BadgeProps {
    variant?: BadgeVariant
    children: React.ReactNode
    className?: string
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
    return (
        <span className={cn('badge', `badge-${variant}`, className)}>
      {children}
    </span>
    )
}