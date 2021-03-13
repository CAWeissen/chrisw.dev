import React, { Suspense } from 'react';
import type * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera, Plane, Shadow } from '@react-three/drei';
import Gallery from 'react-photo-gallery';

import { StyledAbout, StyledAboutBio, StyledAboutBioCopy, StyledAboutIntro } from './styles';
import { gallery } from '../../utils/constants';
import { bgDark, bgLight } from '../../utils/theme';
import { H1, H2, H3, H4, H5, H6, P } from '../../utils/typography';
import { Container, FlexContainer, Section } from '../../components/Container';
import Miata from '../../components/Miata/miata';
import Anchor from '../../components/Anchor';
import Button from '../../components/Button';
import Image from '../../components/Image';
//  @ts-ignore
import ToggleLights from '../../assets/toggle-lights.svg';

interface AboutProps {
  darkMode: any;
}

const openEvent = new CustomEvent('open');
const closeEvent = new CustomEvent('close');
let anim:'open' | 'close';

const toggleLights = () => {
  window.dispatchEvent(anim === 'open' ? openEvent : closeEvent);
  anim = anim === 'open' ? 'close' : 'open';
  // setCurrentAnim(anim);
}

function About({darkMode}: AboutProps) {
  const grid = React.useRef<THREE.GridHelper>();
  const spotLight1 = React.useRef<THREE.SpotLight>();
  const spotLight2 = React.useRef<THREE.SpotLight>();
  const spotLight3 = React.useRef<THREE.SpotLight>();
  let bgColor:string = darkMode.value ? bgDark.toHexString() : bgLight.toHexString();
  let mounted:boolean = false;

  React.useEffect(() => {
    if (!mounted) {
      mounted = true;
      anim = darkMode.value ? 'close' : 'open';
    }
  }, [mounted])

  function MiataGroup(props:any) {
    const {children, ...groupProps} = props;
    useFrame(() => {
      const time = performance.now() / 200;

      if (grid.current) {
        grid.current.position.z = -time % 5;
      }
    })

    return <group {...groupProps}>{children}</group>
  }

  return (
    <StyledAbout data-scroll-section>
      <Section>
        <FlexContainer alignCenter justifyBetween>
          <StyledAboutIntro>
            <H4>If you've ever seen the tall redhead in the tiny car driving around Charlotte...</H4>
            <H1>That's me.</H1>
          </StyledAboutIntro>
          <Button style={{margin: '0 auto 10vmin'}} round size={2} onClick={toggleLights}><ToggleLights /></Button>
        </FlexContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas style={{minHeight: 'calc(100vh - 100px)', position: 'absolute', left: 0, top: 0, width: '100vw', zIndex: 0}}>
            <PerspectiveCamera makeDefault fov={45} position={[0, 0, 4]} rotation={[0, 0, 0]} />
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} position={[0, 0.5, 4]} />
            <fog attach="fog" args={[bgColor, 5, 15]} />

            <MiataGroup position={[1, -0.5, 1]} rotation={[0, -Math.PI / 4, 0]}>
              <ambientLight intensity={0.1} castShadow />
              <directionalLight position={[0, -10, 0]} intensity={darkMode.value ? 0.5 : 1} color={darkMode.value ? '#FFFFFF' : 'white'} />
              <directionalLight position={[5, 5, -10]} intensity={darkMode.value ? 1 : 1} color={darkMode.value ? '#b9e8ff' : 'white'} />
              <spotLight ref={spotLight1} intensity={darkMode.value ? 0 : 1} position={[-3, 6, -10]} penumbra={1} castShadow />
              <spotLight ref={spotLight2} intensity={darkMode.value ? 0 : 1} position={[-10, 10, 10]} penumbra={1} castShadow />
              <spotLight ref={spotLight3} intensity={darkMode.value ? 0.1 : 0.5} color={darkMode.value ? '#DCF6F6' : 'white'} position={[10, 5, 0]} penumbra={1} castShadow />

              <gridHelper ref={grid} args={[100, 40, '#002B4B', '#002B4B']} position={[0, 0.01, 0]} />

              <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <meshPhysicalMaterial attach="material" color={bgColor} />
              </Plane>

              <React.Suspense fallback={null}>
                <Miata isDark={darkMode.value} lightsStatus={anim} position={[0, 0.3, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
                <Shadow color="black" scale={[2, 3.5, 1]} opacity={1} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} />
              </React.Suspense>
            </MiataGroup>
          </Canvas>
        </Suspense>
      </Section>
      <Section autoHeight color="green">
        <Container>
          <H3>From games to websites</H3>
          <StyledAboutBio>
            <Image src="/assets/img/geysers.jpg" alt="Chris Weissenberger"/>
            <StyledAboutBioCopy>
              <P>Went to university to become a game developer, and I came out a web developer.</P>
              <P light>My curiosity and creativity have always shaped me, and pour into the rest of my life through photography, volunteerism, and travel.</P>
            </StyledAboutBioCopy>
          </StyledAboutBio>
        </Container>
      </Section>
      {/* @ts-ignore */}
      <Section className='About-gallery' color='light'>
        <Container>
          <H3>I take photos sometimes 📸</H3>
          <Gallery photos={gallery} />
        </Container>
        <FlexContainer justifyCenter>
          <Anchor href="https://www.instagram.com/caweissen" target="_blank" rel="noopener noreferrer">
            <H6>Come say hey on Instagram! &#10140;</H6>
          </Anchor>
        </FlexContainer>
      </Section>
    </StyledAbout>
  );
}

export default About;
