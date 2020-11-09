import styled from 'styled-components';

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  min-height: 100px;
  width: 100%;

  a {
    color: var(--textColor);
    align-items: center;
    display: flex;
    font-weight: 600;
    text-decoration: none;
  }

  svg {
    height: 50px;
    margin-right: 1em;
    width: 60px;
  }
`;

export { StyledLogo };
