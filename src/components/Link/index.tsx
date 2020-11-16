import * as React from 'react';
import type { LinkProps } from 'react-router-dom';
import { StyledLink } from './styles';

interface SectionProps {
  children: any[] | any;
  color?: string;
};

function Link(props:LinkProps, {}) {
  const{
    children,
    ...linkProps
  } = props;
  return (
    <StyledLink {...props}>
      {props.children}
    </StyledLink>
  )
}

export default Button;
