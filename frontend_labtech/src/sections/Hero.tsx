import { motion } from 'framer-motion'
import { ChevronDown, Satellite } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { LAB_INFO } from '../data/lab'
import { fadeInUp, staggerContainer } from '../animations/variants'

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__bg">
                <img
                    src="https://adventuresinmapping.files.wordpress.com/2022/06/costarica.jpg"
                    alt="Mapa de Costa Rica"
                    className="hero__image"
                />
                {/* MÁSCARA — patrón de .img-bg.has-mask de INISEFOR y .t3-masthead::before de EDECA */}
                <div className="hero__overlay" />
            </div>

            {/* CONTENIDO */}
            <div className="hero__container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="hero__content"
                >
                    {/* Label pequeña — patrón "label-small" de INISEFOR */}
                    <motion.p variants={fadeInUp} className="hero__label">
                        <Satellite size={14} />
                        {LAB_INFO.institution}
                    </motion.p>

                    <motion.h1 variants={fadeInUp} className="hero__title">
                        {LAB_INFO.fullName}
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="hero__line" />

                    <motion.p variants={fadeInUp} className="hero__description">
                        {LAB_INFO.description}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="hero__actions">
                        <Button size="lg" className="btn-hero-primary" >
                            <Link to="/proyectos">Ver Proyectos</Link>
                        </Button>
                        <Button size="lg" className="btn-hero-primary" >
                            <Link to="/#mision">Conocer el Lab</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 z-10"
            >
                <ChevronDown size={28} />
            </motion.div>
        </section>

    )
}