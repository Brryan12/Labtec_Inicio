import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card, CardBody } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { PROJECTS } from '../data/projects'
import { staggerContainer, fadeInUp } from '../animations/variants'
import type { Project } from '../types'

type Filter = 'all' | Project['category']

const FILTERS: { value: Filter; label: string }[] = [
    { value: 'all',          label: 'Todos' },
    { value: 'investigacion', label: 'Investigación' },
    { value: 'cooperacion',   label: 'Cooperación' },
    { value: 'educacion',     label: 'Educación' },
]

export function Projects() {
    const [active, setActive] = useState<Filter>('all')

    const filtered = active === 'all'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active)

    return (
        <main className="py-16 min-h-screen">
            {/* HERO de página — patrón de .ja-masthead de INISEFOR/EDECA */}
            <div className="page-hero">
                <div className="page-hero__inner">
                    <p className="page-hero__label">Investigación</p>
                    <h1 className="page-hero__title">Proyectos</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Proyectos Asociados" subtitle="Proyectos de investigación, cooperación y extensión del LabTEc." />

                {/* FILTROS */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {FILTERS.map((f) => (
                        <Button
                            key={f.value}
                            variant={active === f.value ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setActive(f.value)}
                        >
                            {f.label}
                        </Button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((project) => (
                            <motion.div key={project.id} variants={fadeInUp} layout>
                                <Card hover className="h-full flex flex-col">
                                    <div className="card-accent-top" />
                                    <CardBody className="flex flex-col flex-1 gap-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <Badge variant="red">{project.category}</Badge>
                                            <Badge variant={project.status === 'activo' ? 'navy' : 'default'}>
                                                {project.status}
                                            </Badge>
                                        </div>
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
                </AnimatePresence>
            </div>
        </main>
    )
}