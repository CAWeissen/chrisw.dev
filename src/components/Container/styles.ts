import Color, { darkGray, white } from '../../utils/theme';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

type ContainerProps = {
  thin?: boolean;
}

type FlexContainerProps = {
  thin?: boolean;
  dir: 'row' | 'column';
}

type SectionProps = {
  bg?: string;
  full?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 1400px;
  width: ${props => props.thin ? '80vw' : '90vw'};

  @media (max-width: 640px) {
    width: 90vw;
  }
`;

const StyledFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.dir};
  margin: 0 auto;
  max-width: 1400px;
  width: ${props => props.thin ? '80vw' : '90vw'};

  @media (max-width: 640px) {
    width: 90vw;
  }
`;

const StyledSection = styled.section<SectionProps>`
  --bgColor: ${props => props.bg ? props.theme[props.bg].toHexString() : props.theme.bg};
  --textColor: ${props => tinycolor.mostReadable((props.bg ? props.theme[props.bg] : props.theme.bg), [white, darkGray]).toHexString()};
  background-color: ${props => props.bg ? props.theme[props.bg].toHexString() : props.theme.bg};
  color: var(--textColor);
  ${props => props.full && 'height: 100vh;'}
  padding: 10vmin 0;
  position: relative;
  transition: all 0.5s ease;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: var(--bgColor);
  }
`;

export { StyledContainer, StyledFlexContainer, StyledSection };
