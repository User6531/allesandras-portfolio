import styled from 'styled-components';
import { fontSize } from '../../../global/fonts/GlobalFonts';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`,
Name = styled.h1`
    font-size: ${fontSize.XXlarge};
    text-align: center;
    margin: 100px 0;
`,
DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`,
ImageGalleryWrapper = styled.div`
    width: 800px;
    height: 800px;
`,
Description = styled.p`
    font-size: ${fontSize.small};
    text-align: center;
    max-width: 400px; 
`,
DrawWrapper = styled.div`
    margin: 0 auto;
`,
DrawImg = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    cursor: pointer; 
`,
FullDraw = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`

export default {
    Wrapper,
    DescriptionWrapper,
    Name,
    Description,
    ImageGalleryWrapper,
    DrawWrapper,
    DrawImg,
    FullDraw
};