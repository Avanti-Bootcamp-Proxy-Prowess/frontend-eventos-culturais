import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";
import { useNavigate  } from "react-router-dom";

export function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate("/login"); 
    };

    return (
        <Container>
            <Profile to="#">
                <img src="http://github.com/queziafiladelfo.png" alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Quezia Filadelfo</strong>
                </div>
            </Profile>

            <Logout onClick={handleLogout}>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}