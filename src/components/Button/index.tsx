import * as React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  children: any[] | any;
  color?: string;
  tiny?: boolean;
};

function Button(props:any, {}) {
  const {
    children,
    ...buttonProps
  } = props;

  return (
    <StyledButton {...buttonProps}>
      {children}
    </StyledButton>
  )
}

export default Button;
