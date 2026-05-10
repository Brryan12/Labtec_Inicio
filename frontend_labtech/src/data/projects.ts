import type { Project } from '../types'

export const PROJECTS: Project[] = [
    {
        id: 'interlace',
        title: 'INTERLACE',
        category: 'cooperacion',
        description: 'Cooperación internacional para restaurar y conectar entornos urbanos en América Latina y Europa.',
        status: 'activo',
        tags: ['Restauración', 'Urbano', 'Cooperación internacional'],
    },
    {
        id: 'deteccion-acustica',
        title: 'Detección Acústica Automatizada',
        category: 'investigacion',
        description: 'Herramienta para el monitoreo biológico y la gestión ambiental participativa: caso del pájaro campana en el Corredor Biológico Amistosa.',
        status: 'activo',
        tags: ['Biodiversidad', 'Monitoreo', 'Acústica'],
    },
    {
        id: 'cambio-climatico-educacion',
        title: 'Cambiando el Clima',
        category: 'educacion',
        description: 'Asegurando la calidad de estrategias ambientales en la educación superior de América Latina.',
        status: 'activo',
        tags: ['Educación superior', 'Cambio climático', 'LATAM'],
    },
    {
        id: 'ostricultura',
        title: 'Ostricultura en el Golfo de Nicoya',
        category: 'investigacion',
        description: 'Fortalecimiento de la ostricultura mediante estudio comparativo de parámetros ambientales en los sitios de desarrollo ostrícola.',
        status: 'activo',
        tags: ['Acuicultura', 'Nicoya', 'Parámetros ambientales'],
    },
    {
        id: 'bovino',
        title: 'Gestión de Fincas Bovinas',
        category: 'investigacion',
        description: 'Sistema automatizado de gestión e información para el mejoramiento productivo y económico pos-pandemia COVID-19.',
        status: 'activo',
        tags: ['Ganadería', 'Automatización', 'Sostenibilidad'],
    },
    {
        id: 'gestion-bosques',
        title: 'Programa Gestión de Bosques (PGB)',
        category: 'investigacion',
        description: 'Gestión de bosques para la mitigación y adaptación a la variabilidad y cambio climático.',
        status: 'activo',
        tags: ['Bosques', 'Cambio climático', 'Mitigación'],
    },
]