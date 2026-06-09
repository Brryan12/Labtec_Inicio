import type { NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
    { label: 'Inicio', href: '/' },
    {
        label: 'Laboratorio',
        href: '#',
        children: [
            { label: 'Misión y Visión', href: '/#mision' },
            { label: 'Equipo', href: '/#equipo' },
            { label: 'Líneas de Investigación', href: '/#investigacion' }
        ],
    },
    {
        label: 'Trabajos',
        href: '#',
        children: [
            { label: 'Historico fuegos', href: './historico-fuegos-acg/scripts/', external: true },
            { label: 'DashBoard Cafe 2021-2022', href: './DashBoardCafe/', external: true },
        ],
    },
    {
        label: 'Ejercicios reproducibles',
        href: '#',
        children: [
            { label: 'El Niño-Oscilación del Sur (ENOS)', href: './enos/', external: true },
            { label: 'Tutorial Copernicus incendio', href: './CDSE/CDSE_caso_incendio', external: true },
            { label: 'Ecosistema Copernicus', href: './CDSE/Explorar_colecciones', external: true },
        ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
]

export const EXTERNAL_LINKS: NavItem[] = [
    { label: 'UNA', href: 'https://www.una.ac.cr', external: true },
    { label: 'INISEFOR', href: 'https://www.inisefor.una.ac.cr', external: true },
]