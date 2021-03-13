import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

import About from './pages/About/index';
import Home from './pages/Home/index';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { H1, H2, H3, H4, H5, H6, P } from './utils/typography';
import { darkTheme, lightTheme } from './utils/theme';
import { StyledButton } from './components/Button/styles';
import FourOhFour from './pages/FourOhFour';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const appRef = useRef(null);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  const StyledApp = styled.main`
    --bgColor: ${theme.bg.toHexString()};
    --textColor: ${theme.text.toHexString()};
    --fontSans: 'Poppins', sans-serif;
    --fontSerif: 'Yeseva One', serif;

    background-color: var(--bgColor);
    font-family: var(--fontSans);
    min-height: 100vh;
    padding-top: 60px;

    .tp-dfwv {
      top: 108px;
    }

    .reveal {
      ${H1},
      ${H2},
      ${H3},
      ${H4},
      ${H5},
      ${H6},
      ${P},
      ${StyledButton} {
        opacity: 0;
        transform: translateY(1em);
      }
    }

    .is-visible {
      ${H1},
      ${H2},
      ${H3},
      ${H4},
      ${H5},
      ${H6},
      ${P},
      ${StyledButton} {
        opacity: 1;
        transform: none;
      }
    }

    @media screen and (min-width: 720px) {
      padding-top: 100px;
    }
  `;

  return (
    <StyledApp data-scroll-container ref={appRef}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ScrollToTop />
          <Header darkMode={darkMode} />
          <TransitionGroup className="transition-group">
            <CSSTransition key={window.location.pathname} timeout={500}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About darkMode={darkMode} />
                </Route>
                <Route path="*">
                  <FourOhFour />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
