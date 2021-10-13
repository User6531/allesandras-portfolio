import styled from 'styled-components';
import { breakpoints } from '../../global/utils';

const S = {
    Wrapper: styled.div`
        margin-left: 230px; /* Same as the width of the sidenav */;
        ${breakpoints("margin-left", "px", [
            { 2560: 230 },
            { 1440: 230 },
            { 1024: 230 },
            { 768: 0 },
            { 425: 0 }
        ])};
        margin-top: 0;
        ${breakpoints("margin-top", "px", [
            { 2560: 0 },
            { 1440: 0 },
            { 1024: 0 },
            { 768: 70 },
        ])};
        font-size: 28px; /* Increased text to enable scrolling */
        width: 100%;
       
        .fade-enter {
            opacity: 0.01;
        }

        .fade-enter.fade-enter-active {
            opacity: 1;
            transition: opacity .3s ease-in;
        }

        .fade-exit {
            opacity: 1;
        }

        .fade-exit.fade-exit-active {
            opacity: 0.01;
            transition: opacity .3s ease-in;
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