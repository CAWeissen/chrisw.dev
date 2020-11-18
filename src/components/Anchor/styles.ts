import styled from 'styled-components';

const StyledAnchorArrow = styled.span`
  border-bottom: 0.4em solid currentColor;
  display: inline-block;
  height: 0;
  margin-left: 2em;
  position: relative;
  transform: translateX(-1em);
  transition: all 0.2s ease;
  width: 2.5em;

  &::after {
    border-right: 0.4em solid currentColor;
    border-top: 0.4em solid currentColor;
    content: '';
    height: 1.5em;
    right: 0.4em;
    position: absolute;
    top: 50%;
    transform: rotate(45deg) translateY(-50%);
    width: 1.5em;
  }
`;

const StyledAnchor = styled.a`
  align-items: center;
  color: var(--textColor);
  cursor: pointer;
  display: flex;
  position: relative;
  text-decoration: none;

  &:hover {
    transform: none;

    ${StyledAnchorArrow} {
      transform: translateX(0);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export { StyledAnchor, StyledAnchorArrow };
