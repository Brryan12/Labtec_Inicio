import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Award, Clock, DollarSign, Cpu, FileDown, ArrowLeft, BookOpen, Mail } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'

export function CursoSar() {
    return (
        <main className="curso-sar-page">
            {/* PAGE HERO — utilizando las clases del sistema de diseño */}
            <div className="page-hero">
                <div className="page-hero__inner">
                    <p className="page-hero__label">Cursos y Capacitaciones</p>
                    <h1 className="page-hero__title">Introducción a la teledetección con Radar de Apertura Sintética (SAR)</h1>
                </div>
            </div>

            <div className="curso-sar__container">
                {/* Columna Principal */}
                <motion.div 
                    className="curso-sar__main"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <Link to="/blog" className="curso-sar__back-link">
                        <ArrowLeft size={16} /> Volver al Blog
                    </Link>

                    {/* Imagen Informativa */}
                    <motion.div className="curso-sar__image-container" variants={fadeInUp}>
                        <img 
                            src="/archivos_curso/curso.jpeg" 
                            alt="Curso de Teledetección con Radar de Apertura Sintética (SAR)" 
                            className="curso-sar__image"
                        />
                    </motion.div>

                    {/* Descripción y Presentación */}
                    <motion.section className="curso-sar__section" variants={fadeInUp}>
                        <h2 className="curso-sar__section-title">Sobre el Curso</h2>
                        <div className="curso-sar__description">
                            <p>
                                Nos complace anunciar la apertura del curso de aprovechamiento 
                                <strong> "Introducción a la teledetección con Radar de Apertura Sintética (SAR)"</strong>, 
                                diseñado especialmente para principiantes e interesados en aprender y dominar esta potente tecnología 
                                de observación de la Tierra mediante sensores activos.
                            </p>
                            <p>
                                A diferencia de los sensores ópticos tradicionales, el radar SAR puede penetrar la cobertura de nubes y 
                                capturar datos tanto de día como de noche. Este curso proporcionará las bases teóricas necesarias 
                                y un sólido entrenamiento práctico para descargar, preprocesar y aplicar imágenes de radar en diversas 
                                áreas como el análisis forestal, detección de inundaciones, y mapeo de coberturas en Costa Rica.
                            </p>
                        </div>
                    </motion.section>

                    {/* Requisitos mínimos */}
                    <motion.section className="curso-sar__section" variants={fadeInUp}>
                        <h2 className="curso-sar__section-title">Requerimientos de Equipo</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <Cpu className="text-red-700 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <span className="font-semibold block text-gray-800">Hardware Recomendado</span>
                                    <span className="text-sm text-gray-600">Procesador Intel® Core™ i5 (o equivalente) y 8 GB de Memoria RAM como mínimo.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <Cpu className="text-red-700 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <span className="font-semibold block text-gray-800">Sistema y Almacenamiento</span>
                                    <span className="text-sm text-gray-600">Sistemas operativos Windows, Linux o macOS. Se requiere un espacio libre en disco de al menos 15 GB.</span>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Programa del Curso */}
                    <motion.section className="curso-sar__section" variants={fadeInUp}>
                        <h2 className="curso-sar__section-title">Cronograma y Agenda del Curso</h2>
                        <div className="curso-sar__agenda">
                            
                            {/* Dia 1 */}
                            <div className="curso-sar__agenda-day">
                                <div className="curso-sar__agenda-day-header">
                                    <span>Día 1: Fundamentos del Radar SAR y su interpretación</span>
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Teoría y Exploración</span>
                                </div>
                                <div className="curso-sar__agenda-table-wrapper">
                                    <table className="curso-sar__agenda-table">
                                        <thead>
                                            <tr>
                                                <th className="w-1/4">Hora</th>
                                                <th className="w-1/2">Tema</th>
                                                <th className="w-1/4">Modalidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>8:00 am – 9:30 am</td>
                                                <td>Introducción a la teledetección activa. Diferencias con la teledetección óptica.</td>
                                                <td><span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">Clase teórica</span></td>
                                            </tr>
                                            <tr>
                                                <td>9:30 am – 9:45 am</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>9:45 am – 11:00 am</td>
                                                <td>Geometría del radar: rango, azimut, look angle, layover, foreshortening y shadow.</td>
                                                <td><span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">Ejemplos gráficos</span></td>
                                            </tr>
                                            <tr>
                                                <td>11:00 am – 12:00 pm</td>
                                                <td>Parte 1: Parámetros del sensor y de superficie (polarización, frecuencia, rugosidad, humedad, orientación).</td>
                                                <td><span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">Demostración teórica</span></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 pm – 1:30 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Almuerzo</td>
                                            </tr>
                                            <tr>
                                                <td>1:30 pm – 2:30 pm</td>
                                                <td>Parte 2: Parámetros del sensor y de superficie (polarización, frecuencia, rugosidad, humedad, orientación).</td>
                                                <td><span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">Demostración teórica</span></td>
                                            </tr>
                                            <tr>
                                                <td>2:30 pm – 3:30 pm</td>
                                                <td>Bandas SAR (C, L, X): aplicaciones típicas (agua, suelos, vegetación, infraestructura). Ejemplos Sentinel-1 y ALOS PALSAR.</td>
                                                <td><span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">Clase práctica</span></td>
                                            </tr>
                                            <tr>
                                                <td>3:30 pm – 3:45 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>3:45 pm – 5:00 pm</td>
                                                <td>Ejercicio en SNAP: exploración de una imagen Sentinel-1 (VV/VH). Identificación de patrones de retrodispersión.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Dia 2 */}
                            <div className="curso-sar__agenda-day">
                                <div className="curso-sar__agenda-day-header">
                                    <span>Día 2: Descarga y preprocesamiento de imágenes SAR</span>
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Procesamiento y SNAP</span>
                                </div>
                                <div className="curso-sar__agenda-table-wrapper">
                                    <table className="curso-sar__agenda-table">
                                        <thead>
                                            <tr>
                                                <th className="w-1/4">Hora</th>
                                                <th className="w-1/2">Tema</th>
                                                <th className="w-1/4">Modalidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>8:00 am – 9:30 am</td>
                                                <td>Interpretación visual de coberturas en Costa Rica (embalses, represas, zonas agrícolas, cordilleras).</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>9:30 am – 9:45 am</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>9:45 am – 11:00 am</td>
                                                <td>Acceso a datos SAR: Copernicus Data Space Ecosystem, Alaska SAR Facility y ALOS PALSAR.</td>
                                                <td><span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">Demostración teórica</span></td>
                                            </tr>
                                            <tr>
                                                <td>11:00 am – 12:00 pm</td>
                                                <td>Descarga desde Copernicus Browser y API (Sentinel-1 GRD).</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 pm – 1:30 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Almuerzo</td>
                                            </tr>
                                            <tr>
                                                <td>1:30 pm – 3:30 pm</td>
                                                <td>Flujo de preprocesamiento en SNAP: calibración radiométrica, corrección geométrica (RTC), eliminación de speckle.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>3:30 pm – 3:45 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>3:45 pm – 5:00 pm</td>
                                                <td>Exportar resultados RTC a GeoTIFF y visualización en QGIS.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Dia 3 */}
                            <div className="curso-sar__agenda-day">
                                <div className="curso-sar__agenda-day-header">
                                    <span>Día 3: Aplicaciones de amplitud SAR</span>
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Google Earth Engine</span>
                                </div>
                                <div className="curso-sar__agenda-table-wrapper">
                                    <table className="curso-sar__agenda-table">
                                        <thead>
                                            <tr>
                                                <th className="w-1/4">Hora</th>
                                                <th className="w-1/2">Tema</th>
                                                <th className="w-1/4">Modalidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>8:00 am – 9:00 am</td>
                                                <td>Introducción y repaso a Google Earth Engine.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>9:00 am – 9:30 am</td>
                                                <td>Parte 1: Implementación del preprocesamiento en GEE (colección COPERNICUS/S1_GRD, filtros por órbita, polarización y geometría).</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>9:30 am – 9:45 am</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>9:45 am – 10:30 am</td>
                                                <td>Parte 2: Implementación del preprocesamiento en GEE.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>10:30 am – 12:00 pm</td>
                                                <td>Caso 1: preparación de mosaico Sentinel-1 sobre cuencas hidroeléctricas (Arenal, Reventazón, Cachí).</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 pm – 1:30 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Almuerzo</td>
                                            </tr>
                                            <tr>
                                                <td>1:30 pm – 3:00 pm</td>
                                                <td>Caso 2: Análisis de inundaciones mediante umbral de histograma (VV y VH).</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>3:00 pm – 3:15 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>3:15 pm – 5:00 pm</td>
                                                <td>Detección de cambios: diferencia de retrodispersión (antes/después) y máscara de agua.</td>
                                                <td><span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">Teoría y práctica</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Dia 4 */}
                            <div className="curso-sar__agenda-day">
                                <div className="curso-sar__agenda-day-header">
                                    <span>Día 4: Clasificación de usos/coberturas con SAR</span>
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Análisis Avanzado y Cierre</span>
                                </div>
                                <div className="curso-sar__agenda-table-wrapper">
                                    <table className="curso-sar__agenda-table">
                                        <thead>
                                            <tr>
                                                <th className="w-1/4">Hora</th>
                                                <th className="w-1/2">Tema</th>
                                                <th className="w-1/4">Modalidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>8:00 am – 9:30 am</td>
                                                <td>Caso 1: aplicación a incendios forestales.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>9:30 am – 9:45 am</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café</td>
                                            </tr>
                                            <tr>
                                                <td>9:45 am – 12:00 pm</td>
                                                <td>Introducción al análisis multitemporal: stack Sentinel-1 y extracción de series de retrodispersión.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>12:00 pm – 1:30 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Almuerzo</td>
                                            </tr>
                                            <tr>
                                                <td>1:30 pm – 3:00 pm</td>
                                                <td>Rutina de clasificación supervisada y no supervisada con datos SAR.</td>
                                                <td><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Práctica guiada</span></td>
                                            </tr>
                                            <tr>
                                                <td>3:00 pm – 3:15 pm</td>
                                                <td colSpan={2} className="bg-gray-50/50 text-center text-xs italic">Receso para Café / Cierre del curso</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </motion.section>


                </motion.div>

                {/* Barra Lateral (Sidebar) */}
                <motion.div 
                    className="curso-sar__sidebar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Detalles rápidos */}
                    <div className="curso-sar__card">
                        <h3 className="curso-sar__card-title">
                            <BookOpen size={18} /> Detalles Clave
                        </h3>
                        <div className="curso-sar__details-list">
                            <div className="curso-sar__detail-item">
                                <Calendar className="curso-sar__detail-icon" size={16} />
                                <div className="curso-sar__detail-content">
                                    <span className="curso-sar__detail-label">Fechas</span>
                                    <span className="curso-sar__detail-value">Del 24 al 27 de agosto de 2026</span>
                                </div>
                            </div>
                            <div className="curso-sar__detail-item">
                                <Clock className="curso-sar__detail-icon" size={16} />
                                <div className="curso-sar__detail-content">
                                    <span className="curso-sar__detail-label">Duración</span>
                                    <span className="curso-sar__detail-value">4 días (Total 30 horas)</span>
                                </div>
                            </div>
                            <div className="curso-sar__detail-item">
                                <Users className="curso-sar__detail-icon" size={16} />
                                <div className="curso-sar__detail-content">
                                    <span className="curso-sar__detail-label">Cupo Máximo</span>
                                    <span className="curso-sar__detail-value">15 participantes</span>
                                </div>
                            </div>
                            <div className="curso-sar__detail-item">
                                <Award className="curso-sar__detail-icon" size={16} />
                                <div className="curso-sar__detail-content">
                                    <span className="curso-sar__detail-label">Tipo de Curso</span>
                                    <span className="curso-sar__detail-value">De aprovechamiento (título con folio y asiento)</span>
                                </div>
                            </div>
                            <div className="curso-sar__detail-item">
                                <MapPin className="curso-sar__detail-icon" size={16} />
                                <div className="curso-sar__detail-content">
                                    <span className="curso-sar__detail-label">Modalidad y Lugar</span>
                                    <span className="curso-sar__detail-value">
                                        Presencial. OTVE (Oficina de Transferencia de Conocimiento y Vinculación Externa),
                                        Heredia, Lagunilla. Campus Presbítero Benjamín Núñez (Edificio Emprendimiento, 3er piso).
                                    </span>
                                </div>
                            </div>
                            <div className="curso-sar__detail-item">
                                <DollarSign className="curso-sar__detail-icon" size={16} />
                                <div className="curso-sar__detail-content">
                                    <span className="curso-sar__detail-label">Inversión</span>
                                    <span className="curso-sar__detail-value">US$ 600 dólares (vía FUNDAUNA)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Descarga del PDF */}
                    <div className="curso-sar__card">
                        <h3 className="curso-sar__card-title">
                            <FileDown size={18} /> Descargas
                        </h3>
                        <p className="text-xs text-gray-500 mb-4">
                            Descarga el PDF oficial de la UNA con toda la agenda y detalles del curso.
                        </p>
                        <a 
                            href="/archivos_curso/Introduccion_Radar_Apertura -Sintetica_marzo2026.pdf" 
                            download="Introduccion_Radar_Apertura_Sintetica_marzo2026.pdf"
                            className="curso-sar__download-btn"
                        >
                            <FileDown size={16} /> Descargar Folleto (PDF)
                        </a>
                    </div>

                    {/* Instructores y Contacto */}
                    <div className="curso-sar__card">
                        <h3 className="curso-sar__card-title">
                            <Mail size={18} /> Instructores
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <span className="font-semibold block text-gray-800 text-sm">Dr. Mauricio Vega-Araya</span>
                                <a href="mailto:mauricio.vega.araya@una.ac.cr" className="text-xs text-red-700 hover:underline flex items-center gap-1 mt-1">
                                    <Mail size={12} /> mauricio.vega.araya@una.ac.cr
                                </a>
                            </div>
                            <div className="border-t border-gray-100 pt-3">
                                <span className="font-semibold block text-gray-800 text-sm">Geógrafo Cristian Aguilar-Barboza</span>
                                <a href="mailto:andresaguilarba20@gmail.com" className="text-xs text-red-700 hover:underline flex items-center gap-1 mt-1">
                                    <Mail size={12} /> andresaguilarba20@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
