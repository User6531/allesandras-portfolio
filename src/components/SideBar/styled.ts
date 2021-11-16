import styled from 'styled-components';
import { breakpoints } from '../../global/utils';

interface Props {
    language?: string;
    themes?: string;
  }

const S = {
    WrapperMain: styled.div`
        background-color: ${({theme})=> theme.colors.backgroundColor};
        height: 100%;
        width: 230px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        ${breakpoints("left", "px", [
            { 2560: 0 },
            { 1440: 0 },
            { 1024: 0 },
            { 768: -230 },
            { 425: -230 }
        ])};
        overflow: hidden;
        text-transform: uppercase;
        transition: ease all .3s;
        z-index: 5;
    `,
    Wrapper: styled.div`
        height: 100%;
        width: 150px;
        margin: 0 auto;
        ${breakpoints("padding-top", "px", [
            { 2560: 0 },
            { 1440: 0 },
            { 1024: 0 },
            { 768: 100 },
            { 425: 100 }
        ])};
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        align-content: space-between;
       
    `,
    NavigationMenu: styled.nav`
        display: flex;
        flex-wrap: wrap;
    `,
    NavMenuLink: styled.nav`
       width: 100%;
       font-size: ${(props: any) => props.theme.fontSizes.small};
    `,
    WrapperBottom: styled.div`
       width: 100%;
       margin: 50px 0;
    `,
    WrapperButtons: styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    `,
    ButtonLanguage:styled.div``,
    ButtonTheme:styled.div``,
    NavigationSocial: styled.nav`
        display: flex;
        justify-content: space-between;
        width: 100%;
        transition: ease .3s all;
        :hover a {
            opacity: .3;
        }
        a {
            transition: ease .3s all;
            :hover {
                opacity: 1;
            }   
        }
    `,
    Logo: styled.h1`
        ${breakpoints("display", "", [
            { 2560: 'block' },
            { 1440: 'block' },
            { 1024: 'block' },
            { 768: 'none' },
            { 425: 'none' }
        ])};
        margin: 50px 0;
        font-size: 50px;
        a {
            color: var(--black);
        }
    `,
};

export default S;