import styled from 'styled-components';
import { StyledContainer } from '../Container/styles';

const StyledFooter = styled.footer`
  background-color: var(--bgColor);
  color: var(--textColor);
  width: 100%;
  z-index: 5;

  img,
  svg {
    bottom: 0;
    max-height: 200px;
    max-width: 15vmax;
    object-fit: contain;
    position: absolute;
    left: 5vw;
    width: 256px;
  }

  ${StyledContainer} {
    align-items: center;
    color: var(--textColor);
    display: flex;
    height: 100%;
  }
`;

export { StyledFooter };
