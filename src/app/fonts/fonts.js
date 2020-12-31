import { createGlobalStyle } from 'styled-components';

import Oswald from './oswald-regular-webfont.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Oswald Regular';
        src: local('Oswald Regular'), local('OswaldRegular'),
        url(${Oswald}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
