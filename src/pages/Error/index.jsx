import { Container, Heading } from "./styles";
import imageError from "../../assets/error-404.png";
import { Back } from "./styles.js";
import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/login");
    };

    return (
        <Container>
            <Back onClick={handleBackClick}/>
            <main className="main">
                <span className="oops">Oops!</span>
                <Heading>
                    <span className="error">404</span>
                    <span className="page-not-found">Page Not Found</span>
                </Heading>
                <img src={imageError} alt="Erro 404" id="erro"/>
                <div className="shadow"></div>
            </main>
        </Container>
    )
}