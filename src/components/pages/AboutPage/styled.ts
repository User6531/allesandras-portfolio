import styled from 'styled-components';
import { breakpoints } from '../../../global/utils';

const S = {
    Wrapper: styled.div`
        width: 100%;
        text-align: center;
        margin: 0 auto;
        ${breakpoints("padding", "px", [
            { 2560: 100 },
            { 1440: 100 },
            { 1024: 100 },
            { 768: 50 },
            { 425: 15 },
        ])};
        ${
            (props: any) => {
                return breakpoints("font-size", "", [
                    { 2560: props.theme.fontSizes.medium },
                    { 1440: props.theme.fontSizes.medium },
                    { 1024: props.theme.fontSizes.medium },
                    { 768: props.theme.fontSizes.medium },
                    { 425: props.theme.fontSizes.small },
                ])
            }
        }
    `,
    Title: styled.h1`

    `,
};

export default S;