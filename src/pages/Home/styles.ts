import { StyledSection } from '../../components/Container/styles';
import styled from 'styled-components';
import { StyledImage } from '../../components/Image/styles';
import { H3, P } from '../../utils/typography';

const StyledHome = styled.section`
  display: grid;
  width: 100%;

  ${StyledSection}:first-child {
    padding-top: 5vmin;
  }
`;

const HomeIntro = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @keyframes revealRight {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(100%)
    }
  }

  ${StyledImage} {
    margin-right: 8vmin;
    padding: 2vw 8vw 0 10vw;
    width: 100%;

    &::after {
      animation: revealRight 0.75s cubic-bezier(.39,.03,.08,1.09) forwards;
      background: ${props => props.theme.salmon};
      bottom: 0;
      content: '';
      height: 80%;
      left: 0;
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left;
      z-index: 0;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    ${StyledImage} {
      margin-right: 0;
      width: 100%;

      img {
        width: 60%;
      }
    }
  }
`;

const HomeIntroText = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 10vmin 0 3vmin;

  @media (max-width: 900px) {
    margin: 3vmin 0 0;
  }
`;

const HomeProjectGrid = styled.div`
  /* display: flex;
  flex-direction: column; */

  /* CSS Grid */
  display: grid;
  grid-gap: 5vw;
  grid-template-columns: repeat(auto-fit, minmax(clamp(20ch, 30vw, 40ch), 1fr));
`;

const HomeProjectGridItem = styled.a<{index:number}>`
  align-items: center;
  display: flex;
  margin-bottom: 5em;
  opacity: 0;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  transition: opacity 0.3s ease, transform 0.4s ease;
  transition-delay: ${props => (props.index % 3) * 100}ms;
  transform: translateY(100px);

  /* CSS Grid */
  margin-bottom: 0;

  ${H3} {
    color: var(--textColor);
    font-weight: 600;
    margin: 0;
  }

  ${P} {
    color: var(--textColor);
  }

  &:hover {
    video {
      opacity: 1;
    }
  }

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const HomeProjectGridItemInfo = styled.div`
  align-items: flex-start;
  display: flex;
  display: none;
  flex-direction: column;
  height: 100%;
  width: 40%;

  @media (max-width: 900px) {
    margin-bottom: 2em;
    width: 100%;
  }
`;

const HomeProjectGridItemMedia = styled.div`
  position: relative;
  margin-right: 3em;
  max-width: 720px;
  width: 60%;

  /* CSS Grid */
  margin-right: 0;
  width:  100%;

  img,
  video {
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: center top;
    position: absolute;
    top: 0;
    width: 100%;
    transition: opacity 0.5s ease;
  }

  video {
    opacity: 0;
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 75%;
    width: 100%;
  }

  @media (max-width: 900px) {
    margin-right: 0;
    width:100%;
  }
`;


export { StyledHome, HomeIntro, HomeIntroText, HomeProjectGrid, HomeProjectGridItem, HomeProjectGridItemInfo, HomeProjectGridItemMedia };
