import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="#">
                <img src="http://github.com/queziafiladelfo.png" alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Quezia Filadelfo</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}