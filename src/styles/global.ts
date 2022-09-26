import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
`;
