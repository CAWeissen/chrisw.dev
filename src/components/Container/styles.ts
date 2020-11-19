import Color, { darkGray, white } from '../../utils/theme';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

type ContainerProps = {
  thin?: boolean;
  webGL?: boolean;
}

type FlexContainerProps = {
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

type SectionProps = {
  bg?: string;
  doubled?: boolean;
  full?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  width: ${props => props.thin ? '80vw' : '90vw'};
  z-index: 1;

  @media (max-width: 640px) {
    width: 90vw;
  }

  ${props => props.webGL && `
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const StyledFlexContainer = styled.div<FlexContainerProps>`
  ${props => props.justifyAround && 'justify-content: space-around;'}
  ${props => props.justifyBetween && 'justify-content: space-between;'}
  ${props => props.justifyCenter && 'justify-content: center;'}
  ${props => props.justifyStart && 'justify-content: flex-start;'}
  ${props => props.justifyEnd && 'justify-content: flex-end;'}
  ${props => props.alignCenter && 'align-items: center;'}
  ${props => props.alignEnd && 'align-items: flex-end;'}
  ${props => props.alignStart && 'align-items: flex-start;'}
  display: flex;
  flex-direction: ${props => props.dir};
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  width: ${props => props.thin ? '80vw' : '90vw'};
  z-index: 1;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const StyledSection = styled.section<SectionProps>`
  --bgColor: ${props => props.bg ? props.theme[props.bg].toHexString() : props.theme.bg};
  --textColor: ${props => tinycolor.mostReadable((props.bg ? props.theme[props.bg] : props.theme.bg), [white, darkGray]).toHexString()};
  background-color: ${props => props.bg ? props.theme[props.bg].toHexString() : props.theme.bg};
  color: var(--textColor);
  display: flex;
  flex-direction: column;
  ${props => props.full && 'height: 100vh;'}
  padding: 10vmin 0;
  ${props => props.doubled && 'padding-top: 0;'};
  position: relative;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 1;

  @media (prefers-color-scheme: dark) {
    background-color: var(--bgColor);
  }
`;

export { StyledContainer, StyledFlexContainer, StyledSection };
