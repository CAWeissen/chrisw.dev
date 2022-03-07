import styled from 'styled-components';
import { StyledFlexContainer, StyledSection } from '../../components/Container/styles';
import { H1, P } from '../../utils/typography';
import { StyledImage } from '../../components/Image/styles';

const StyledAbout = styled.div`
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
    img {
      border-radius: 10px;
    }

    .react-photo-gallery--gallery {
      margin-bottom: 5em;

      & > div {
        justify-content: space-between;
      }
    }

    &--instagram {
      position: relative;

      &:hover {
        &::after,
        &::before {
          opacity: 1;
        }
      }

      &::after {
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity 0.2s ease;
        width: 100%;
        z-index: 1;
      }

      &::before {
        bottom: 10px;
        color: white;
        content: 'See on Instagram';
        opacity: 0;
        position: absolute;
        right: 10px;
        text-align: right;
        transition: opacity 0.2s ease;
        z-index: 2;
      }
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

    img {
      border-radius: 20px;
      object-position: 75% 0%;
    }
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

const StyledThree = styled.div`
  canvas {
    opacity: 0;
    transition: opacity 0.2s ease 0.5s;
  }

  &.is-ready canvas {
    opacity: 1;
  }
`;

export { StyledAbout, StyledAboutBio, StyledAboutBioCopy, StyledAboutIntro, StyledThree };
