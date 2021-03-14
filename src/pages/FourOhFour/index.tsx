import React from 'react';
import { InView } from 'react-intersection-observer';

import { StyledFourOhFour } from './styles';
import { H1, P } from '../../utils/typography';
import { FlexContainer, Section } from '../../components/Container';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { StyledLink } from '../../components/Link/styles';

interface FourOhFourProps {};

function FourOhFour({}:FourOhFourProps) {

  return (
    <StyledFourOhFour>
      <InView>
        {({ inView, ref }) => (
          <Section color={'light'}>
            {/* @ts-ignore */}
            <FlexContainer direction={'column'} alignCenter justifyCenter style={{margin: 'auto'}}>
              <H1 ref={ref} className={inView ? 'reveal is-visible' : 'reveal'}>404</H1>
              <P>I got lost in an Ikea once, so I sympathize.</P>
              <StyledLink to="/">
                <Button>Go home</Button>
              </StyledLink>
            </FlexContainer>
          </Section>
          )}
        </InView>
    </StyledFourOhFour>
  );
}

export default FourOhFour;
