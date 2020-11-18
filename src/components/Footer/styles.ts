import styled from 'styled-components';
import { H3 } from '../../utils/typography';
import { StyledAnchor } from '../Anchor/styles';
import { StyledContainer, StyledSection } from '../Container/styles';

const StyledFooter = styled.footer`
  background-color: var(--bgColor);
  color: var(--textColor);
  width: 100%;
  z-index: 5;

  img,
  svg {
    bottom: 0;
    max-width: 25vw;
    position: absolute;
    left: 5vw;
    width: 256px;
  }

  ${StyledAnchor} ${H3} {
    margin: 0;
  }

  ${StyledContainer} {
    align-items: center;
    color: var(--textColor);
    display: flex;
    height: 100%;
  }
`;

export { StyledFooter };
