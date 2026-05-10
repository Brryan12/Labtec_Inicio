import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SectionTitle } from '../components/ui/SectionTitle'
import { RESEARCH_LINES } from '../data/lab'
import { staggerContainer, fadeInUp } from '../animations/variants'

export function ResearchLines() {
    const { ref, inView } = useScrollAnimation()

    return (
        <section ref={ref} className="research">
            <div className="research__inner">
                <SectionTitle
                    label="Líneas de Investigación"
                    title="¿Qué hacemos?"
                    subtitle="Aplicamos sensoramiento remoto al monitoreo del bosque, con especial interés en la dinámica del paisaje, uso del suelo y cubierta vegetal (LU/LC)."
                />

                <motion.div
                    className="research__grid"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {RESEARCH_LINES.map((line) => {
                        const Icon = Icons[
                            line.icon as keyof typeof Icons
                            ] as LucideIcon

                        return (
                            <motion.div
                                key={line.id}
                                variants={fadeInUp}
                                className="research-item"
                            >
                                <div className="research-item__icon-wrap">
                                    <Icon
                                        size={22}
                                        color="var(--color-red)"
                                    />
                                </div>

                                <div>
                                    <h3 className="research-item__title">
                                        {line.title}
                                    </h3>

                                    <p className="research-item__desc">
                                        {line.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}