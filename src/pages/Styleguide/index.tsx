import * as React from 'react';
import { Styleguide, StyleguideGrid, StyledColor } from './styles';
import { Container, Section } from '../../components/Container/index';
import { H1, H2, H3, H4, H5, H6, P} from '../../utils/typography';

interface StyleguideProps {};

function StyleguidePage({}: React.Props<StyleguideProps>) {
  return (
    <Styleguide>
      <Section>
        <Container>
          <H1>Styleguide</H1>
          <StyleguideGrid>
            <StyledColor themeColor={'red'}>Red</StyledColor>
            <StyledColor themeColor={'salmon'}>Salmon</StyledColor>
            <StyledColor themeColor={'tan'}>Tan</StyledColor>
            <StyledColor themeColor={'green'}>Green</StyledColor>
            <StyledColor themeColor={'blue'}>Blue</StyledColor>
            <StyledColor themeColor={'offWhite'}>Off White</StyledColor>
            <StyledColor themeColor={'lightGray'}>Light Gray</StyledColor>
            <StyledColor themeColor={'gray'}>Gray</StyledColor>
            <StyledColor themeColor={'darkGray'}>Dark Gray</StyledColor>
            <StyledColor themeColor={'black'}>Black</StyledColor>
          </StyleguideGrid>
          <H1>Heading H1</H1>
          <H2>Heading H2</H2>
          <H3>Heading H3</H3>
          <H4>Heading H4</H4>
          <H5>Heading H5</H5>
          <H6>Heading H6</H6>
          <P>Paragraph</P>
        </Container>
      </Section>
    </Styleguide>
  );
}

export default StyleguidePage;
