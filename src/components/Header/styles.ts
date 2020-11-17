import styled from 'styled-components';
import { StyledContainer } from '../Container/styles';

const StyledHeader = styled.header`
  background-color: var(--bgColor);
  color: var(--textColor);
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  @media screen and (min-width: 640px) {
    height: 100px;
  }

  a  {
    align-items: center;
    color: var(--textColor);
    display: flex;

    &:not(:first-child) {
      svg {
        margin-left: 1em;
        width: 32px;
      }
    }
  }

  img {
    width: auto;
  }

  ${StyledContainer} {
    align-items: center;
    color: var(--textColor);
    display: flex;
    height: 100%;
  }
`;

const StyledLogoContainer = styled.div`
  align-items: center;
  display: flex;
  transform: scale(0.7);
  transform-origin: left;
  transition: transform 0.3s ease;
  width: 100%;

  @media screen and (min-width: 640px) {
    transform: scale(1);
  }
`;

const StyledNavItem = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  position: relative;

  a {
    color: var(--textColor);
    font-size: clamp(1em, 1.25vw, 1.25em);
    font-weight: bold;
    padding: 0;
    margin: 0 1em;
    text-decoration: none;
    text-transform: uppercase;
  }

  &::after {
    border-bottom: 1px solid currentColor;
    bottom: 0;
    content: '';
    left: 1em;
    position: absolute;
    transition: transform 0.4s ease;
    transform: scaleX(0);
    transform-origin: right;
    width: calc(100% - 2em);
  }

  &:hover {
    &::after {
      transform: scale(1);
      transform-origin: left;
    }
  }
`

export { StyledHeader, StyledLogoContainer, StyledNavItem };
