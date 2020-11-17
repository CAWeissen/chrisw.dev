import styled from 'styled-components';

const StyledProjects = styled.section`
  height: 100vh;
  /* display: grid;
  width: 100%; */

  .half {
    width: 450px;
    max-width: 50%;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 4rem;
    grid-template-areas: 'left right' 'content content';
  }

  .content {
    grid-area: content;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  @keyframes changewidth {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .transition {
    display: inline-block;
    position: absolute !important;
    transition: all 0.5s ease;
    transition-property: opacity, transform;
  }

  .transition.vertical[hidden] {
    transition-delay: 0s;
    opacity: 0;
    transform: translate3d(0, -20px, 0) !important;
  }

  .transition.horizontal[hidden] {
    transition-delay: 0s;
    opacity: 0;
    transform: translate3d(30px, 0, 0) !important;
  }

  .jumbo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -40%, 0);
    display: flex;
    flex-direction: column;
    align-items: left;
    min-width: 380px;
  }

  @media (max-width: 580px) {
    .logo {
      width: 70px;
      height: 70px;
      top: 1.5rem;
      left: 2rem;
    }
    .menu.right {
      top: 2rem;
      right: 2rem;
    }
    .jumbo h1 {
      font-size: 46px;
      line-height: 46px;
      letter-spacing: 26px;
      margin-left: 26px;
    }
  }

  .scrollArea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 100px);
    overflow: auto;
  }

`;

export { StyledProjects };
