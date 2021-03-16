import React, { Suspense } from 'react';
import { InView } from 'react-intersection-observer';

import { HomeIntro, HomeIntroText, HomeLogoGrid, HomeProjectGrid, HomeProjectGridItem, HomeProjectGridItemMedia, HomeProjectGridItemInfo, StyledHome, SkillsList, Skill, JobGroup, HomeLogoGridItem} from './styles';
import { projectData } from '../../utils/constants';
import { H1, H3, H4, H5, H6, P } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Image from '../../components/Image';
import Button from '../../components/Button';
import { StyledLink } from '../../components/Link/styles';
import Pepsi from '../../assets/logos/pepsi.svg'
import BurgerKing from '../../assets/logos/burger-king.svg'
import PizzaHut from '../../assets/logos/pizza-hut.svg'
import Seagate from '../../assets/logos/seagate.svg'
import Autobell from '../../assets/logos/autobell.svg'
import Charlotte from '../../assets/logos/charlotte.svg'

interface HomeProps {};

function Home({}:HomeProps) {
  const logoGridItems = [
    Pepsi,
    Seagate,
    BurgerKing,
    PizzaHut,
    Charlotte,
    Autobell,
    // NascarHall,
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Design Systems',
    'React',
    'Vue',
    'Angular',
    'React Native',
    'three.js',
    'PHP',
    'Node.js',
    'GraphQL',
    'Augmented Reality',
    'Virtual Reality',
    'Game Development',
    '3D Modeling',
    'Puns',
    'Photoshop',
    'Illustrator',
    'Impressions',
    'Photography',
    'Videography',
    'Photo/Video Editing',
    'Spanish',
    'Finding just the right GIF for the situation'
  ];

  return (
    <StyledHome data-scroll-section>
      <Section>
        <Container>
          <InView>
            {({ inView, ref }) => (
              <HomeIntro ref={ref} className={inView ? 'reveal is-visible' : 'reveal'}>
                <Image src="/assets/img/chris.png" alt="Chris Weissenberger"/>
                <HomeIntroText>
                  <H1>Hey, I'm Chris!</H1>
                  <P light>I'm a full stack engineer (with a love for front end) working on high-quality, interactive, award-winning web experiences and products.</P>
                  <StyledLink to='/about'>
                    <Button round>Who is this guy?</Button>
                  </StyledLink>
                </HomeIntroText>
              </HomeIntro>
            )}
          </InView>
        </Container>
      </Section>
      <Section color="lightGray">
        <Container thin>
        <InView>
            {({ inView, ref }) => (
              <H3 ref={ref} className={inView ? 'reveal is-visible' : 'reveal'} style={{textAlign: 'center', marginBottom: '7.5vmin'}}>Brands I've Worked On</H3>
            )}
          </InView>
          <HomeLogoGrid>
            {logoGridItems.map((Logo, index) => (
              <InView>
                {({ inView, ref }) => (
                  <HomeLogoGridItem className={inView ? 'is-visible' : 'will-reveal'} ref={ref} index={index}>
                    <Logo />
                  </HomeLogoGridItem>
                )}
              </InView>
            ))}
          </HomeLogoGrid>
        </Container>
      </Section>
      <Section color="aqua">
        <Container thin>
          <InView>
            {({ inView, ref }) => (
              <H4 ref={ref} className={inView ? 'reveal is-visible' : 'reveal'} style={{textAlign: 'center', marginBottom: '7.5vmin'}}>Some of What I've Built</H4>
            )}
          </InView>
          <HomeProjectGrid>
            {projectData.map(({name, date, url, image, video}, index) => (
              <InView key={index}>
                {({ inView, ref }) => (
                  <Suspense fallback={<div>Loading...</div>}>
                    <HomeProjectGridItem ref={ref} index={index} className={inView ? 'is-visible' : 'will-reveal'} href={url} target="_blank" rel="noopener noreferrer">
                      <HomeProjectGridItemInfo>
                        <H6>{name}</H6>
                      </HomeProjectGridItemInfo>
                      <HomeProjectGridItemMedia>
                        <img src={image} alt={name}></img>
                        <video src={video} poster={image} preload="none" autoPlay muted loop></video>
                      </HomeProjectGridItemMedia>
                    </HomeProjectGridItem>
                  </Suspense>
                )}
              </InView>
            ))}
          </HomeProjectGrid>
        </Container>
      </Section>
      <Section>
        <Container>
          <H5>Skills</H5>
          <SkillsList>
            {skills.map((skill:string, index:number) => (
              <InView key={index}>
                {({ inView, ref }) => (
                  <Skill key={index} ref={ref} delay={index} className={inView ? 'is-visible' : 'will-reveal'}>{skill}</Skill>
                )}
              </InView>
            ))}
          </SkillsList>
        </Container>
      </Section>
      {/* <Section doubled>
        <Container>
          <H5>Experience</H5>
          <JobGroup>
            <P>2017 – Present</P><P light>Union<br/><small>Charlotte, NC</small></P>
            <P>2015 – 2017</P><P light>South America Mission<br/><small>Santa Cruz de la Sierra, Bolivia</small></P>
            <P>2012 – 2015</P><P light>Modus Create<br/><small>Reston, VA</small></P>
          </JobGroup>
        </Container>
      </Section> */}
    </StyledHome>
  );
}

export default Home;
