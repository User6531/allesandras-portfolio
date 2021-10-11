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
ImageGalleryWrapper = styled.div`
    width: 800px;
    height: 800px;
`;

export default {
    Wrapper,
    DescriptionWrapper,
    Name,
    Description,
    ImageGalleryWrapper,
};