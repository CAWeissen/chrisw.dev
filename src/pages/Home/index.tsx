import * as React from 'react';
import { InView } from 'react-intersection-observer';

import { HomeIntro, HomeIntroText, HomeProjectGrid, HomeProjectGridItem, HomeProjectGridItemMedia, HomeProjectGridItemInfo, StyledHome } from './styles';
import { projectData } from '../../utils/constants';
import { H1, H2, H3, P } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Image from '../../components/Image';
import Button from '../../components/Button';
import { StyledLink } from '../../components/Link/styles';

interface HomeProps {};

function Home({}:HomeProps) {

  return (
    <StyledHome>
      <Section>
        <Container>
          <HomeIntro>
            <Image src="/assets/img/chris.png" alt="Chris Weissenberger"/>
            <HomeIntroText>
              <H1>Hey, I'm Chris!</H1>
              <P>I'm a full stack engineer (with a love for front end) working on high-quality, interactive, award-winning web experiences and products.</P>
              <StyledLink to='/about'>
                <Button>Who is this guy?</Button>
              </StyledLink>
            </HomeIntroText>
          </HomeIntro>
        </Container>
      </Section>
      <Section color="aqua">
        <Container thin>
          <H2 style={{textAlign: 'center', marginBottom: '2em'}}>What I've Worked On:</H2>
          <HomeProjectGrid>
            {projectData.map(({name, date, url, image, video}, index) => (
              <InView>
                {({ inView, ref, entry }) => (
                  <HomeProjectGridItem ref={ref} index={index} className={inView ? 'is-visible' : ''} href={url} target="_blank" rel="noopener noreferrer">
                    <HomeProjectGridItemMedia>
                      <img src={image} alt={name}></img>
                      <video src={video} poster={image} autoPlay muted loop></video>
                    </HomeProjectGridItemMedia>
                  </HomeProjectGridItem>
                )}
              </InView>
            ))}
          </HomeProjectGrid>
        </Container>
      </Section>
    </StyledHome>
  );
}

export default Home;
