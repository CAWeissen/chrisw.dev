import tinycolor from 'tinycolor2';
import { darkGray, white } from '../../utils/theme';
import styled from 'styled-components';

type ButtonProps = {
  color?: string;
  icon?: boolean;
  round?: boolean;
  tiny?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  --bgColor: ${props => props.color ? props.theme[props.color].toHexString() : props.theme.black};
  --textColor: ${props => tinycolor.mostReadable((props.color ? props.theme[props.color] : props.theme.black), [white, darkGray]).toHexString()};
  align-items: center;
  background-color: var(--bgColor);
  border: none;
  border-radius: ${props => props.round ? '50%' : '0.25em'};
  color: var(--textColor);
  cursor: pointer;
  display: flex;
  font-size: ${props => props.tiny ? '14px' : '20px'};
  font-weight: bold;
  justify-content: center;
  padding: ${props => props.tiny ? '0.5em 0.75em' : '1em 1.5em'};
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  ${props => props.icon && `
    height: 40px;
    flex-shrink: 0;
    width: 40px;
  `}

  &:hover {
    --bgColor:
  }
`;

export { StyledButton };
