// configuração do css global da aplicação

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ::-webkit-scrollbar{
        width: 10px;
        height: 6px;
    }
    ::-webkit-scrollbar-track{
        box-shadow: inset 0 0 5px ${({theme})=> theme.COLORS.BACKGROUND_900};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${({theme})=> theme.COLORS.BACKGROUND_700};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: ${({theme})=> theme.COLORS.GRAY_100};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;

        @media screen and (max-width: 1280px) {
        font-size: 12px;
        }

        @media screen and (max-width: 840px) {
        font-size: 10px;
        }
    }

    body {
        background: ${({theme})=> theme.COLORS.BACKGROUND_800};
        -webkit-font-smoothing: antialiased;
        color: ${({theme})=> theme.COLORS.WHITE}
    }
    
    body, input,  button, textarea {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter .2s;
    }

    button:active {
        transform: scale(0.88);
    }

    button:hover {
        box-shadow: -3px 3px 2px -1px hwb(0 100% 0% / 0.4);
        transition: all 0.5s ease-in;
        transform: translate(2px, -2px);
    }
`;