import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import TextDocs from './components/Text/docs';
import ButtonDocs from './components/Button/docs';

// Important to reset browser styles
const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: 1px; // eventually move away from em
  }

  body {
    font-family: ${theme.fonts.default}
  }

  h1, h2, h3, h4, h5 {
      font-weight: normal;
      margin: 0;
  }
  th {
      font-weight: normal;
      text-align: left;
  }
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <GlobalStyle />
                    {/* <Example /> */}
                    <ButtonDocs />
                    <TextDocs />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
