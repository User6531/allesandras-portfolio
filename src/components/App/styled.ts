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
    BurgerMenuButton: styled.button<{ isMobileSideBar?: boolean }>`
        width: ${(props: any) => props.isMobileSideBar ? 0 : '30px'};
        height: 3px;
        background-color: ${(props: any) => props.theme.colors.buttonSideBarMobile};
        border-radius: 8px;
        position: relative;
        transform-origin: left;
        transition: ease .1s all;
     
        &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 30px;
            height: 3px;
            background-color: ${(props: any) => props.theme.colors.buttonSideBarMobile};
            border-radius: 8px;
            transform-origin: left top;
            transform: ${(props: any) => props.isMobileSideBar ? 'rotate(45deg)' : ''};
            transition: ease .2s all;
        }

        &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            width: 30px;
            height: 3px;
            background-color: ${(props: any) => props.theme.colors.buttonSideBarMobile};
            border-radius: 8px;
            transform-origin: left bottom;
            transform: ${(props: any) => props.isMobileSideBar ? 'rotate(-45deg)' : ''};
            transition: ease .2s all;
        }

    `,
    BurgerLogo: styled.h1`
        display: block;
        color: white;
    `,
};

export default S;