import styled from 'styled-components';
import { StyledSection } from '../../components/Container/styles';
import { StyledImage } from '../../components/Image/styles';
import { H3, H6, P } from '../../utils/typography';

const StyledHome = styled.div`
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

  ${StyledImage} {
    margin-right: 8vmin;
    padding: 2vw 8vw 0 10vw;
    width: 100%;

    &::after {
      background: ${({theme}) => theme.salmon};
      bottom: 0;
      content: '';
      height: 80%;
      left: 0;
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.75s cubic-bezier(.39,.03,.08,1.09);
      z-index: 0;
    }
  }

  &.is-visible {
    ${StyledImage}::after {
      transform: scale(1);
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

const HomeLogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10ch, 1fr));
  grid-gap: clamp(2em, 5vw, 4em);
`;

const HomeLogoGridItem = styled.div<{index:number}>`
  align-items: center;
  color: var(--textColor);
  display: flex;
  opacity: 0;
  justify-content: center;
  position: relative;
  transition: color 0.3s ease, opacity 0.3s ease, transform 0.4s ease;
  transition-delay: ${({index}) => index * 50}ms;
  transform: translateY(32px);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  svg {
    max-height: 100px;
  }
`;

const HomeProjectGrid = styled.div`
  /* display: flex;
  flex-direction: column; */

  /* CSS Grid */
  display: grid;
  grid-gap: 3.5vw;
  grid-template-columns: repeat(auto-fit, minmax(clamp(20ch, 22.5vw, 40ch), 1fr));
`;

const HomeProjectGridItemMedia = styled.div`
  position: relative;
  margin-right: 3em;
  max-width: 720px;
  overflow: hidden;
  transition: all 0.3s ease;
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

const HomeProjectGridItem = styled.a<{index:number}>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
  opacity: 0;
  position: relative;
  text-decoration: none;
  transition: opacity 0.3s ease, transform 0.4s ease;
  transition-delay: ${({index}) => (index % 3) * 100}ms;
  transform: translateY(75px);

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

  @media (min-width: 900px) {
    flex-direction: column-reverse;

    &:hover {
      ${HomeProjectGridItemMedia} {
        transform: translateY(clamp(-3em, -4vw, -5em));
      }
    }
  }
`;

const HomeProjectGridItemInfo = styled.div`
  bottom: 0;
  left: 50%;
  margin-bottom: 1.5em;
  text-align: center;
  width: 100%;

  ${H6} {
    color: var(--textColor);
    margin: 0;
  }

  @media (min-width: 900px) {
    margin-bottom: 0;
    position: absolute;
    transform: translateX(-50%);
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  width: 100%;
`;

const Skill = styled.li<{delay:number}>`
  font-style: italic;
  line-height: 2;
  list-style-type: none;
  margin-right: 2em;
  opacity: 0;
  position: relative;
  transform: translateY(8px);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease;
    transition-delay: ${({delay}) => delay * 0.075}s;
  }

  &:last-child::after {
    content: none;
  }

  &::after {
    background-color: currentColor;
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 0.25em;
    left: calc(100% + 0.75em);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0.25em;
  }
`;

const JobGroup = styled.div`
  border-bottom: 1px solid var(--dark);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
  width: 100%;

  ${P} {
    width: 50%;
  }
`;


export { StyledHome, HomeIntro, HomeIntroText, HomeLogoGrid, HomeLogoGridItem, HomeProjectGrid, HomeProjectGridItem, HomeProjectGridItemInfo, HomeProjectGridItemMedia, SkillsList, Skill, JobGroup };
