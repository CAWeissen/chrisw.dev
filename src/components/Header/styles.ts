import styled from 'styled-components';
import { StyledContainer } from '../Container/styles';

const StyledHeader = styled.header`
  background-color: var(--bgColor);
  color: var(--textColor);
  height: 100px;
  width: 100%;

  a:first-child {
    margin-right: auto;
    max-height: 100%;
  }

  img {
    width: auto;
  }

  ${StyledContainer} {
    align-items: center;
    display: flex;
    height: 100%;
  }
`;

const StyledNavItem = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;

  a {
    color: var(--textColor);
    font-size: clamp(1em, 1.25vw, 1.25em);
    font-weight: bold;
    padding: 0 1em;
    text-decoration: none;
    text-transform: uppercase;
  }

  &::after {
    border-bottom: 1px solid currentColor;
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
`

export { StyledHeader, StyledNavItem };
