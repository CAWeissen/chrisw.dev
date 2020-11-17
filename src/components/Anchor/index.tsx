import * as React from 'react';
import { StyledAnchor } from './styles';

function Anchor(props:any, {}) {
  const{
    children,
    ...anchorProps
  } = props;
  return (
    <StyledAnchor {...anchorProps}>
      {props.children}
    </StyledAnchor>
  )
}

export default Anchor;
