import { createBrowserRouter } from 'react-router-dom'
import { MainLayout }  from '../layouts/MainLayout'
import { Home }        from '../../pages/Home'
import { Projects }    from '../../pages/Projects'
import { Blog }        from '../../pages/Blog'
import { Contact }     from '../../pages/Contact'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true,          element: <Home /> },
            { path: 'proyectos',    element: <Projects /> },
            { path: 'blog',         element: <Blog /> },
            { path: 'contacto',     element: <Contact /> },
            // Rutas futuras: /lab/mision, /lab/equipo, /recursos/*
        ],
    },
])