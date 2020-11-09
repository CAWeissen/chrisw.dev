import * as React from 'react';
import { StyledImage } from './styles';

function Image(props:any, {}) {
  return (
    <StyledImage>
      <img {...props} />
    </StyledImage>
  )
}

export default Image;
