import { StyledFlexContainer, StyledSection } from '../../components/Container/styles';
import styled from 'styled-components';
import { H1 } from '../../utils/typography';

const StyledAbout = styled.section`
  display: grid;
  width: 100%;

  ${H1} {
    font-style: italic;
  }

  ${StyledSection} {
    min-height: calc(100vh - 100px);

    @media screen and (max-width: 719px) {
      &:first-child ${StyledFlexContainer} {
        min-height: 100%;
      }
    }
  }

  ${StyledFlexContainer}  {
    /* min-height: 100%; */
  }

  .About-gallery {
    .react-photo-gallery--gallery {
      margin-bottom: 5em;
    }
  }
`;

const StyledAboutIntro = styled.div`
  width: 100%;

  @media screen and (min-width: 640px) {
    width: 50%;
  }
`;

export { StyledAbout, StyledAboutIntro };
