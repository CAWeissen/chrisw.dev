import * as React from 'react';
import { StyledButton } from './styles';

interface SectionProps {
  children: any[] | any;
  color?: string;
};

function Button(props:any, {}) {
  const {
    color,
    children,
    ...buttonProps
  } = props;

  return (
    <StyledButton color={color} {...buttonProps}>
      {children}
    </StyledButton>
  )
}

export default Button;
