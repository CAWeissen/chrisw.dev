import { StyledContainer } from '../../components/Container/styles';
import styled from 'styled-components';
import { H1 } from '../../utils/typography';

const StyledAbout = styled.section`
  display: grid;
  width: 100%;

  ${StyledContainer} {
    position: relative;
    z-index: 1;
  }

  ${H1} {
    font-style: italic;
  }
`;

export { StyledAbout };
