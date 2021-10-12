import styled from 'styled-components';
// import { fontSize } from '../../global/fonts/GlobalFonts';

const S = {
    Wrapper: styled.div`
        margin-left: 230px; /* Same as the width of the sidenav */
        font-size: 28px; /* Increased text to enable scrolling */
        width: 100%;

        .fade-enter {
            opacity: 0.01;
        }

        .fade-enter.fade-enter-active {
            opacity: 1;
            transition: opacity 300ms ease-in;
        }

        .fade-exit {
            opacity: 1;
        }

        .fade-exit.fade-exit-active {
            opacity: 0.01;
            transition: opacity 300ms ease-in;
        }

        div.transition-group {
            position: relative;
        }

        section.route-section {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
        }
    `,
};

export default S;