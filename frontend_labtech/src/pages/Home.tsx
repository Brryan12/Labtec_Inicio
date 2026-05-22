import { Hero }             from '../sections/Hero'
import { LabHighlights }    from '../sections/LabHighlights'
import { MissionVision }    from '../sections/MissionVision'
import { ResearchLines }    from '../sections/ResearchLines'
import { FeaturedProjects } from '../sections/FeaturedProjects'
import { Collaborators }    from '../sections/Collaborators'
import { ContactBanner }    from '../sections/ContactBanner'
import {AboutPage} from "../sections/About.tsx";

export function Home() {
    return (
        <main>
            <Hero />
            <section id="about"><AboutPage /></section>
            <LabHighlights />
            <section id="mision"><MissionVision /></section>
            <section id="investigacion"><ResearchLines /></section>
            <FeaturedProjects />
            <div id="equipo"><Collaborators /></div>
            <ContactBanner />
        </main>
    )
}