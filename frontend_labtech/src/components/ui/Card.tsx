import { cn } from '../../utils/cn'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
    return (
        <div className={cn('card', hover && 'card-hover', className)} {...props}>
            {children}
        </div>
    )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('card-header', className)} {...props}>{children}</div>
}

export function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('card-body', className)} {...props}>{children}</div>
}