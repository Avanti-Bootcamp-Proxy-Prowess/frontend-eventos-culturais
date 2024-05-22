import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import Drawer from "../../components/Drawer";

export function Header() {
    return (
        <Container>
            <Drawer/>
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