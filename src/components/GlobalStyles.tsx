import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
        /* @@@@@@@@@@temp */
        padding:  1rem;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    button {
        cursor: pointer;
        font-family: inherit;
        padding: 0.5rem 1rem;
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

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: normal;
    }

    p {
        margin: 0;
        line-height: 1.5;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }



    `;  
    export default GlobalStyles