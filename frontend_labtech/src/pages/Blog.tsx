import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../components/ui/SectionTitle'
import { staggerContainer, fadeInUp } from '../animations/variants'
import type { BlogPost } from '../types'

const POSTS: BlogPost[] = [
    {
        id: '3',
        title: 'Introducción a la teledetección con Radar de Apertura Sintética (SAR)',
        date: 'Julio 2026',
        excerpt: 'Curso de aprovechamiento presencial de 30 horas sobre fundamentos, descarga, preprocesamiento y aplicaciones prácticas de imágenes de radar (SAR) en Costa Rica.',
        tags: ['Curso', 'Teledetección', 'SAR', 'SNAP'],
        href: '/blog/curso-sar',
    },
    {
        id: '2',
        title: 'Crear una página web geoespacial con GitHub Pages',
        date: 'Junio 2026',
        excerpt: 'Guía paso a paso para publicar una página web sencilla con HTML, CSS y GitHub Pages, pensada para personas que trabajan con SIG, cartografía, teledetección, análisis territorial o gestión ambiental.',
        tags: ['Tutorial', 'GitHub Pages', 'Web SIG'],
        href: './blog/GitHub Pages',
    },
    {
        id: '1',
        title: 'Bienvenidos al LabTEc Wiki',
        date: 'Septiembre 2025',
        excerpt: 'Este sitio tiene el propósito de contribuir al uso y manejo de datos geoespaciales en el contexto del monitoreo forestal en Costa Rica.',
        tags: ['Anuncio', 'Datos'],
        href: '',
    },
]

export function Blog() {
    return (
        <main className="blog-page">

            {/* PAGE HERO — clase reutilizable definida en home.css */}
            <div className="page-hero">
                <div className="page-hero__inner">
                    <p className="page-hero__label">Publicaciones</p>
                    <h1 className="page-hero__title">Blog</h1>
                    <p className="hero__description">Monitoreo del bosque en Costa Rica mediante sensores remotos y series de tiempo satelitales.</p>
                </div>
            </div>

            <div className="blog__inner">
                <SectionTitle
                    title="Publicaciones"
                    subtitle="Actualizaciones, tutoriales y recursos del LabTEc."
                />

                <motion.div
                    className="blog__list"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {POSTS.map((post) => (
                        <motion.article key={post.id} variants={fadeInUp} className="blog-post">
                            <time className="blog-post__date">{post.date}</time>
                            <h2 className="blog-post__title">
                                {post.href ? (
                                    post.href.startsWith('/') ? (
                                        <Link to={post.href} className="blog-post__title-link">
                                            {post.title}
                                        </Link>
                                    ) : (
                                        <a href={post.href} className="blog-post__title-link">
                                            {post.title}
                                        </a>
                                    )
                                ) : (
                                    post.title
                                )}
                            </h2>
                            <p className="blog-post__excerpt">{post.excerpt}</p>
                            <div className="blog-post__tags">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="blog-post__tag">{tag}</span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>

        </main>
    )
}