import { Link } from 'react-router-dom'
import { Mail, Phone, Clock, MapPin, ExternalLink } from 'lucide-react'
import { LAB_INFO } from '../../data/lab'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__grid">
                <div className="footer__col">
                    <h3 className="footer__heading">LabTEc</h3>
                    <p className="footer__text">{LAB_INFO.institution}</p>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Contacto</h3>
                    <ul className="footer__contact-list">
                        <li><Phone size={13} className="footer__icon" /><span>{LAB_INFO.phone}</span></li>
                        <li><Mail size={13} className="footer__icon" />
                            <a href={`mailto:${LAB_INFO.email}`}>{LAB_INFO.email}</a>
                        </li>
                        <li><MapPin size={13} className="footer__icon" /><span>Heredia, Costa Rica</span></li>
                        <li><Clock size={13} className="footer__icon" />
                            <div className="footer__contact-label">
                                <span>Lunes a viernes</span>
                                <span>8:00 a.m. — 12:00 m.d.</span>
                                <span>1:00 p.m. — 5:00 p.m.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Navegación</h3>
                    <ul className="footer__nav-list">
                        {[['Inicio','/'],['Proyectos','/proyectos'],['Blog','/blog'],['Contacto','/contacto']].map(([l,h]) => (
                            <li key={h}><Link to={h}>{l}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h3 className="footer__heading">Instituciones</h3>
                    <ul className="footer__nav-list">
                        {[['Universidad Nacional','https://www.una.ac.cr'],['INISEFOR','https://www.inisefor.una.ac.cr'],['SINAC','https://www.sinac.go.cr']].map(([l,h]) => (
                            <li key={h}><a href={h} target="_blank" rel="noopener noreferrer">{l} <ExternalLink size={10}/></a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer__copyright">
                <div className="footer__copyright-left">
                    <span>© {year} <strong>LabTEc</strong> — INISEFOR</span>
                    <span className="footer__institution">· <a href="https://www.una.ac.cr" target="_blank" rel="noopener noreferrer">Universidad Nacional</a></span>
                </div>

                <div className="footer__copyright-right">
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Licencia CC BY 4.0</a>
                </div>
            </div>
        </footer>
    )
}