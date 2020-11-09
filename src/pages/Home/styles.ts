import { StyledSection } from '../../components/Container/styles';
import styled from 'styled-components';
import { StyledImage } from '../../components/Image/styles';
import { H5} from '../../utils/typography';

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
`;

const HomeIntroText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vmin 0 3vmin;
`;

const HomeProjectGrid = styled.div`
  display: grid;
  grid-gap: 5vmin;
  grid-template-columns: repeat(auto-fit, minmax(clamp(20ch, 30vw, 30ch), 1fr));
`;

const HomeProjectGridItem = styled.a`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  text-decoration: none;

  &::after {
    background-color: rgba(0, 0, 0, 0.8);
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.5s cubic-bezier(.39,.03,.08,1.09);
    width: 100%;
    z-index: 1;
  }

  &:hover {
    &::after,
    ${H5} {
      opacity: 1;
    }

    ${H5} {
      transform: translateY(0);
    }
  }

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: center top;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  ${H5} {
    color: white;
    font-weight: 600;
    opacity: 0;
    margin: 0;
    padding: 0.5em 1em;
    text-align: center;
    transform: translateY(50%);
    transition: opacity 0.5s cubic-bezier(.39,.03,.08,1.09) 0.15s, transform 0.4s ease 0.05s;
    z-index: 2;
  }
`;


export { StyledHome, HomeIntro, HomeIntroText, HomeProjectGrid, HomeProjectGridItem };
