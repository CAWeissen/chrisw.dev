import styled from 'styled-components';
import { StyledContainer, StyledSection } from '../Container/styles';

const StyledFooter = styled.footer`
  background-color: var(--bgColor);
  color: var(--textColor);
  width: 100%;
  z-index: 5;

  a  {
    align-items: center;
    color: var(--textColor);
    display: flex;

    &:not(:first-child) {
      svg {
        margin-left: 1em;
        width: 32px;
      }
    }
  }

  img,
  svg {
    bottom: 0;
    max-width: 200px;
    position: absolute;
    left: 5vw;
  }

  ${StyledContainer} {
    align-items: center;
    color: var(--textColor);
    display: flex;
    height: 100%;
  }
`;

export { StyledFooter };
