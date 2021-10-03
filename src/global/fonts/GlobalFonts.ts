import { createGlobalStyle } from 'styled-components';

import LatoLight from './Lato/Lato-Light.ttf';
import LatoRegular from './Lato/Lato-Regular.ttf';
import LatoBold from './Lato/Lato-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Lato-Light';
        src: url(${LatoLight}) format('truetype');
    }
    @font-face {
        font-family: 'Lato-Bold';
        src: url(${LatoBold}) format('truetype');
    }
    @font-face {
        font-family: 'Lato-Regular';
        src: url(${LatoRegular}) format('truetype');
    }
`;

const fontSize = {
    big: '26px',
    middle: '22px',
    small: '18px',
}

export {fontSize};