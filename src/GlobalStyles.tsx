import { createGlobalStyle } from 'styled-components';
const InterRegular = require('./assets/fonts/inter/Inter-Regular.otf');

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
        --color-grey-6:    #DBDCE1;
        --color-black:     #000000;
        //fonts
        --interRegular: InterRegular, serif;
        //page width
        --page-width: 160rem;
    }

    html{
      font-size: 62.50%;  // this set default font-size @ (10px == 1rem) 
    }
    
    body{
        box-sizing: border-box;
        font-family: var(--interRegular);
        color: var(--color-grey-5);
        
        
    }

    *, *::before, *::after{
       margin: 0;
       padding: 0;
       box-sizing: inherit;
       font-family: inherit;
    }
    
    
    @font-face {
        font-family: 'InterRegular';
        src: url(${InterRegular}) format('opentype');
    }
`;
export default GlobalStyle;






