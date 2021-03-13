import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import Color, { darkGray, white } from '../../utils/theme';

interface ContainerProps {
  thin?: boolean;
  webGL?: boolean;
}

interface FlexContainerProps {
  thin?: boolean;
  dir: 'row' | 'column';
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  justifyAround?: boolean;
  justifyBetween?: boolean;
  justifyCenter?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
}

interface SectionProps {
  autoHeight?: boolean;
  bg?: string;
  doubled?: boolean;
  full?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  width: ${({thin}) => thin ? '80vw' : '90vw'};
  z-index: 1;

  @media (max-width: 640px) {
    width: 90vw;
  }

  ${({webGL}) => webGL && `
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const StyledFlexContainer = styled.div<FlexContainerProps>`
  ${({justifyAround}) => justifyAround && 'justify-content: space-around;'}
  ${({justifyBetween}) => justifyBetween && 'justify-content: space-between;'}
  ${({justifyCenter}) => justifyCenter && 'justify-content: center;'}
  ${({justifyStart}) => justifyStart && 'justify-content: flex-start;'}
  ${({justifyEnd}) => justifyEnd && 'justify-content: flex-end;'}
  ${({alignCenter}) => alignCenter && 'align-items: center;'}
  ${({alignEnd}) => alignEnd && 'align-items: flex-end;'}
  ${({alignStart}) => alignStart && 'align-items: flex-start;'}
  display: flex;
  flex-direction: ${({dir}) => dir};
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  width: ${({thin}) => thin ? '80vw' : '90vw'};
  z-index: 1;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const StyledSection = styled.section<SectionProps>`
  --bgColor: ${({bg, theme}) => bg ? theme[bg].toHexString() : theme.bg};
  --textColor: ${({bg, theme}) => tinycolor.mostReadable((bg ? theme[bg] : theme.bg), [white, darkGray]).toHexString()};
  background-color: ${({bg, theme}) => bg ? theme[bg].toHexString() : theme.bg};
  color: var(--textColor);
  display: flex;
  flex-direction: column;
  ${({full}) => full && 'height: 100vh;'}
  ${({autoHeight}) => autoHeight && 'min-height: 0 !important;'};
  padding: 10vmin 0;
  ${({doubled}) => doubled && 'padding-top: 0;'};
  position: relative;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 1;

  @media (prefers-color-scheme: dark) {
    background-color: var(--bgColor);
  }
`;

export { StyledContainer, StyledFlexContainer, StyledSection };
