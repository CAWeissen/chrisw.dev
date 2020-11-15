import styled from "styled-components";

interface CopyProps {
  serif?: boolean;
}

interface HeadingProps {
  sans?: boolean;
}

const H1 = styled.h1<HeadingProps>`
  font-family: ${props => props.sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(2.75em, 4vw, 6em);
  margin: 0.5em 0;
`;

const H2 = styled.h2<HeadingProps>`
  font-family: ${props => props.sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(2.25em, 3.5vw, 4.25em);
  margin: 0.75em 0;
`;

const H3 = styled.h3<HeadingProps>`
  font-family: ${props => props.sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(2em, 3vw, 3.75em);
  margin: 1.5em 0;
`;

const H4 = styled.h4<HeadingProps>`
  font-family: ${props => props.sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(1.75em, 2.5vw, 3em);
  margin: 1.5em 0;
`;

const H5 = styled.h5<HeadingProps>`
  font-family: ${props => props.sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(1.5em, 2.25vw, 2.5em);
  margin: 1.5em 0;
`;

const H6 = styled.h6<HeadingProps>`
  font-family: ${props => props.sans ? 'var(--fontSans)' : 'var(--fontSerif)'};
  font-size: clamp(1.25em, 2vw, 2em);
  margin: 1.5em 0;
`;

const P = styled.p<CopyProps>`
  font-family: ${props => props.serif ? 'var(--fontSerif)' : 'var(--fontSans)'};
  font-size: clamp(1.35em, 1.75vw, 1.5em);
  font-weight: 600;
`;

export { H1, H2, H3, H4, H5, H6, P }
