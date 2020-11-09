import * as React from 'react';
import Logo from '../Logo/index';
import { StyledHeader, StyledNavItem } from './styles';
import { Link } from 'react-router-dom';
import { Container } from '../Container/index';

interface HeaderProps {};

function Header({}: React.Props<HeaderProps>) {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <StyledNavItem>
          <Link to="/about">About</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/projects">Projects</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/styleguide">Styleguide</Link>
        </StyledNavItem>
      </Container>
    </StyledHeader>
  );
}

export default Header;
