import * as React from 'react';
import Logo from '../Logo/index';
import { StyledHeader, StyledHeaderActions, StyledHeaderActionsButtons, StyledLogoContainer, StyledMobileTrigger, StyledNavItem } from './styles';
import { Link } from 'react-router-dom';
import { Container } from '../Container/index';
import Codepen from '../../assets/codepen.svg'
import Instagram from '../../assets/instagram.svg'
import Button from '../Button';

interface HeaderProps {
  darkMode: any;
};

function Header({darkMode}:HeaderProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleDarkMode = () => {
    darkMode.toggle();
  }

  const toggleMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  }

  return (
    <StyledHeader>
      <Container>
        <StyledLogoContainer>
          <Logo />
          <Button icon round tiny className='Header-mobile-trigger' onClick={toggleMenu}>
            <StyledMobileTrigger />
          </Button>
        </StyledLogoContainer>
        {/* <StyledNavItem>
          <Link to="/projects">Projects</Link>
        </StyledNavItem> */}
        {/* <StyledNavItem>
          <Link to="/styleguide">Styleguide</Link>
        </StyledNavItem> */}
        <StyledHeaderActions className={menuOpen ? 'is-open' : ''}>
          <StyledNavItem onClick={() => setMenuOpen(false)}>
            <Link to="/">Home</Link>
          </StyledNavItem>
          <StyledNavItem onClick={() => setMenuOpen(false)}>
            <Link to="/about">About</Link>
          </StyledNavItem>
          <StyledHeaderActionsButtons>
            <Button icon round tiny onClick={toggleDarkMode}>{darkMode.value ? '🔆' : '🌙'}</Button>
            <a href="https://codepen.io/CAWeissen" target="_blank" rel="noopener noreferrer nofollow">
              <Codepen/>
            </a>
            <a href="https://www.instagram.com/caweissen/" target="_blank" rel="noopener noreferrer nofollow">
              <Instagram/>
            </a>
          </StyledHeaderActionsButtons>
          <Button icon round tiny className='Header-mobile-trigger' onClick={toggleMenu}>
            <StyledMobileTrigger />
          </Button>
        </StyledHeaderActions>
      </Container>
    </StyledHeader>
  );
}

export default Header;
