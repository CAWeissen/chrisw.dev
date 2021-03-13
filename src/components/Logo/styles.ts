import styled from 'styled-components';

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;

  @keyframes logo-c {
    0% {
      clip-path: polygon(0% 100%, 0% 100%, 50% 100%, 80% 100%);
    }
    40% {
      clip-path: polygon(0% 100%, 0% 0%, 50% 0%, 80% 100%);
    }
    100% {
      clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
    }
  }

  @keyframes wipe-down {
    0% {
      clip-path: inset(0% 0% 100% 0%);
    }
    100% {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @keyframes move-right {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  a {
    color: var(--textColor);
    align-items: center;
    display: flex;
    font-family: var(--fontSerif);
    font-size: 1.5em;
    font-weight: 600;
    text-decoration: none;
  }

  .logo-name {
    animation-delay: 1.1s;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-name: move-right;
    animation-timing-function: ease;
    opacity: 0;

    & + .logo-name {
      animation-delay: 1.15s;
    }
  }

  svg {
    height: 50px;
    margin-right: 1em;
    width: 60px;

    .cw_svg__logo-c {
      animation: logo-c 0.4s forwards 0.5s ease;
      clip-path: polygon(0% 100%, 15% 100%, 50% 100%, 80% 100%);
    }

    .cw_svg__logo-w-long {
      animation: wipe-down 0.25s forwards 0.75s ease;
      clip-path: inset(0% 0% 100% 0%);
    }

    .cw_svg__logo-w-short {
      animation: wipe-down 0.2s forwards 1s ease;
      clip-path: inset(0% 0% 100% 0%);
    }
  }
`;

export { StyledLogo };
