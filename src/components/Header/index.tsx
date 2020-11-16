import * as React from 'react';
import Logo from '../Logo/index';
import { StyledHeader, StyledNavItem } from './styles';
import { Link } from 'react-router-dom';
import { Container } from '../Container/index';
import Codepen from '../../assets/codepen.svg'
import Instagram from '../../assets/instagram.svg'
import Button from '../Button';

interface HeaderProps {
  darkMode: any;
};

function Header({darkMode}:HeaderProps) {
  const toggleDarkMode = () => {
    darkMode.toggle();
  }

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <StyledNavItem>
          <Link to="/about">About</Link>
        </StyledNavItem>
        {/* <StyledNavItem>
          <Link to="/projects">Projects</Link>
        </StyledNavItem> */}
        {/* <StyledNavItem>
          <Link to="/styleguide">Styleguide</Link>
        </StyledNavItem> */}
        <Button icon round tiny onClick={toggleDarkMode}>{darkMode.value ? '☀️' : '🌙'}</Button>
        <a href="https://codepen.io/CAWeissen" target="_blank" rel="noopener noreferrer">
          <Codepen/>
        </a>
        <a href="https://www.instagram.com/caweissen/" target="_blank" rel="noopener noreferrer">
          <Instagram/>
        </a>
      </Container>
    </StyledHeader>
  );
}

export default Header;
