import { cn } from '../../utils/cn'

interface SectionTitleProps {
    label?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    className?: string
}

export function SectionTitle({ label, title, subtitle, align = 'left', className }: SectionTitleProps) {
    return (
        <div className={cn('section-title', align === 'center' && 'section-title--center', className)}>
            {label && <p className="section-label">{label}</p>}
            <h2 className="section-title__heading">{title}</h2>
            <div className="section-title__line" />
            {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
        </div>
    )
}