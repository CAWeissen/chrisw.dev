import styled from 'styled-components';

const StyledImage = styled.div`
  position: relative;

  img,
  svg {
    display: block;
    height: 100%;
    object-fit: cover;
    position: relative;
    width: 100%;
    z-index: 1;
  }
`;

export { StyledImage };
