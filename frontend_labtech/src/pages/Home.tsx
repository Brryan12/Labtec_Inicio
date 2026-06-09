import { Hero }             from '../sections/Hero'
import { LabHighlights }    from '../sections/LabHighlights'
import { MissionVision }    from '../sections/MissionVision'
import { ResearchLines }    from '../sections/ResearchLines'
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
            <div id="equipo"><Collaborators /></div>
            <ContactBanner />
        </main>
    )
}