import styled from 'styled-components';
import { breakpoints } from '../../global/utils';

interface IProps {
    img?: {original: string; thumbnail: string;}[];
    selectedThumbImg?: boolean
}

const ImageGalleryWrapper = styled.div`
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
`,
OriginalWrapper = styled.div`
    height: 80%;
    overflow: hidden;
    position: relative;
`,
BodyOriginal = styled.div<IProps>`
    display: flex;
    flex-wrap: nowrap;
    transition: ease .3s all;
    height: 100%;
    width: ${(props: any) => props.img.length * 100 + '%'};
    z-index: 0;
`,
ImgWrapper = styled.div`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    width: 100%;
`,
OriginalImg = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`,
ThumbNailsWrapper = styled.div`
    overflow-x: scroll;
    width: 100%;
    height: 20%;
`,
BodyThumbNails = styled.div<IProps>`
    width: ${(props: any) => props.img.length * 100 + 'px'};
    display: flex;
    flex-wrap: nowrap;
    padding: 5px 0;
`,
ThumbNailsItem = styled.div<IProps>`
    transition: ease .3s all;
    cursor: pointer;
    padding: 0 5px;
    overflow: hidden;
    width: 100px;
    filter: ${(props: any) => props.selectedThumbImg ? '' : 'grayscale(1) brightness(50%)'};
    &:last-child {
        padding-right: 0;
    }
    &:first-child {
        padding-left: 0;
    }
    &:hover {
        filter: grayscale(.5) ;
    }
`,
ThumbNailsImg = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
    border: 2px solid red;
`,
LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: red;  
    z-index: 1;
    cursor: pointer;
`,
RightArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: red;   
    z-index: 1;
    cursor: pointer;
`

export default {
    ImageGalleryWrapper,
    OriginalWrapper,
    OriginalImg,
    ThumbNailsWrapper,
    BodyThumbNails,
    ThumbNailsImg,
    LeftArrow,
    RightArrow,
    BodyOriginal,
    ImgWrapper,
    ThumbNailsItem
};