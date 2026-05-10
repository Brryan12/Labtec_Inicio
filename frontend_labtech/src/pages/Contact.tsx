import { Mail, Phone, MapPin, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'

import { SectionTitle } from '../components/ui/SectionTitle'
import { LAB_INFO, TEAM } from '../data/lab'
import { fadeInUp, staggerContainer } from '../animations/variants'

export function Contact() {
    return (
        <main className="contact-page">

            {/* PAGE HERO */}
            <div className="page-hero">
                <div className="page-hero__inner">
                    <p className="page-hero__label">
                        Información
                    </p>

                    <h1 className="page-hero__title">
                        Contáctenos
                    </h1>
                </div>
            </div>

            <div className="contact__inner">
                <div className="contact__grid">

                    {/* IZQUIERDA */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <SectionTitle
                            title="Información de Contacto"
                        />

                        {TEAM.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={fadeInUp}
                                className="contact-card"
                            >
                                <div className="contact-card__member">

                                    <div className="contact-card__avatar">
                                        <User
                                            size={18}
                                            color="white"
                                        />
                                    </div>

                                    <div>
                                        <p className="contact-card__name">
                                            {member.name}
                                        </p>

                                        <p className="contact-card__role">
                                            {member.role}
                                        </p>
                                    </div>

                                </div>

                                <div className="contact-card__details">

                                    {member.phone && (
                                        <div className="contact-card__row">
                                            <Phone
                                                size={14}
                                                className="contact-card__icon"
                                            />

                                            <span>{member.phone}</span>
                                        </div>
                                    )}

                                    {member.email && (
                                        <div className="contact-card__row">
                                            <Mail
                                                size={14}
                                                className="contact-card__icon"
                                            />

                                            <a href={`mailto:${member.email}`}>
                                                {member.email}
                                            </a>
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        ))}

                        {/* INFO LAB */}
                        <motion.div
                            variants={fadeInUp}
                            className="contact-card"
                        >
                            <div className="contact-card__details">

                                <div className="contact-card__row">
                                    <MapPin
                                        size={14}
                                        className="contact-card__icon"
                                    />

                                    <span>
                                        Heredia, Costa Rica — INISEFOR-UNA
                                    </span>
                                </div>

                                <div className="contact-card__row">
                                    <Clock
                                        size={14}
                                        className="contact-card__icon"
                                    />

                                    <span>
                                        Lunes a viernes,
                                        8:00 am – 5:00 pm
                                    </span>
                                </div>

                                <div className="contact-card__row">
                                    <Mail
                                        size={14}
                                        className="contact-card__icon"
                                    />

                                    <a href={`mailto:${LAB_INFO.email}`}>
                                        {LAB_INFO.email}
                                    </a>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>

                    {/* DERECHA */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <SectionTitle title="Institución" />

                        <div className="contact-institution">

                            <p className="contact-institution__name">
                                INISEFOR — Universidad Nacional
                            </p>

                            <p>
                                Instituto de Investigación y Servicios Forestales
                                de la Universidad Nacional de Costa Rica.
                            </p>

                            <a
                                href={LAB_INFO.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-institution__link"
                            >
                                Ver página oficial del LabTEc →
                            </a>

                        </div>
                    </motion.div>

                </div>
            </div>

        </main>
    )
}