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
            <main>
                <Hero />
                <AboutPage />
                <LabHighlights />
                <div id="mision"><MissionVision /></div>
                <div id="investigacion"><ResearchLines /></div>
                <FeaturedProjects />
                <div id="equipo"><Collaborators /></div>
                <ContactBanner />
            </main>
        </main>
    )
}