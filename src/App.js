import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import TextDocs from './components/Text/docs';
import { CaptionText } from './components/Text';
import ButtonDocs from './components/Button/docs';
import Example from './components/Example';
import IconDocs from './components/Icon/docs';
import TooltipDocs from './components/Tooltip/docs';
import { ButtonSmall } from './components/Button';

// Important to reset browser styles
const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
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

class BasicRouter extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'playground',
        };
    }

    changePage = page => {
        this.setState({ currentPage: page });
    };

    render() {
        const { currentPage } = this.state;
        return (
            <div>
                <ButtonSmall
                    bg={currentPage === 'playground' ? 'primary' : null}
                    color={currentPage === 'playground' ? 'white' : null}
                    onClick={() => this.changePage('playground')}
                >
                    Playground
                </ButtonSmall>
                <ButtonSmall
                    color={currentPage === 'styleguide' ? 'white' : null}
                    bg={currentPage === 'styleguide' ? 'primary' : null}
                    onClick={() => this.changePage('styleguide')}
                >
                    StyleGuide
                </ButtonSmall>
                {this.state.currentPage === 'styleguide' ? <StyleGuide /> : <Playground />}
            </div>
        );
    }
}

const elementsToDo = [
    { label: 'Buttons', done: true },
    { label: 'Text', done: true },
    { label: 'Colours', done: true },
    { label: 'Icons', done: false },
    { label: 'Tooltips', done: false },
    { label: 'Tabs', done: false },
    { label: 'Dropdowns', done: false },
    { label: 'Forms', done: false },
    { label: 'Alerts', done: false },
    { label: 'Overlays', done: false },
    { label: 'Cards', done: false },
    { label: 'DatePicker', done: false },
    { label: 'ProgressBar', done: false },
    { label: 'Pagination', done: false },
];

const StyleGuide = () => (
    <div>
        <ButtonDocs />
        <TextDocs />
        <Example />
    </div>
);

const Playground = () => {
    return (
        <div>
            <TooltipDocs />
            <IconDocs />
            <CaptionText>Todo</CaptionText>
            <ul>
                {elementsToDo.map((item, idx) => (
                    <li key={idx} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <GlobalStyle />
                    <BasicRouter />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
