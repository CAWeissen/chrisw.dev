import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

function Content() {
  const darkMode = useDarkMode(true);
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header darkMode={darkMode} />
      <TransitionGroup className="content">
        <CSSTransition key={location.pathname} timeout={500} classNames="transition">
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
    </>
  )
}

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

    .transition-exit {
      section {
        opacity: 1;
      }
    }

    .transition-exit-active {
      section {
        opacity: 0;
      }
    }

    .transition-enter {
      section {
        opacity: 0;
      }
    }

    .transition-enter-active {
      section {
        opacity: 1;
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
          <Content />
        </HashRouter>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
