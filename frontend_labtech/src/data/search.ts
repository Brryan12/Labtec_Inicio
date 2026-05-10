import type { SearchEntry } from '../types'

// Migrado desde search.json + ampliado
export const SEARCH_ENTRIES: SearchEntry[] = [
    {
        objectID: 'home',
        href: '/',
        title: 'LabTEc — Inicio',
        section: 'Inicio',
        text: 'Laboratorio de Teledetección de Ecosistemas. Monitoreo del bosque en Costa Rica mediante sensores remotos.',
    },
    {
        objectID: 'blog',
        href: '/blog',
        title: 'Blog',
        section: 'Blog',
        text: 'Este sitio tiene el propósito de contribuir al uso y manejo de datos.',
    },
    {
        objectID: 'proyectos',
        href: '/proyectos',
        title: 'Proyectos',
        section: 'Investigación',
        text: 'INTERLACE, detección acústica, gestión de bosques, ostricultura.',
    },
]