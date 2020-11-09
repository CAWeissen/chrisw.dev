import * as React from 'react';
import { HomeIntro, HomeIntroText, HomeProjectGrid, HomeProjectGridItem, StyledHome } from './styles';
import Header from '../../components/Header/index';
import { H1, H3, H5, P } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Image from '../../components/Image';

interface HomeProps {};

function Home({}:HomeProps) {
  return (
    <>
      <Header />
      <StyledHome>
        <Section>
          <Container>
            <HomeIntro>
              <Image src="/assets/chris.png" alt="Chris Weissenberger"/>
              <HomeIntroText>
                <H1>Hey, I'm Chris!</H1>
                <P>I'm a full stack engineer (with a love for front end) working on high-quality, interactive, award-winning web experiences and products.</P>
              </HomeIntroText>
            </HomeIntro>
          </Container>
        </Section>
        <Section color="blue">
          <Container>
            <H3>What I've Done:</H3>
            <HomeProjectGrid>
              <HomeProjectGridItem href="https://www.union.co" target="_blank" rel="noopener noreferrer">
                <img src="/assets/union.jpg" alt="Union"/>
                <H5>Union</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.pepsicares.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/pepsi-cares.jpg" alt="Pepsi Cares"/>
                <H5>Pepsi Cares</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.seagate.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/seagate.jpg" alt="Seagate"/>
                <H5>Seagate</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.charlotteregion.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/crba.jpg" alt="Charlotte Region"/>
                <H5>Charlotte Region</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.nascarhall.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/nascar-hall.jpg" alt="Nascar Hall of Fame"/>
                <H5>Nascar Hall of Fame</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.charlottesgotalot.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/charlottesgotalot.jpg" alt="Charlotte's Got A Lot"/>
                <H5>Charlotte's Got A Lot</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.channelpa.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/channelpa.jpg" alt="Channel Prime Alliance"/>
                <H5>Channel Prime Alliance</H5>
              </HomeProjectGridItem>
              <HomeProjectGridItem href="https://www.satoamerica.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/sato.jpg" alt="SATO America"/>
                <H5>SATO America</H5>
              </HomeProjectGridItem>
            </HomeProjectGrid>
          </Container>
        </Section>
      </StyledHome>
    </>
  );
}

export default Home;
