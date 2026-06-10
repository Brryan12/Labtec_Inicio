import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../../data/navigation'
import { LAB_INFO } from '../../data/lab'
import {cn} from "../../utils/cn";
import logoLabtec from '../../assets/logos/New_transp_labtec.png'
import logoUna from '../../assets/logos/LOGO-UNA1-Blanco (1).png'
import logoInisefor from '../../assets/logos/INISEFOR_LogoTransparente.png'

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const { pathname } = useLocation()

    const scrollToSection = (href: string) => {
        const hash = href.includes('#') ? href.split('#')[1] : null
        if (!hash) return

        if (pathname !== '/') {
            window.location.href = href
            return
        }

        const el = document.getElementById(hash)
        if (el) {
           
            if (mobileOpen) {
                setOpenDropdown(null)
                setMobileOpen(false)
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 220)
            } else {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        setOpenDropdown(null)
        setMobileOpen(false)
    }

    // Efecto sombra al hacer scroll — patrón de quarto-nav actual
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <>

        {/* NAVBAR */}
            <header className={cn('navbar', scrolled && 'navbar--scrolled')}>
                <nav className="navbar__inner">
                    <div className="navbar__content">

                        {/* BRAND — absoluto en desktop, en flujo en móvil */}
                        <Link to="/" className="navbar__brand" aria-label={`${LAB_INFO.name} - Inicio`}>
                            <div className="navbar__brand-title">LabTEc</div>
                        </Link>

                        {/* NAV DESKTOP */}
                        <div className="navbar__nav">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label} className="nav-item"
                                     onMouseEnter={() => setOpenDropdown(item.label)}
                                     onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    {item.children ? (
                                        <>
                                            <button className={cn('nav-link', 'nav-link--dropdown')}>
                                                {item.label}
                                                <ChevronDown size={14} className={cn('nav-link__caret', openDropdown === item.label && 'nav-link__caret--open')} />
                                            </button>
                                            <AnimatePresence>
                                                {openDropdown === item.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 8 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="nav-dropdown"
                                                    >
                                                        {item.children.map((child) => {
                                                            if (child.href.includes('#')) {
                                                                return (
                                                                    <button
                                                                        key={child.href}
                                                                        onClick={() => scrollToSection(child.href)}
                                                                        className="nav-dropdown__item"
                                                                    >
                                                                        {child.label}
                                                                    </button>
                                                                );
                                                            }
                                                            if (child.external || child.href.includes('.html')) {
                                                                return (
                                                                    <a
                                                                        key={child.href}
                                                                        href={child.href}
                                                                        className="nav-dropdown__item"
                                                                    >
                                                                        {child.label}
                                                                    </a>
                                                                );
                                                            }
                                                            return (
                                                                <Link key={child.href} to={child.href} className="nav-dropdown__item">
                                                                    {child.label}
                                                                </Link>
                                                            );
                                                        })}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : item.external || item.href.includes('.html') ? (
                                        <a
                                            href={item.href}
                                            className={cn(
                                                'nav-link',
                                                pathname === item.href && 'nav-link--active'
                                            )}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn(
                                                'nav-link',
                                                pathname === item.href && 'nav-link--active'
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="navbar__external">
                            <Link to="/" className="navbar__labtec" aria-label="LabTEc - Inicio">
                                <img src={logoLabtec} alt="LabTEc" className="navbar__labtec__img" />
                            </Link>
                            <a href="https://www.inisefor.una.ac.cr" target="_blank" rel="noopener noreferrer" className="navbar__inisefor">
                                <img src={logoInisefor} alt="INISEFOR" className="navbar__inisefor__img" />
                            </a>
                            <a href="https://www.una.ac.cr" target="_blank" rel="noopener noreferrer" className="navbar__una">
                                <img src={logoUna} alt="UNA" className="navbar__una__img" />
                            </a>
                        </div>

                        {/* HAMBURGER */}
                        <button className="navbar__toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Menú">
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {/* MOBILE */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="navbar__mobile"
                        >
                            {NAV_ITEMS.map((item) =>
                                item.children ? (
                                    <div key={item.label} className="navbar__mobile-group">
                                        <span className="navbar__mobile-group-label">{item.label}</span>
                                        {item.children.map((child, index) => {
                                            const isExt = child.external || child.href.includes('.html');
                                            if (child.href.includes('#')) {
                                                return (
                                                    <button
                                                        key={`${child.href}-${child.label}-${index}`}
                                                        onClick={() => scrollToSection(child.href)}
                                                        className="navbar__mobile-child"
                                                    >
                                                        {child.label}
                                                    </button>
                                                )
                                            }

                                            return isExt ? (
                                                <a
                                                    key={`${child.href}-${child.label}-${index}`}
                                                    href={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="navbar__mobile-child"
                                                >
                                                    {child.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    key={`${child.href}-${child.label}-${index}`}
                                                    to={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="navbar__mobile-child"
                                                >
                                                    {child.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    // Si el href contiene un hash, usar scroll suave en móvil
                                    item.href.includes('#') ? (
                                        <button
                                            key={`${item.href}-${item.label}`}
                                            onClick={() => scrollToSection(item.href)}
                                            className={cn('navbar__mobile-link', pathname === item.href && 'nav-link--active')}
                                        >
                                            {item.label}
                                        </button>
                                    ) : item.external || item.href.includes('.html') ? (
                                        <a
                                            key={`${item.href}-${item.label}`}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn('navbar__mobile-link', pathname === item.href && 'nav-link--active')}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={`${item.href}-${item.label}`}
                                            to={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn('navbar__mobile-link', pathname === item.href && 'nav-link--active')}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                )
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}