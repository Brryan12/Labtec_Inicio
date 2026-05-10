import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Button } from '../components/ui/Button'
import { LAB_INFO } from '../data/lab'
import { fadeInUp } from '../animations/variants'

export function ContactBanner() {
    const { ref, inView } = useScrollAnimation(0.1)

    return (
        <section ref={ref} className="contact-banner">
            <motion.div
                className="contact-banner__inner"
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <p className="contact-banner__label">Contacto</p>

                <h2 className="contact-banner__title">
                    ¿Interesado en colaborar?
                </h2>

                <p className="contact-banner__desc">
                    El LabTEc está abierto a colaboraciones nacionales e internacionales
                    en sensoramiento remoto y gestión forestal.
                </p>

                <div className="contact-banner__meta">
                    <a href={`mailto:${LAB_INFO.email}`} className="contact-banner__meta-item">
                        <Mail size={16} />
                        {LAB_INFO.email}
                    </a>
                    <span className="contact-banner__divider">|</span>
                    <span className="contact-banner__meta-item">
            <Phone size={16} />
                        {LAB_INFO.phone}
          </span>
                </div>

                <Button
                    asChild
                    size="lg"
                    className="btn-outline-white"
                >
                    <Link to="/contacto">Contáctenos</Link>
                </Button>

            </motion.div>
        </section>
    )
}