import { motion } from 'framer-motion'
import { SectionTitle } from '../components/ui/SectionTitle'
import { staggerContainer, fadeInUp } from '../animations/variants'

const POSTS = [
    {
        id: '1',
        title: 'Bienvenidos al LabTEc Wiki',
        date: 'Septiembre 2025',
        excerpt: 'Este sitio tiene el propósito de contribuir al uso y manejo de datos geoespaciales en el contexto del monitoreo forestal en Costa Rica.',
        tags: ['Anuncio', 'Datos'],
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
                            <h2 className="blog-post__title">{post.title}</h2>
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