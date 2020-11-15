import * as React from 'react';
import { HomeIntro, HomeIntroText, HomeProjectGrid, HomeProjectGridItem, HomeProjectGridItemMedia, HomeProjectGridItemInfo, StyledHome } from './styles';
import Header from '../../components/Header/index';
import { H1, H2, H3, P } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Image from '../../components/Image';
import Button from '../../components/Button';
import { StyledLink } from '../../components/Link/styles';

interface HomeProps {};

function Home({}:HomeProps) {
  return (
    <>
      <Header />
      <StyledHome>
        <Section>
          <Container>
            <HomeIntro>
              <Image src="/assets/img/chris.png" alt="Chris Weissenberger"/>
              <HomeIntroText>
                <H1>Hey, I'm Chris!</H1>
                <P>I'm a full stack engineer (with a love for front end) working on high-quality, interactive, award-winning web experiences and products.</P>
                <StyledLink to='/about'>
                  <Button>Let's be friends!</Button>
                </StyledLink>
              </HomeIntroText>
            </HomeIntro>
          </Container>
        </Section>
        <Section color="blue">
          <Container thin>
            <H2 style={{textAlign: 'center', marginBottom: '2em'}}>What I've Worked On:</H2>
            <HomeProjectGrid>
              <HomeProjectGridItem href="https://www.pepsicares.com" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <img src="/assets/img/pepsi-cares.jpg" alt="Pepsi Cares"></img>
                  <video src="/assets/video/pepsicares.webm" poster="/assets/img/pepsi-cares.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Pepsi Cares</H3>
                  <P>February 2019</P>
                  <P>
                    <strong>Silver Addy</strong> - Interface & Navigation<br/>
                    <small>2019 Charlotte American Advertising Awards</small>
                  </P>
                  <P>
                    <strong>Silver Addy</strong> - Consumer Website<br/>
                    <small>2019 Charlotte American Advertising Awards</small>
                  </P>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem>

              <HomeProjectGridItem href="https://www.union.co" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <img src="/assets/img/union.jpg" alt="Union"></img>
                  <video src="/assets/video/union.webm" poster="/assets/img/union.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Union</H3>
                  <P>February 2019</P>
                  <P>
                    <strong>Silver Addy</strong> - Advertising Industry Self-Promotion Online/Interactive<br/>
                    <small>2019 Charlotte American Advertising Awards</small>
                  </P>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem>

              <HomeProjectGridItem href="https://www.seagate.com" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <img src="/assets/img/seagate.jpg" alt="Seagate"></img>
                  <video src="/assets/video/seagate.webm" poster="/assets/img/seagate.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Seagate</H3>
                  <P>September 2020</P>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem>

              <HomeProjectGridItem href="https://www.charlotteregion.com" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <img src="/assets/img/crba.jpg" alt="CRBA≠Charlotte Regional Business Alliance"></img>
                  <video src="/assets/video/crba.webm" poster="/assets/img/crba.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Charlotte Regional Business Alliance</H3>
                  <P>November 2019</P>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem>

              {/* <HomeProjectGridItem href="https://www.nascarhall.com" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <video src="/assets/video/nascar-hall.webm" poster="/assets/img/nascar-hall.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Nascar Hall of Fame</H3>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem> */}
              {/* <HomeProjectGridItem href="https://www.charlottesgotalot.com" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <video src="/assets/video/crva-trails.webm" poster="/assets/img/charlottesgotalot.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Charlotte's Got A Lot</H3>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem> */}
              {/* <HomeProjectGridItem href="https://www.channelpa.com" target="_blank" rel="noopener noreferrer">
                <HomeProjectGridItemMedia>
                  <video src="/assets/video/channelpa.webm" poster="/assets/img/channelpa.jpg" autoPlay muted loop></video>
                </HomeProjectGridItemMedia>
                <HomeProjectGridItemInfo>
                  <H3>Channel Prime Alliance</H3>
                </HomeProjectGridItemInfo>
              </HomeProjectGridItem> */}
            </HomeProjectGrid>
          </Container>
        </Section>
      </StyledHome>
    </>
  );
}

export default Home;
