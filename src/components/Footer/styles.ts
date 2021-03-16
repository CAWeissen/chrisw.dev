import styled from 'styled-components';
import { StyledContainer, StyledSection } from '../Container/styles';
import { H6 } from '../../utils/typography';

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

  ${StyledSection} {
    padding: 5vmin 0;
  }

  ${StyledContainer} {
    align-items: center;
    color: var(--textColor);
    display: flex;
    height: 100%;
  }

  ${H6} {
    margin-right: 2em;
  }

  @media screen and (max-width: 640px) {
    ${H6} {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 767px) {
    img,
    svg {
      margin-top: 4em;
      position: relative;
    }

    ${StyledSection} {
      padding-bottom: 0;
    }
  }
`;

export { StyledFooter };
