import styled from 'styled-components';
import { breakpoints } from '../../global/utils';

const S = {
    Wrapper: styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 0;
    `,
    BurgerMenu: styled.div`
        position: fixed;
        width: 100%;
        top: 0;
        ${breakpoints("top", "px", [
            { 2560: -70 },
            { 1440: -70 },
            { 1024: -70 },
            { 768: 0 },
        ])};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: ${(props: any) => props.theme.colors.backgroundColor};
        z-index: 6;
        transition: ease .3s all;
    `,
    BurgerMenuButton: styled.button`
        width: 50px;
        height: 50px;
        background-color: black;
        border-radius: 50%;
        border: 1px solid black;
    `,
    BurgerLogo: styled.h1`
        display: block;
        color: white;
    `,
};

export default S;