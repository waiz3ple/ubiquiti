import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size:  62.50%;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f0f2f5;
        color: #333;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    button {
        cursor: pointer;
        font-family: inherit;
    }

    input, textarea {
        font-family: inherit;
        font-size: inherit;
    }


    img {
        max-width: 100%;
        height: auto;   
    }
        
    ul, ol {
        list-style: none;
    }
    
    








    `;  