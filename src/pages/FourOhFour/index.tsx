import * as React from 'react';
import { InView } from 'react-intersection-observer';

import { StyledFourOhFour } from './styles';
import { H1, H2, H3, H6, P } from '../../utils/typography';
import { FlexContainer, Section } from '../../components/Container';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

interface FourOhFourProps {};

function FourOhFour({}:FourOhFourProps) {

  return (
    <StyledFourOhFour>
      <InView>
        {({ inView, ref }) => (
          <Section color={'light'}>
            {/* @ts-ignore */}
            <FlexContainer direction={'column'} alignCenter justifyCenter style={{margin: 'auto'}}>
              <H1 ref={ref} className={inView ? 'reveal is-visible' : 'reveal'}>Not Found</H1>
              <P>I got lost in an Ikea once, so I sympathize.</P>
              <Link to="/">
                <Button>Go home</Button>
              </Link>
            </FlexContainer>
          </Section>
          )}
        </InView>
    </StyledFourOhFour>
  );
}

export default FourOhFour;
