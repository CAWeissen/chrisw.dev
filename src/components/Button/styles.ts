import tinycolor from 'tinycolor2';
import { darkGray, white } from '../../utils/theme';
import styled from 'styled-components';

type ButtonProps = {
  color?: string;
}

const StyledButton = styled.button<ButtonProps>`
  --bgColor: ${props => props.color ? props.theme[props.color].toHexString() : props.theme.black};
  --textColor: ${props => tinycolor.mostReadable((props.color ? props.theme[props.color] : props.theme.black), [white, darkGray]).toHexString()};
  align-items: center;
  background-color: var(--bgColor);
  border: none;
  border-radius: 0.25em;
  color: var(--textColor);
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;

  &:hover {
    --bgColor:
  }
`;

export { StyledButton };
