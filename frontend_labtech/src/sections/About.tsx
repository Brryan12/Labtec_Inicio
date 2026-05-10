import { LAB_INFO } from "../data/lab.ts"
import { CardBody } from "../components/ui/Card.tsx"

export function AboutPage() {
    return (
        <main>
            <CardBody className="research__inner" >
                <h1 className="card-header">Sobre nosotros</h1>
                <p>{LAB_INFO.about}</p>
            </CardBody>
        </main>
    )
}