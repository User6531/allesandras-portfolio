import styled from 'styled-components';
// import { fontSize } from '../../global/fonts/GlobalFonts';

const Title = styled.span`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        color: white;
        opacity: 0;
        transition: ease .3s all;
`,
    
    ThumbNail = styled.img`
        width:100%;
        height:100%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(1);
        opacity: 1;
        transition: ease .3s all;
`,
    Wrapper = styled.div`
        min-width: 300px;
        width: 33.333%;
        height: 300px;
        position: relative;
        overflow: hidden;
        background-color: #CBAC97;

        :hover ${Title} {
            opacity: 1;
        }
        :hover ${ThumbNail} {
            opacity: .2;
        }
`

export default {
    Wrapper,
    ThumbNail,
    Title
};