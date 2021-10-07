import styled from 'styled-components';
import { fontSize } from '../../global/fonts/GlobalFonts';

interface Props {
    language?: string;
    theme?: string;
  }

const S = {
    WrapperMain: styled.div`
        height: 100%;
        width: 230px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        text-transform: uppercase;
    `,
    Wrapper: styled.div`
        height: 100%;
        width: 150px;
        margin: 0 auto;
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
       font-size: ${fontSize.small};
       a {
           color: var(--black);
       }
    `,
    WrapperBottom: styled.div`
       width: 100%;
    `,
    WrapperButtons: styled.div`
        display: flex;
        justify-content: space-between;
    `,
    ButtonLanguage:styled.div`
        width: 50px;
        height: 20px;
        border: 1px solid black;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    `,
    LanguageCircle: styled.div<Props>`
        transition: ease .5s all;
        position: absolute;
        background-color: red;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        top: 50%;
        left: ${props=> props.language === 'en' ? '2px' : '30px'};
        transform: translate(0, -50%);
        z-index:2;
    `,
    LanguageTitle: styled.div<Props>`
        font-size: 15px;
        text-transform: lowercase;
        position: absolute;
        top: 50%;
        left: ${props=> props.language === 'en' ? '25px' : '5px'};
        transform: translate(0, -50%);
        z-index:1;
    `,
    ButtonTheme:styled.div`
        width: 50px;
        height: 20px;
        border: 1px solid black;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    `,
    ThemeCircle: styled.div<Props>`
        transition: ease .5s all;
        position: absolute;
        background-color: red;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        top: 50%;
        left: ${props=> props.theme === 'light' ? '2px' : '30px'};
        transform: translate(0, -50%);
        z-index:2;
    `,
    ThemeTitle: styled.div<Props>`
        font-size: 10px;
        text-transform: lowercase;
        position: absolute;
        top: 50%;
        left: ${props=> props.theme === 'light' ? '25px' : '5px'};
        transform: translate(0, -50%);
        z-index:1;  
    `,
    NavigationSocial: styled.nav`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 50px 0;
        transition: ease .2s all;
        :hover a {
            opacity: .5;
        }
        a {
            transition: ease .2s all;
            :hover {
                opacity: 1;
            }   
        }
    `,
    Logo: styled.h1`
        margin: 50px 0;
        font-size: 50px;
        a {
            color: var(--black);
        }
    `,
};

export default S;