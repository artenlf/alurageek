import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    } 

    html, body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font: 500 14px Raleway, sans-serif;
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

export default GlobalStyles;
