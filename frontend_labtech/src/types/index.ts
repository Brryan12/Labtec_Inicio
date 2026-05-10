export interface NavItem {
    label: string
    href: string
    external?: boolean
    children?: NavItem[]
}

export interface Project {
    id: string
    title: string
    category: 'investigacion' | 'cooperacion' | 'educacion'
    description: string
    status: 'activo' | 'completado'
    tags: string[]
    link?: string
}

export interface Collaborator {
    name: string
    acronym: string
    url?: string
    type: 'nacional' | 'internacional'
}

export interface TeamMember {
    name: string
    role: string
    email?: string
    phone?: string
}

export interface ResearchLine {
    id: string
    title: string
    description: string
    icon: string          // nombre del ícono lucide-react
}

export interface BlogPost {
    id: string
    title: string
    date: string
    excerpt: string
    href: string
    tags: string[]
}

// Para el servicio/repositorio de datos
export interface SearchEntry {
    objectID: string
    href: string
    title: string
    section: string
    text: string
}