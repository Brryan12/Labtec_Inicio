import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SectionTitle } from '../components/ui/SectionTitle'
import { COLLABORATORS } from '../data/collaborators'
import { staggerContainer, scaleIn } from '../animations/variants'

export function Collaborators() {
    const { ref, inView } = useScrollAnimation()

    return (
        <section ref={ref} className="collaborators">
            <div className="collaborators__inner">

                <SectionTitle
                    align="center"
                    label="Alianzas"
                    title="Instituciones Colaboradoras"
                    subtitle="Experiencia de trabajo articulado con instituciones nacionales e internacionales."
                />

                <motion.div
                    className="collaborators__list"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {COLLABORATORS.map((collab) => (
                        <motion.div
                            key={collab.acronym}
                            variants={scaleIn}
                        >
                            {collab.url ? (
                                <a
                                    href={collab.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="collab-tag"
                                >
                                    <span className="collab-tag__acronym">
                                        {collab.acronym}
                                    </span>

                                    <span className="collab-tag__name">
                                        {collab.name}
                                    </span>

                                    <ExternalLink size={10} />
                                </a>
                            ) : (
                                <div className="collab-tag">
                                    <span className="collab-tag__acronym">
                                        {collab.acronym}
                                    </span>

                                    <span className="collab-tag__name">
                                        {collab.name}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}