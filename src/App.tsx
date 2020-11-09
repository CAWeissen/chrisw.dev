import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About/index';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import StyleguidePage from './pages/Styleguide/index';
import { darkTheme, lightTheme } from './utils/theme';
import useDarkMode from 'use-dark-mode';

function App() {
  const { value } = useDarkMode(true);
  const theme = value ? darkTheme : lightTheme;

  const StyledApp = styled.main`
    --bgColor: ${theme.bg.toHexString()};
    --textColor: ${theme.text.toHexString()};
    --fontSans: 'Poppins', sans-serif;
    --fontSerif: 'Yeseva One', serif;

    background-color: var(--bgColor);
    font-family: var(--fontSans);
    min-height: 100vh;
  `;

  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/styleguide">
              <StyleguidePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
