import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utils/cn'
import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
    size?: Size
    asChild?: boolean
}

export function Button({
                           variant = 'primary',
                           size = 'md',
                           className,
                           children,
                           asChild = false,
                           ...props
                       }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={cn('btn', `btn-${variant}`, `btn-${size}`, className)}
            {...props}
        >
            {children}
        </Comp>
    )
}