import * as React from 'react';
import type { LinkProps } from 'react-router-dom';
import { StyledLink } from './styles';

function Link(props:LinkProps, {}) {
  const{
    children,
    ...linkProps
  } = props;
  return (
    <StyledLink {...linkProps}>
      {props.children}
    </StyledLink>
  )
}

export default Link;
