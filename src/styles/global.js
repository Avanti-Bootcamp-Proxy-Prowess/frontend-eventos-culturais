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
        background: ${({theme})=> theme.COLORS.GRAY_900};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* overflow: auto; */
        scroll-behavior: smooth;
    }

    body {
        background: ${({theme})=> theme.COLORS.BACKGROUND_800};
        -webkit-font-smoothing: antialiased;
        color: ${({theme})=> theme.COLORS.WHITE}
    }
    
    body, input,  button, textarea, select {
        font-family: "Roboto Slab", serif;
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

    a:hover, button:hover {
        filter: brightness(0.9);
    }
`;