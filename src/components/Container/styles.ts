import Color, { bgDark, bgLight, black, white } from '../../utils/theme';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

type FlexContainerProps = {
  dir: 'row' | 'column';
}

type SectionProps = {
  bg?: string;
  full?: boolean;
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 90vw;
`;

const StyledFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.dir};
  margin: 0 auto;
  max-width: 1400px;
  width: 90vw;
`;

const StyledSection = styled.section<SectionProps>`
  background-color: ${props => props.bg ? props.theme[props.bg].toHexString() : props.theme.bg};
  color: ${props => tinycolor.mostReadable((props.bg ? props.theme[props.bg] : props.theme.bg), [white, black]).toHexString()};
  ${props => props.full && 'height: 100vh;'}
  padding: 10vmin 0;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: #${bgDark.toHex()};
    color: ${props => tinycolor.mostReadable(props.bg ? props.theme[props.bg] : props.theme.bg, [white, black]).toHexString()};
  }
`;

export { StyledContainer, StyledFlexContainer, StyledSection };
