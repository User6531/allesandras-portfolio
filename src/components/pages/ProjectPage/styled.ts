import styled from 'styled-components';
import { fontSize } from '../../../global/fonts/GlobalFonts';

const Wrapper = styled.div`

`,
DescriptionWrapper = styled.div`
    margin: 100px 0;
`,
Name = styled.h1`
    font-size: ${fontSize.XXlarge};
    text-align: center;
`,
Description = styled.p`
    font-size: ${fontSize.small};
    text-align: center;
    
`,
ImgWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`,
Img = styled.img`
    width: 600px;
    margin: 5px;

`;

export default {
    Wrapper,
    DescriptionWrapper,
    Name,
    Description,
    ImgWrapper,
    Img,
};