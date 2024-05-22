import { Container, Wraper } from "./styles";

import { Header } from "../../components/Header";
import { EventGrid } from "../../components/EventGrid";
import { Input } from "../../components/Input";

export function Dashboard() {

    return (
        <Container>
            <Header/>
            <Wraper>
                <Input
                    placeholder="Pesquisar"
                />
                <div>
                    <h2>Eventos</h2>
                </div>
                <EventGrid/>
            </Wraper>
        </Container>
    )
}