import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card, CardBody } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { PROJECTS } from '../data/projects'
import { staggerContainer, fadeInUp } from '../animations/variants'

const featured = PROJECTS.slice(0, 3)

const categoryLabel: Record<string, string> = {
    investigacion: 'Investigación',
    cooperacion:   'Cooperación',
    educacion:     'Educación',
}

export function FeaturedProjects() {
    const { ref, inView } = useScrollAnimation()

    return (
        <section ref={ref} className="featured-projects">
            <div className="featured-projects__inner">

                <div className="featured-projects__header">
                    <SectionTitle
                        label="Investigación"
                        title="Proyectos Destacados"
                        className="mb-0"
                    />
                    <Button asChild variant="outline" size="sm">
                        <Link to="/proyectos">
                            Ver todos <ArrowRight size={14} />
                        </Link>
                    </Button>
                </div>

                <motion.div
                    className="featured-projects__grid"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {featured.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp}>
                            <Card hover className="h-full flex flex-col">
                                <div className="card-accent-top" />
                                <CardBody className="flex flex-col flex-1 gap-3">
                                    <Badge variant="red">{categoryLabel[project.category]}</Badge>
                                    <h3 className="card-project-title">{project.title}</h3>
                                    <p className="card-project-desc">{project.description}</p>
                                    <div className="card-project-tags">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="default">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}