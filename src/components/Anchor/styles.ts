import styled from 'styled-components';

const StyledAnchor = styled.a`
cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after,
  &::before {
    border-bottom: 1px solid currentColor;
    content: '';
    left: 0;
    position: absolute;
    transition: transform 0.4s ease;
    transform: scaleX(0);
    width: 100%;
  }

  &::after {
    bottom: 0;
    transform-origin: right;
  }

  &::before {
    content: none;
    top: 0;
    transform-origin: left;
  }

  &:hover {
    &::after {
      transform: scale(1);
      transform-origin: left;
    }

    &::before {
      transform: scale(1);
      transform-origin: right;
    }
  }
`;

export { StyledAnchor };
