import React from 'react';
import { H6 } from '../../utils/typography';
import CW from '../../assets/cw.svg'
import { StyledLogo } from './styles';
import { Link } from 'react-router-dom';

interface LogoProps {};

function Logo ({}: React.Props<LogoProps>) {
  return (
    <StyledLogo>
      <Link to="/">
        <CW />
        <div>
          <div className="logo-name">Chris</div>
          <div className="logo-name">Weissenberger</div>
        </div>
      </Link>
    </StyledLogo>
  )
}

export default Logo;
