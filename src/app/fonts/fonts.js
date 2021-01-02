import { createGlobalStyle } from 'styled-components';

import Oswald from './oswald-regular-webfont.woff';
import Montserrat from './montserratalternates-regular-webfont.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Oswald Regular';
        src: local('Oswald Regular'), local('OswaldRegular'),
        url(${Oswald}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Montserrat Regular';
        src: local('Montserrat Regular'), local('MontserratRegular'),
        url(${Montserrat}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
