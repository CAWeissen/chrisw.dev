import React, { Suspense } from 'react';
import type * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Loader, PerspectiveCamera, Plane, Shadow } from '@react-three/drei';

import { bgDark, bgLight } from '../../utils/theme';
import MiataModel from './miata';
import type { DarkMode } from 'use-dark-mode';
import type { GridHelper, SpotLight } from 'three';

interface MiataProps {
  darkMode: DarkMode;
  anim: 'open'|'close';
}

function Miata({darkMode, anim}: MiataProps) {
  const grid = React.useRef<GridHelper>();
  const spotLight1 = React.useRef<SpotLight>();
  const spotLight2 = React.useRef<SpotLight>();
  const spotLight3 = React.useRef<SpotLight>();
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

    useFrame((state, delta) => {
      const time = performance.now() / 200;

      if (grid.current) {
        grid.current.position.z = -time % 5;
      }
    })

    return <group {...groupProps}>{children}</group>
  }

  return (
    <>
      <Canvas>
          <PerspectiveCamera makeDefault fov={45} position={[0, 0.5, 4]} rotation={[0, 0, 0]} />
          <fog attach="fog" args={[bgColor, 5, 15]} />

          <MiataGroup position={[1, 0, 1]} rotation={[0, -Math.PI / 4, 0]}>
            <ambientLight intensity={0.1} castShadow />
            <directionalLight intensity={1} color={darkMode.value ? '#DCF6F6' : 'white'} />
            <spotLight ref={spotLight1} intensity={darkMode.value ? 0 : 1} position={[-3, 6, -10]} penumbra={1} castShadow />
            <spotLight ref={spotLight2} intensity={darkMode.value ? 0 : 1} position={[-10, 10, 10]} penumbra={1} castShadow />
            <spotLight ref={spotLight3} intensity={darkMode.value ? 0.1 : 0.5} color={darkMode.value ? '#DCF6F6' : 'white'} position={[10, 5, 0]} penumbra={1} castShadow />

            <gridHelper ref={grid} args={[100, 40]} position={[0, 0.01, 0]} />

            <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <meshPhysicalMaterial attach="material" color={bgColor} />
            </Plane>
            <Suspense fallback={null}>
              <MiataModel isDark={darkMode.value} lightsStatus={anim} position={[0, 0.3, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
            </Suspense>
          </MiataGroup>
      </Canvas>
    </>
  );
}

export default Miata;
