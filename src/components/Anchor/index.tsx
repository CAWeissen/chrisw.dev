import * as React from 'react';
import { StyledAnchor, StyledAnchorArrow } from './styles';

function Anchor(props:any, {}) {
  const{
    children,
    ...anchorProps
  } = props;
  return (
    <StyledAnchor {...anchorProps}>
      {props.children}
      {/* <StyledAnchorArrow /> */}
    </StyledAnchor>
  )
}

export default Anchor;
