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
        label: 'Trabajos',
        href: '#',
        children: [
            { label: 'Historico Fuegos', href: '/trabajos/historico-fuegos' },
            { label: 'Dash-Board Cafe 2021-2022', href: '/trabajos/dashboard-cafe-2021-2022' },
        ],
    },
    {
        label: 'Ejercicios Reproducibles',
        href: '#',
        children: [
            { label: 'El Niño Oscilación del Sur (ENOS)', href: '/ejercicios/enos' },
            { label: 'Tutorial Copernicus Incendio', href: '/ejercicios/tutorial-copernicus-incendio' },
            { label: 'Ecosistema Copernicus', href: '/ejercicios/ecosistema-copernicus' },
        ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
]

export const EXTERNAL_LINKS: NavItem[] = [
    { label: 'UNA', href: 'https://www.una.ac.cr', external: true },
    { label: 'INISEFOR', href: 'https://www.inisefor.una.ac.cr', external: true },
]