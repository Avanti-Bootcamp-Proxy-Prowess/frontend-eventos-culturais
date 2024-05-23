import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';
import { Container, Profile, Logout } from "./styles";
import { useNavigate  } from "react-router-dom";
import avatarPlaceholder  from "../../assets/userImg.jpg"

export function Header() {
    const { logout, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate("/login"); 
    };

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.nome} />

                <div>
                    <span>Bem vindo</span>
                    <strong>{user.nome}</strong>
                </div>
            </Profile>

            <Logout onClick={handleLogout}>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}