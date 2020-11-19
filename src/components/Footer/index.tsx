import * as React from 'react';
import { StyledFooter } from './styles';
import { H6 } from '../../utils/typography';
import { FlexContainer, Section } from '../Container/index';
import Anchor from '../Anchor';

interface FooterProps {};

function Footer({}:FooterProps) {
  return (
    <StyledFooter>
      <Section color={'black'}>
        <FlexContainer direction="column" alignEnd>
          <Anchor onClick={() => window.location.href = 'mailto:caweissen@gmail.com'}>
            <H6>Let's talk!</H6>
          </Anchor>
        </FlexContainer>
        <img src="/assets/img/polyhead.png" alt="Polygon version of Chris Weissenberger's head" />
      </Section>
    </StyledFooter>
  );
}

export default Footer;
