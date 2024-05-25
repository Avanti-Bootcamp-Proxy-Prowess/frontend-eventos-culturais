import styled from "styled-components";
// import iconRocket from "../../assets/icon-rocket.png";
// import imagePresentation from "../../assets/image-presentation.png";

export const Conteiner = styled.div`
    font-size: 16px;
    color: #E7D8A1;
    height: 100vh;
    padding: 1rem 4.5rem;

    @media screen and (max-width: 1280px) {
        font-size: 12px;
    }

    @media screen and (max-width: 840px) {
        font-size: 10px;
        
    }

    @media screen and (max-width: 560px) {
        padding: 0 20px;
    }
`;

export const Header = styled.header`
    height: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div.logo {
        display: flex;
        align-items: center;
        gap: 1.75rem;

        span {
            font-size: 3.75rem;
            font-family: 'Bebas Neue', sans-serif;
        }

        @media screen and (max-width: 1080px) {
            width: 240px;

            span {
                line-height: 44px;
            }
        }

        @media screen and (max-width: 840px) {
            span {
                display: none;
            }
        }
    }

    div.nav-buttons {
        display: flex;
        gap: 1rem;
    }

    img {
        width: 6rem;
    }
`;

export const Main = styled.main`

    height: calc(100vh - 100px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;

    div.main-text {
        width: 48rem;

        @media screen and (max-width: 1080px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media screen and (max-width: 560px) {
            width: 100%;
        }
    }

    h1 {
        font-size: 2.75rem;
    }

    p {
        font-size: 1.5rem;
        margin: 3rem 0;
    }

    img {
        width: 25rem;
    }

    @media screen and (max-width: 1080px) {
        flex-direction: column-reverse;
        justify-content: space-evenly;
        gap: 0px;
        margin-top: -32px;
    }
`;

export const ButtonConteiner = styled.div`
    text-transform: uppercase;

    @media screen and (max-width: 1080px) {
        padding: 12px;
    }
`;