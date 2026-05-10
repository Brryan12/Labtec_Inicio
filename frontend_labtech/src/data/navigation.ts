import type { NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
    { label: 'Inicio', href: '/' },
    {
        label: 'Laboratorio',
        href: '#',
        children: [
            { label: 'Misión y Visión',         href: '/#mision' },
            { label: 'Equipo',                  href: '/#equipo' },
            { label: 'Líneas de Investigación', href: '/#investigacion' }
        ],
    },
    {
        label: 'Proyectos',
        href: '/proyectos',
    },
    {
        label: 'Recursos',
        href: '#',
        children: [
            { label: 'Geoprocesamiento', href: '#' }, // Pendiente -> /recursos/geoprocesamiento
            { label: 'Ejercicios Reproducibles', href: '#' }, // Pendiente -> /recursos/ejercicios
            { label: 'Trabajos', href: '#' }, // Pendiente -> /recursos/trabajos
        ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
]

export const EXTERNAL_LINKS: NavItem[] = [
    { label: 'UNA', href: 'https://www.una.ac.cr', external: true },
    { label: 'INISEFOR', href: 'https://www.inisefor.una.ac.cr', external: true },
]