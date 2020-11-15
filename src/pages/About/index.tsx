import * as React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera, Plane, useHelper } from '@react-three/drei';
import { useTweaks, makeButton, makeFolder } from 'use-tweaks';

import { StyledAbout } from './styles';
import Header from '../../components/Header/index';
import { bgDark, bgLight, blue, darkBlue, darkGray } from '../../utils/theme';
import { H1, H3 } from '../../utils/typography';
import { Container, Section } from '../../components/Container';
import Miata from '../../components/Miata';
import { PointLightHelper, SpotLightHelper } from 'three';
import Button from '../../components/Button';

interface AboutProps {}

const openEvent = new CustomEvent('open');
const closeEvent = new CustomEvent('close');
let anim = 'close';

function About({}: AboutProps) {
  const threeSection = React.useRef<HTMLElement>();
  const grid = React.useRef<THREE.GridHelper>();
  const headlightTarget:THREE.Object3D = new THREE.Object3D;
  const spotLight1 = React.useRef<THREE.SpotLight>();
  const spotLight2 = React.useRef<THREE.SpotLight>();
  const spotLight3 = React.useRef<THREE.SpotLight>();
  const headlightLeft = React.useRef<THREE.PointLight>();
  const spotlightPosition:THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  let bgColor:string = darkBlue.toHexString();
  let mounted:boolean = false;

  const { intensity, pX, pY, pZ } = useTweaks({
    intensity: {
      value: 1,
      min: 0,
      max: 1
    },
    ...makeFolder('Position', {
      pX: {
        value: spotlightPosition.x,
        step: 0.5
      },
      pY: {
        value: spotlightPosition.y,
        step: 0.5
      },
      pZ: {
        value: spotlightPosition.z,
        step: 0.5
      }
    })
  });

  const toggleLights = () => {
    window.dispatchEvent(anim === 'open' ? openEvent : closeEvent);
    anim = anim === 'open' ? 'close' : 'open';
  }

  React.useEffect(() => {
    if (!mounted) {
      mounted = true;

    }

    if (threeSection.current) {
      bgColor = getComputedStyle(threeSection.current).getPropertyValue('--bgColor');
    }
  }, [mounted, threeSection])

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
      <Header />
      <Section ref={threeSection}>
        <Container>
          <H3 style={{maxWidth: '50%'}}>If you've ever seen the tall redhead in the tiny car driving around Charlotte...</H3>
          <H1>That's me.</H1>
          <Button color={'aqua'} onClick={toggleLights}>Toggle Lights</Button>
        </Container>
        <Canvas style={{height: '100vh', position: 'absolute', left: 0, top: 0, width: '100vw', zIndex: 0}}>
          <PerspectiveCamera makeDefault fov={45} position={[0, 0, 8]} />
          <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 3} />
          <fog attach="fog" args={[bgColor , 5, 15]} />

          <MiataScene position={[1.5, 0, 1.5]} rotation={[0, -Math.PI / 4, 0]}>
            <ambientLight intensity={0.1} />
            <spotLight ref={spotLight1} intensity={1} position={[-3, 6, -10]} penumbra={1} castShadow />
            <spotLight ref={spotLight2} position={[-10, 10, 10]} penumbra={1} castShadow />
            <spotLight ref={spotLight3} intensity={0.5} position={[10, 5, 0]} penumbra={1} castShadow />
            <pointLight ref={headlightLeft} intensity={intensity} position={[pX, pY, pZ]} />

            <gridHelper ref={grid} args={[100, 40]} position={[0, 0.01, 0]} />

            {/* <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <meshPhysicalMaterial attach="material" color={bgColor} />
            </Plane> */}

            <React.Suspense fallback={null}>
              <Miata position={[0, 0.6, 0]} scale={[2, 2, 2]} rotation={[0, 0, 0]} />
            </React.Suspense>
          </MiataScene>
        </Canvas>
      </Section>
    </StyledAbout>
  );
}

export default About;
