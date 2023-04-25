import { createGlobalStyle } from 'styled-components';
const InterRegular = require('./fonts/inter/Inter-Regular.otf');

const GlobalStyle = createGlobalStyle`
    :root{
        //colors
        --color-primary:   #003C9E;
        --color-secondary: #006FFF;
        --color-white:     #FFFFFF;
        --color-grey-1:    #F6F6F8;
        --color-grey-2:    #EDEDF0;
        --color-grey-3:    #E5E5E5;
        --color-grey-4:    #BDBDBD;
        --color-grey-5:    #838691;
        --color-black:     #000000;
        //fonts
        --interRegular: InterRegular, serif;
    }

    html{
      font-size: 62.50%;  // this set default font-size @ (10px == 1rem) 
    }
    
    body{
        box-sizing: border-box;
        font-family: var(--interRegular)
    }

    *, *::before, *::after{
       margin: 0;
       padding: 0;
       box-sizing: inherit;
    }
    
    
    @font-face {
        font-family: 'InterRegular';
        src: url(${InterRegular}) format('opentype');
    }
`;
export default GlobalStyle;






