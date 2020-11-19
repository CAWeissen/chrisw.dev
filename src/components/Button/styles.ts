import tinycolor from 'tinycolor2';
import { darkGray, white } from '../../utils/theme';
import styled from 'styled-components';

type ButtonProps = {
  color?: string;
  icon?: boolean;
  round?: boolean;
  size?: number;
  tiny?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  --bgColor: ${props => props.color ? props.theme[props.color].toHexString() : props.theme.dark};
  --textColor: ${props => tinycolor.mostReadable((props.color ? props.theme[props.color] : props.theme.dark), [white, darkGray]).toHexString()};
  align-items: center;
  background-color: var(--bgColor);
  border: 3px solid transparent;
  border-radius: ${props => props.round ? '3em' : '0.25em'};
  color: var(--textColor);
  cursor: pointer;
  display: flex;
  font-size: ${props => props.tiny ? '14px' : '20px'};
  font-weight: bold;
  justify-content: center;
  padding: ${props => props.tiny ? '0.5em 0.75em' : '1em 1.5em'};
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease, opacity 0.8s ease, transform 0.8s ease;
  white-space: nowrap;
  ${props => props.size && `
    height: ${props.size * 2}rem;
    flex-shrink: 0;
    padding: 0;
    width: ${props.size * 2}rem;

    svg  {
      transition: all 0.2s ease;
      width: 60%;
    }
  `};
  ${props => props.icon && `
    height: 40px;
    flex-shrink: 0;
    width: 40px;
  `}

  &:hover {
    --bgColor: ${props => props.color ? props.theme[props.color].toHexString() : props.theme.light};
    --textColor: ${props => tinycolor.mostReadable((props.color ? props.theme[props.color] : props.theme.light), [white, darkGray]).toHexString()};;
    border: 3px solid var(--textColor);
  }

  &:active {
    box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.25);

    svg {
      transform: scale(0.9);
    }
  }
`;

export { StyledButton };
