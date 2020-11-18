import styled from 'styled-components';
import { StyledButton } from '../Button/styles';
import { StyledContainer } from '../Container/styles';
import { StyledLogo } from '../Logo/styles';

const StyledHeader = styled.header`
  background-color: var(--bgColor);
  color: var(--textColor);
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  @media screen and (min-width: 720px) {
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

const StyledNavItem = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  margin: 0 5em;
  position: relative;

  a {
    color: var(--textColor);
    font-size: clamp(2em, 2vw, 3em);
    font-weight: bold;
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;
  }

  &::after {
    border-bottom: 2px solid currentColor;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    transition: transform 0.4s ease;
    transform: scaleX(0);
    transform-origin: right;
    width: 100%;
  }

  &:hover {
    &::after {
      transform: scale(1);
      transform-origin: left;
    }
  }

  @media screen and (min-width: 720px) {
    a {
      font-size: clamp(1em, 1.25vw, 1.25em);
    }
  }
`;

const StyledHeaderActions = styled.div`
  align-items: center;
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  justify-content: space-between;
  padding: 20vh 0;
  position: fixed;
  transform: translateY(-100%);
  transition: transform 0.4s ease;
  top: 0;
  width: 100vw;

  &.is-open {
    transform: translateX(0);

    svg {
      margin-left: 0 !important;
    }
  }

  .Header-mobile-trigger {
    position: absolute;
    right: 1.3em;
    top: 0.7em;
  }

  @media screen and (min-width: 720px) {
    background-color: unset;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: static;
    transform: translateX(0);
    transition: none;
    width: auto;

    .Header-mobile-trigger {
      display: none;
    }

    ${StyledNavItem}:first-child {
      display: none;
    }
  }
`;

const StyledHeaderActionsButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledMobileTrigger = styled.div`
  background: none;
  border: none;
  color: var(--textColor);
  height: 100%;
  position: relative;
  width: 100%;

  &::after,
  &::before {
    border-bottom: 3px solid currentColor;
    content: '';
    height: 0;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform 0.2s ease;
    width: 1.5em;
  }

  &::after {
    transform-origin: right;
    transform: translate(-50%, -6px);
  }

  &::before {
    transform-origin: left;
    transform: translate(-50%, 4px);
  }

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const StyledLogoContainer = styled.div`
  align-items: center;
  display: flex;
  transition: transform 0.3s ease;
  width: 100%;

  ${StyledLogo} {
    transform: scale(0.7);
    transform-origin: left;
  }

  .Header-mobile-trigger {
    display: block;
  }

  ${StyledButton}:hover {
    ${StyledMobileTrigger} {
      &::after {
        transform: translate(-50%, -6px) scaleX(0.7);
      }

      &::before {
        transform: translate(-50%, 4px) scaleX(0.7);
      }
    }
  }

  @media screen and (min-width: 720px) {
    .Header-mobile-trigger {
      display: none;
    }

    ${StyledLogo} {
      transform: scale(1);
    }
  }
`;

export { StyledHeader, StyledHeaderActions, StyledHeaderActionsButtons, StyledLogoContainer, StyledMobileTrigger, StyledNavItem };
