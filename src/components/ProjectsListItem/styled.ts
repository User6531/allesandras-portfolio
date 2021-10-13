import styled from 'styled-components';
import { breakpoints } from '../../global/utils';

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
        width: 33.333%;
        ${breakpoints("width", "%", [
            { 2560: 25 },
            { 1440: 33.333 },
            { 1024: 50 },
            { 768: 50 },
            { 620: 100 },
            { 425: 100 }
        ])};
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