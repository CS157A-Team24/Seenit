import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    padding-bottom: 100px;
  }
`;

export default GlobalStyle;