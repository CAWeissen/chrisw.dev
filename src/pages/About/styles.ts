import { StyledFlexContainer, StyledSection } from '../../components/Container/styles';
import styled from 'styled-components';
import { H1, P } from '../../utils/typography';
import { StyledImage } from '../../components/Image/styles';

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

const StyledAboutBio = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledImage} {
    object-fit: cover;
    margin-bottom: 2em;
    max-height: 500px;
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;

    ${StyledImage} {
      margin-bottom: 0;
      margin-right: 3em;
    }
  }

  ${P} {
    span {
      font-size: 16px;
      font-style: italic;
      font-weight: 400;
    }
  }
`;

const StyledAboutBioCopy = styled.div`
  width: 100%;
`;

export { StyledAbout, StyledAboutBio, StyledAboutBioCopy, StyledAboutIntro };
