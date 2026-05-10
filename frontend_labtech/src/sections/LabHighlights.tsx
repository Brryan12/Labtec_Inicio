import { motion } from 'framer-motion'
import { TreeDeciduous, Satellite, BookOpen, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, scaleIn } from '../animations/variants'

const highlights = [
    {
        icon: Satellite,
        title: 'Teledetección',
        description: 'Procesamiento de imágenes satelitales en series de tiempo para monitoreo continuo del bosque.',
        iconBg: 'bg-una-red',
    },
    {
        icon: TreeDeciduous,
        title: 'Bosques CR',
        description: 'Indicadores nacionales de cobertura, uso del suelo y cambio en ecosistemas forestales.',
        iconBg: 'bg-una-navy',
    },
    {
        icon: BookOpen,
        title: 'Investigación',
        description: 'Proyectos nacionales e internacionales en sensoramiento remoto y gestión forestal.',
        iconBg: 'bg-una-red-mid',
    },
    {
        icon: Users,
        title: 'Colaboraciones',
        description: 'Trabajo articulado con SINAC, PNUD, USFS, Banco Central y otras instituciones.',
        iconBg: 'bg-una-dark-gray',
    },
]

export function LabHighlights() {
    const { ref, inView } = useScrollAnimation()

    return (
        <section ref={ref} className="highlights">
            <motion.div
                className="highlights__grid"
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {highlights.map((item) => {
                    const Icon = item.icon
                    return (
                        <motion.div key={item.title} variants={scaleIn} className="highlight-card">
                            <div className={`highlight-card__icon ${item.iconBg}`}>
                                <Icon size={22} color="white" />
                            </div>
                            <h3 className="highlight-card__title">{item.title}</h3>
                            <p className="highlight-card__desc">{item.description}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}