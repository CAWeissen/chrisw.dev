import * as React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera, Plane, Shadow } from '@react-three/drei';
import Gallery from 'react-photo-gallery';

import { StyledAbout } from './styles';
import { photos } from '../../utils/constants';
import { bgDark, bgLight } from '../../utils/theme';
import { H1, H2, H4 } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Miata from '../../components/Miata';
import Button from '../../components/Button';

interface AboutProps {
  darkMode: any;
}

const openEvent = new CustomEvent('open');
const closeEvent = new CustomEvent('close');
let anim:'open' | 'close' = 'open';

const toggleLights = () => {
  window.dispatchEvent(anim === 'open' ? openEvent : closeEvent);
  anim = anim === 'open' ? 'close' : 'open';
  // setCurrentAnim(anim);
}

function About({darkMode}: AboutProps) {
  const grid = React.useRef<THREE.GridHelper>();
  const headlightTarget:THREE.Object3D = new THREE.Object3D;
  const spotLight1 = React.useRef<THREE.SpotLight>();
  const spotLight2 = React.useRef<THREE.SpotLight>();
  const spotLight3 = React.useRef<THREE.SpotLight>();
  const headlightLeft = React.useRef<THREE.PointLight>();
  let bgColor:string = darkMode.value ? bgDark.toHexString() : bgLight.toHexString();
  let mounted:boolean = false;

  React.useEffect(() => {
    if (!mounted) {
      mounted = true;
      anim = darkMode.value ? 'close' : 'open';
    }
  }, [mounted])

  function MiataScene(props:any) {
    const {children, ...groupProps} = props;
    useFrame((state, delta) => {
      const time = performance.now() / 200;

      if (grid.current) {
        grid.current.position.z = -time % 5;
      }
    })

    return <group {...groupProps}>{children}</group>
  }

  return (
    <StyledAbout>
      <Section style={{minHeight: 'calc(100vh - 100px)', paddingTop: 100}}>
        <Container>
          <H4 class="miata-text" style={{maxWidth: '50%'}}>If you've ever seen the tall redhead in the tiny car driving around Charlotte...</H4>
          <H1>That's me.</H1>
          <Button color={'aqua'} onClick={toggleLights}>Toggle Lights</Button>
        </Container>
        <Canvas style={{minHeight: 'calc(100vh - 100px)', position: 'absolute', left: 0, top: 0, width: '100vw', zIndex: 0}}>
          <PerspectiveCamera makeDefault fov={45} position={[0, 0.5, 4]} rotation={[0, 0, 0]} />
          {/* <OrbitControls enablePan={true} enableRotate={true} enableZoom={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 3} /> */}
          <fog attach="fog" args={[bgColor, 5, 15]} />

          <MiataScene position={[1, 0, 1]} rotation={[0, -Math.PI / 4, 0]}>
            <ambientLight intensity={0.1} castShadow />
            <directionalLight intensity={darkMode.value ? 1 : 1} color={darkMode.value ? '#DCF6F6' : 'white'} />
            <spotLight ref={spotLight1} intensity={darkMode.value ? 0 : 1} position={[-3, 6, -10]} penumbra={1} castShadow />
            <spotLight ref={spotLight2} intensity={darkMode.value ? 0 : 1} position={[-10, 10, 10]} penumbra={1} castShadow />
            <spotLight ref={spotLight3} intensity={darkMode.value ? 0.1 : 0.5} color={darkMode.value ? '#DCF6F6' : 'white'} position={[10, 5, 0]} penumbra={1} castShadow />

            <gridHelper ref={grid} args={[100, 40]} position={[0, 0.01, 0]} />

            <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <meshPhysicalMaterial attach="material" color={bgColor} />
            </Plane>

            <React.Suspense fallback={null}>
              <Miata darkMode={darkMode.value} lightsStatus={anim} position={[0, 0.3, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
              <Shadow color="black" scale={[2, 3.5, 1]} opacity={1} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            </React.Suspense>
          </MiataScene>
        </Canvas>
      </Section>
      <Section color='black'>
        <Container>
          <H2>I take photos too</H2>
          <Gallery photos={photos} />
        </Container>
      </Section>
    </StyledAbout>
  );
}

export default About;
