import * as React from 'react';
import { StyledLink } from './styles';

interface SectionProps {
  children: any[] | any;
  color?: string;
};

function Button(props:any, {}) {
  const {
    children,
    ...linkProps
  } = props;

  return (
    <StyledLink {...linkProps}>
      {children}
    </StyledLink>
  )
}

export default Button;
