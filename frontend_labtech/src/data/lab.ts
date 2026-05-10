import type { TeamMember, ResearchLine } from '../types'

export const LAB_INFO = {
    name: 'LabTEc',
    fullName: 'Laboratorio de Teledetección de Ecosistemas',
    acronym: 'LabTEc-UNA',
    institution: 'INISEFOR — Universidad Nacional de Costa Rica',
    location: 'Heredia, Costa Rica',
    phone: '2562-4608',
    email: 'mauricio.vega.araya@una.ac.cr',
    institutionUrl: 'https://www.inisefor.una.ac.cr',
    officialUrl: 'https://www.inisefor.una.ac.cr/index.php/investigacion/laboratorios/teledeteccion-de-ecosistemas',

    mission: `Conformar un grupo interdisciplinario generador de conocimiento espacial en ecosistemas 
  boscosos que, a través del uso de sensores remotos, genera información e indicadores en series de 
  tiempo para el monitoreo del bosque en Costa Rica.`,

    vision: `Centro para el aprovechamiento, uso y análisis de tecnologías avanzadas de Teledetección 
  para el monitoreo del bosque, que proporciona la base de conocimiento a una amplia gama de 
  disciplinas científicas y tecnológicas. Somos personas interesadas en medir e identificar los 
  cambios en el bosque y sus relaciones con la sociedad.`,

    description: `Procesamos sistemáticamente imágenes satelitales en series de tiempo para generar 
  indicadores que son la base del monitoreo del bosque en Costa Rica. Promovemos proyectos de 
  investigación y educación a nivel nacional e internacional en materia de sensoramiento remoto.`,

    about: `En el Laboratorio se procesan sistemáticamente en forma de series de tiempo imágenes 
  satelitales de tal forma que se generan indicadores y procesos que son la base para el monitoreo del 
  bosque en Costa Rica. Mediante el Laboratorio se promueve el desarrollo proyectos de investigación y 
  educación a nivel nacional e internacional en materia del sensoramiento remoto. Por medio de la investigación 
  científica, se pretende promover las publicaciones académicas, y la entrega de educación de alta calidad.   
  \n\nEl interés de investigación se centra en aplicaciones de sensoramiento remoto al monitoreo del bosque, 
  siendo de particular interés la dinámica del paisaje, uso del suelo y de la cubierta vegetal (LU/LC). LU/LC es un 
  tema científico interdisciplinario que incluye la realización de inventarios o muestreos para evaluar los cambios en 
  los bosques desde el espacio. Con esto se generan modelos donde se simulan los procesos en los ecosistemas, evaluando
  así las consecuencias de cambios observados y pronosticados, con el fin último de cuantificar las consecuencias de 
  los cambios sobre los bienes y servicios ambientales y la gestión de los recursos naturales.`,
} as const

export const TEAM: TeamMember[] = [
    {
        name: 'Dr. Mauricio Vega-Araya',
        role: 'Responsable del Laboratorio',
        email: 'mauricio.vega.araya@una.ac.cr',
        phone: '2562-4608',
    }
]

export const RESEARCH_LINES: ResearchLine[] = [
    {
        id: 'series-tiempo',
        title: 'Series de Tiempo Satelitales',
        description: 'Procesamiento sistemático de imágenes satelitales para generar indicadores de monitoreo continuo del bosque.',
        icon: 'LineChart',
    },
    {
        id: 'lu-lc',
        title: 'Uso y Cobertura del Suelo (LU/LC)',
        description: 'Inventarios y muestreos para evaluar cambios en bosques, uso del suelo y cubierta vegetal desde el espacio.',
        icon: 'Map',
    },
    {
        id: 'modelos-ecosistemas',
        title: 'Modelos de Ecosistemas',
        description: 'Simulación de procesos en ecosistemas para evaluar consecuencias de cambios observados y pronosticados.',
        icon: 'TreeDeciduous',
    },
    {
        id: 'servicios-ambientales',
        title: 'Servicios Ambientales',
        description: 'Cuantificación de bienes y servicios ambientales derivados de la gestión de recursos naturales.',
        icon: 'Leaf',
    },
]