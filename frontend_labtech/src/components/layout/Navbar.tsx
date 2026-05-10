import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, EXTERNAL_LINKS } from '../../data/navigation'
import { LAB_INFO } from '../../data/lab'
import {cn} from "../../utils/cn";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const { pathname } = useLocation()

    // Efecto sombra al hacer scroll — patrón de quarto-nav actual
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <>
        {/* TOPBAR */}
            <div className="navbar-topbar">
                <div className="navbar-topbar__inner">
                    <span>Horario: lunes a viernes — 8 AM a 12 md y de 1 a 5 pm</span>
                    <div className="navbar-topbar__contact">
                        <span>Tel: {LAB_INFO.phone}</span>
                        <a href={`mailto:${LAB_INFO.email}`}>{LAB_INFO.email}</a>
                    </div>
                </div>
            </div>

        {/* NAVBAR */}
            <header className={cn('navbar', scrolled && 'navbar--scrolled')}>
                <nav className="navbar__inner">
                    <div className="navbar__content">

                        {/* BRAND */}
                        <Link to="/" className="navbar__brand">
                            <div className="navbar__logo">UNA</div>
                            <div className="navbar__brand-text">
                                <span className="navbar__title">LabTEc</span>
                                <p className="navbar__subtitle">INISEFOR — Universidad Nacional</p>
                            </div>
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
                                                        {item.children.map((child, index) => (
                                                                <Link
                                                                    key={`${child.href}-${child.label}-${index}`}
                                                                    to={child.href}
                                                                    className="nav-dropdown__item">
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
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

                        {/* EXTERNOS */}
                        <div className="navbar__external">
                            {EXTERNAL_LINKS.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-external">
                                    {link.label} <ExternalLink size={10} />
                                </a>
                            ))}
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
                                        {item.children.map((child, index) => (
                                            <Link
                                                key={`${child.href}-${child.label}-${index}`}
                                                to={child.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="navbar__mobile-child"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
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
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}