import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    min-height: 1000px;
  }
`;

export default GlobalStyle;