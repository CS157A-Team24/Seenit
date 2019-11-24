import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    padding-bottom: 2%;
    height: 100%;
  }

`;

export default GlobalStyle;