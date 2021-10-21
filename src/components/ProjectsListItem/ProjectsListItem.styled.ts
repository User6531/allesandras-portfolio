import styled from 'styled-components';
import { breakpoints } from '../../global/utils';

interface IProps {
    permission?: boolean;
  }
  
const 
    Title = styled.span<IProps>`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        color: ${props => props.permission? 'white' : 'black'};
        opacity: 0;
        transition: ease .3s all;
`,
    ThumbNail = styled.img<IProps>`
        width:100%;
        height:100%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(1);
        filter: ${props => props.permission? 'grayscale(1)' : 'grayscale(1) blur(10px)'};
        transition: ease .3s all;
`,
    Lock = styled.img`
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
`,
    HoverFill = styled.div<IProps>`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #CBAC97;
        opacity: 0;
        transition: ease .3s all;
    `,
    Wrapper = styled.div<IProps>`
        ${breakpoints("width", "%", [
            { 2560: 33.333 },
            { 1440: 33.333 },
            { 1024: 50 },
            { 768: 50 },
            { 620: 100 },
            { 425: 100 }
        ])};
        ${breakpoints("height", "px", [
            { 2560: 500 },
            { 1800: 400 },
            { 1440: 300 },
            { 1024: 300 },
            { 768: 300 },
            { 620: 400 },
            { 425: 300 }
        ])};
        height: 300px;
        position: relative;
        overflow: hidden;
        cursor: ${props => props.permission? 'pointer' : 'default'};
        :hover ${Title} {
            opacity: 1;
        }
        :hover ${HoverFill} {
            opacity: .6;
        }
        :hover ${Lock} {
            opacity: .2;
        }
`

export default {
    Wrapper,
    ThumbNail,
    Title,
    Lock,
    HoverFill
};