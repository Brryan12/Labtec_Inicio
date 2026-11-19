import { createHashRouter } from 'react-router-dom'
import { MainLayout }  from '../layouts/MainLayout'
import { Home }        from '../../pages/Home'
import { Blog }        from '../../pages/Blog'
import { Contact }     from '../../pages/Contact'
import { CursoSar }    from '../../pages/CursoSar'

export const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true,          element: <Home /> },
            { path: 'blog',         element: <Blog /> },
            { path: 'blog/curso-sar', element: <CursoSar /> },
            { path: 'contacto',     element: <Contact /> },
            // Rutas futuras: /lab/mision, /lab/equipo, /recursos/*
        ],
    },
])