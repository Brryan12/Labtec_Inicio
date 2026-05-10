import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { LAB_INFO } from '../data/lab'
import { slideInLeft, fadeInUp } from '../animations/variants'

export function MissionVision() {
    const { ref, inView } = useScrollAnimation(0.1)

    return (
        <section ref={ref} className="mission-vision">
            <div className="mission-vision__grid">

                {/* MISIÓN */}
                <motion.div
                    className="mission-box"
                    variants={slideInLeft}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <div className="mv-box__icon-wrap">
                        <div className="mv-box__icon bg-una-red">
                            <Target size={20} color="white" />
                        </div>
                        <h2 className="mv-box__title">Misión</h2>
                    </div>
                    <p className="mv-box__text">{LAB_INFO.mission}</p>
                </motion.div>

                {/* VISIÓN */}
                <motion.div
                    className="vision-box"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <div className="mv-box__icon-wrap">
                        <div className="mv-box__icon bg-una-navy">
                            <Eye size={20} color="white" />
                        </div>
                        <h2 className="mv-box__title">Visión</h2>
                    </div>
                    <p className="mv-box__text">{LAB_INFO.vision}</p>
                </motion.div>

            </div>
        </section>
    )
}