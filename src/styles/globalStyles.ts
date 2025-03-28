import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary Colors */
    --blue-900: #003C9E;
    --blue-600: #006FFF;

    /* Neutral Colors */
    --white:    #FFFFFF;
    --gray-50:  #F6F6F8;
    --gray-100: #EDEDF0;
    --gray-200: #E5E5E5;
    --gray-300: #DBDCE1;
    --gray-400: #BDBDBD;
    --gray-600: #838691;
    --gray-700: #4F545C;
    --gray-800: #2B2D33;
    --gray-900: #1E2024;
    --black: rgb(8, 7, 7);

    /* Typography */
    --font-family-base: 'InterRegular', serif;
    --font-size-xs: 1.2rem; /* 12px */
    --font-size-sm: 1.4rem; /* 14px */
    --font-size-md: 1.6rem; /* 16px */
    --font-size-lg: 1.8rem; /* 18px */
    --font-size-xl: 2.4rem; /* 24px */
    --line-height-base: 1.5;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Layout */
    --layout-max-width: 1600px;
    --layout-gutter: 2rem; /* Default padding/margin for containers */

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

    /* Borders */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-width: 1px;
    --border-color: var(--gray-200);

    /* Transitions */
    --transition-fast: 0.2s ease-in-out;
    --transition-normal: 0.3s ease-in-out;

    /* Breakpoints (for media queries) */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;

    /* Z-Index Layers */
    --z-index-base: 0;
    --z-index-elevated: 10;
    --z-index-overlay: 100;
    --z-index-modal: 1000;
  }

  html {
    font-size: 62.5%;   //  1rem = 10px
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: var(--font-family-base);
    font-size: var(--font-size-md);
    line-height: var(--line-height-base);
    color: var(--gray-600);
    margin: 0;
    padding: 0;
    background-color: var(--white);
  }

  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: inherit;
  }

  @font-face {
    font-family: 'InterRegular';
    src: url('/fonts/Inter-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  a {
    color: var(--blue-600);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--blue-900);
    text-decoration: underline;
  }

  button, 
  input, 
  select, 
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: none;
    outline: none;
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid var(--blue-600);
    outline-offset: 2px;
  }

  /* Disabled state */
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;