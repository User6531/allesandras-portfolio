import styled from 'styled-components';
import { fontSize } from '../../global/fonts/GlobalFonts';

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