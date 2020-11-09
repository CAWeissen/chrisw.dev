import * as React from 'react';
import { StyledAbout } from './styles';
import Header from '../../components/Header/index';
import { H1 } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Miata from '../../components/Miata/Miata';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface AboutProps {};

function About({}: React.Props<AboutProps>) {
  return (
    <StyledAbout>
      <Header />
      <Section>
        <Container>
          <H1>About</H1>
        </Container>
      </Section>
      <Section>
        <React.Suspense fallback={null}>
          <Canvas style={{height: '100vh', width: '100vw'}}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, 10]} />
            <Miata scale={[1, 1, 1]}/>
            <OrbitControls />
          </Canvas>
        </React.Suspense>
      </Section>
    </StyledAbout>
  );
}

export default About;
