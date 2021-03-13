import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import { black, white } from '../../utils/theme';

interface ColorProps {
  themeColor: string;
}

const Styleguide = styled.section`
  min-height: 100%;
  width: 100%;
`;

const StyleguideGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
`;

const StyledColor = styled.div<ColorProps>`
  align-items: center;
  background-color: ${({theme, themeColor}) => theme[themeColor].toHexString()};
  color: ${({theme, themeColor}) => tinycolor.mostReadable(theme[themeColor], [white, black]).toHexString()};
  display: flex;
  font-family: var(--fontSerif);
  font-weight: bold;
  height: 200px;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export { Styleguide, StyleguideGrid, StyledColor };
