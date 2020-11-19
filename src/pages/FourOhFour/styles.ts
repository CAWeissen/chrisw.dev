import { StyledSection } from '../../components/Container/styles';
import styled from 'styled-components';
import { H1 } from '../../utils/typography';

const StyledFourOhFour = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  ${H1} {
    font-style: italic;
  }

  ${StyledSection} {
    min-height: calc(100vh - 100px);
  }
`;

export { StyledFourOhFour};
