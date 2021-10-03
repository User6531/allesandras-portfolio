import styled from 'styled-components';
// import { fontSize } from '../../global/fonts/GlobalFonts';

const S = {
    Wrapper: styled.div`
        height: 100%;
        width: 250px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        padding: 20px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        align-content: space-between;
    `,
    NavigationMenu: styled.nav`
        display: flex;
        flex-wrap: wrap;
        a {
            width: 100%;
            color: inherit;
        }
    `,
    NavigationSocial: styled.nav`
        display: flex;
        justify-content: space-between;
        width: 100%;
        a {
            color: inherit;
        }
    `,
};

export default S;