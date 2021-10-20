import styled from 'styled-components';
import { breakpoints } from '../../../global/utils';

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    ${breakpoints("margin-top", "px", [
            { 2560: 100 },
            { 1440: 100 },
            { 1024: 100 },
            { 768: 0 },
    ])};
    overflow: hidden;
    ${breakpoints("padding", "", [
            { 2560: '0 100px' },
            { 1440: '0 100px' },
            { 1024: '0 50px' },
            { 768: '0 15px' },
    ])};
`,
Name = styled.h1`
    font-size: ${(props: any) => props.theme.fontSizes.xxLarge};
    text-align: center;
    margin-bottom: 50px;
`,
DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    ${breakpoints("flex-direction", "", [
            { 2560: '' },
            { 1440: '' },
            { 1024: 'column-reverse' },
            { 768: 'column-reverse' },
            { 600: 'column-reverse' },
            { 425: 'column-reverse' },
            { 375: 'column-reverse' },
            { 320: 'column-reverse' },
    ])};
`,
SliderWrapper = styled.div`
    margin: 50px auto; 
    ${breakpoints("width", "px", [
            { 2560: 800 },
            { 1440: 600 },
            { 1024: 600 },
            { 920: 500 },
            { 768: 600 },
            { 600: 425 },
            { 425: 380 },
            { 375: 350 },
            { 320: 275 },
    ])};
    ${breakpoints("height", "px", [
            { 2560: 800 },
            { 1440: 600 },
            { 1024: 600 },
            { 920: 500 },
            { 768: 600 },
            { 600: 425 },
            { 425: 380 },
            { 375: 350 },
            { 320: 275 },
    ])};
    overflow: hidden;
`,
Description = styled.p`
    font-size: ${(props: any) => props.theme.fontSizes.small};
    text-align: center;
    margin: 0 auto;
    ${breakpoints("max-width", "px", [
            { 2560: 400 },
            { 1440: 300 },
            { 1024: 300 },
            { 768: 300 },
    ])};
`,
DrawWrapper = styled.div`
    margin: 0 auto;
    margin-top: 50px;
`,
DrawTitle = styled.h1`
    text-align: center;
    margin-bottom: 50px;
`,
DrawImg = styled.img`
    display: block;
    margin: 0 auto;
    ${breakpoints("max-width", "px", [
        { 2560: 800 },
        { 1440: 600 },
        { 1024: 600 },
        { 920: 500 },
        { 768: 600 },
        { 600: 450 },
        { 425: 380 },
        { 375: 350 },
        { 320: 275 },
    ])};
    cursor: pointer; 
`

export default {
    Wrapper,
    DescriptionWrapper,
    Name,
    Description,
    DrawWrapper,
    DrawImg,
    DrawTitle,
    SliderWrapper
};