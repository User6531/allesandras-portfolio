import { createGlobalStyle } from 'styled-components';
import { fontSize } from './fonts/GlobalFonts';


export default createGlobalStyle`
    /*Zeroing*/
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }
    *,
    *:before,
    *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    :focus,
    :active {
        outline: none;
    }
    a:focus,
    a:active {
        outline: none;
    }
    nav,
    footer,
    header,
    aside {
        display: block;
    }
    html,
    body {
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1.5;
        font-size: ${fontSize.medium};
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: 'Lato-Regular';
        transition: ease .5s background-color, color;

        background-color: ${(props: any) => props.theme.backgroundColor};
        color: ${(props: any) => props.theme.textColor};
    }
    input,
    button,
    textarea,
    select {
        font-family: inherit;
    }
    input::-ms-clear {
        display: none;
    }
    button {
        cursor: pointer;
    }
    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }
    a,
    a:visited {
        text-decoration: none;
        color: ${(props: any) => props.theme.textColor};
    }
    a:hover {
        text-decoration: none;
    }
    ul li {
        list-style: none;
    }
    img {
        max-width: 100%;
        display: block;
    }
    h1,h2,h3,h4,h5,h6 {
        font-size: inherit;
        font-weight: 400;
    }
`;