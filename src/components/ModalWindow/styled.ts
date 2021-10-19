import styled from 'styled-components';
// import { breakpoints } from '../../global/utils';

const Title = styled.h1`
    text-align: center;
    font-size: ${(props: any) => props.theme.fontSizes.large};
`,
Description = styled.p`
    font-size: ${(props: any) => props.theme.fontSizes.small};
    text-align: center;
`,
TelegramButton = styled.a`
    text-align: center;
    display: block;
    margin: 0 auto;
    background-color: blue;
`,
CloseButton = styled.button`
    display: block;
    margin: 0 auto;
`;

export {
    Title,
    Description,
    TelegramButton,
    CloseButton
}