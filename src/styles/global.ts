import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    cursor: none;

  }

  html {
    font-size: 62.5%;
    
  }

  html, body, #__next {
    min-height: 100%;
    background-color: #1f1f1f;

    
  }

  body {
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;

   
  }

  


`

export default GlobalStyles
