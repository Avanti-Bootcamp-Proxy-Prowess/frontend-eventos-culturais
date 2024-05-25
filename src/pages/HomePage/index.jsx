import { Conteiner, Header, Main } from "./styles";
import { Button } from "../../components/Button";
import iconRocket from "../../assets/icon-rocket.png";
import imagePresentation from "../../assets/image-presentation.png";
import { Link } from "react-router-dom";

//import { useAuth } from "../../hooks/auth"

export function HomePage() {

    return (
        <Conteiner>
            <Header>
                <div className="logo">
                    <img src={iconRocket} alt="Foguete em decolagem"/>
                    <span>Rocket Events</span>
                </div>
                <div className="nav-buttons">
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button title={"Login"} style={{ width: "auto", height: "40px", marginTop: "0px" }}>
                            Login
                        </Button>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button title="Cadastro" style={{ width: "100px", height: "40px", marginTop: "0px" }}>
                            Cadastro
                        </Button>
                    </Link>
                </div>
            </Header>
            <Main>
                <div className="main-text">
                    <h1>Catalogue os seus Eventos</h1>
                    <p>
                        Crie, organize e participe de eventos de maneira intuitiva, conectando-se a uma comunidade de entusiastas culturais e mantendo-se informado sobre as últimas tendências em entretenimento e cultura.
                    </p>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button title="Começar agora" style={{ width: "auto" }}>
                            Cadastro
                        </Button>
                    </Link>
                </div>
                <img src={imagePresentation} alt="Viajante indo em direção a foguete para desbravar novas culturas"/>
            </Main>
        </Conteiner>
    )
}