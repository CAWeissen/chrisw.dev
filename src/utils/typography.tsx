import styled from "styled-components";

interface CopyProps {
  light?: boolean;
  serif?: boolean;
}

interface HeadingProps {
  sans?: boolean;
}

const H1 = styled.h1<HeadingProps>`
  font-family: ${({sans}) => sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(2.75em, 4vw, 6em);
  margin: 0.5em 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    color: currentColor;
  }
`;

const H2 = styled.h2<HeadingProps>`
  font-family: ${({sans}) => sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(2.25em, 3.5vw, 4.25em);
  margin: 0.75em 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    color: currentColor;
  }
`;

const H3 = styled.h3<HeadingProps>`
  font-family: ${({sans}) => sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(2em, 3vw, 3.75em);
  margin: 0.75em 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    color: currentColor;
  }
`;

const H4 = styled.h4<HeadingProps>`
  font-family: ${({sans}) => sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(1.75em, 2.5vw, 3em);
  margin: 0.75em 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    color: currentColor;
  }
`;

const H5 = styled.h5<HeadingProps>`
  font-family: ${({sans}) => sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(1.5em, 2.25vw, 2.5em);
  margin: 0.75em 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    color: currentColor;
  }
`;

const H6 = styled.h6<HeadingProps>`
  font-family: ${({sans}) => sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(1.25em, 2vw, 2em);
  margin: 0.75em 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    color: currentColor;
  }
`;

const P = styled.p<CopyProps>`
  font-family: ${({serif}) => serif ? 'var(--fontSerif)' : 'var(--fontSans)'};
  font-size: clamp(1.25em, 1.75vw, 1.5em);
  font-weight: ${({light}) => light ? 300 : 600};
  line-height: 1.75;
  margin: 0 0 2em;
  transition: opacity 0.6s ease, transform 0.6s ease;

  a {
    color: currentColor;
  }
`;

export { H1, H2, H3, H4, H5, H6, P }
