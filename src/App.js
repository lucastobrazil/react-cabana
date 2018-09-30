import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import theme from './theme';
import TextDocs from './components/Text/docs';
import { CaptionText } from './components/Text';
import ButtonDocs from './components/Button/docs';
import Example from './components/Example';
import IconDocs from './components/Icon/docs';
import TooltipDocs from './components/Tooltip/docs';
import NotificationBar from './components/NotificationBar/docs';
import CardDocs from './components/Card/docs';
import { ButtonSmall } from './components/Button';
import { ModalBackground } from './components/Modal';
import ModalDocs from './components/Modal/docs';
import ProgressBarDocs from './components/ProgressBar/docs';
import TabsDocs from './components/Tabs/docs';
import Tabs from './components/Tabs';
import PaginationDocs from './components/Pagination/docs';

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

  small {
      display: inline-block;
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
    { label: 'Tooltips', done: true },
    { label: 'Tabs', done: true },
    { label: 'Dropdowns', done: false },
    { label: 'Forms', done: false },
    { label: 'NotificationsBar', done: true },
    { label: 'Modals', done: true },
    { label: 'Cards', done: true },
    { label: 'DatePicker', done: false },
    { label: 'ProgressBar', done: true },
    { label: 'Pagination', done: false },
];

const StyleGuide = () => (
    <div>
        <ButtonDocs />
        <TextDocs />
        <Example />
        <TooltipDocs />
        <IconDocs />
        <NotificationBar />
        <CardDocs />
        <ModalDocs />
        <ProgressBarDocs />
        <TabsDocs />
        <PaginationDocs />
    </div>
);

const Playground = () => (
    <div>
        <CaptionText>Todo</CaptionText>
        <ul>
            {elementsToDo.map((item, idx) => (
                <li key={idx} style={{ opacity: item.done ? 0.5 : 1 }}>
                    {item.label}
                </li>
            ))}
        </ul>
    </div>
);
class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ModalProvider backgroundComponent={ModalBackground}>
                    <div>
                        <GlobalStyle />
                        <Tabs>
                            <Playground label="Playground" />
                            <StyleGuide label="StyleGuide" />
                        </Tabs>
                    </div>
                </ModalProvider>
            </ThemeProvider>
        );
    }
}

export default App;
