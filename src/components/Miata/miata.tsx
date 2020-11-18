/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'

import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Box, Shadow, useHelper } from '@react-three/drei';
import { makeFolder, useTweaks } from 'use-tweaks';

type MiataProps = {
  isDark: boolean;
  lightsStatus: 'open' | 'close';
}

type GLTFResult = GLTF & {
  nodes: {
    Lights_1: THREE.Mesh
    Lights_2: THREE.Mesh
    Lights_3: THREE.Mesh
    Lights_4: THREE.Mesh
    Body_1: THREE.Mesh
    Body_2: THREE.Mesh
    Body_3: THREE.Mesh
    Body_4: THREE.Mesh
    Body_5: THREE.Mesh
    Body_6: THREE.Mesh
    Body_7: THREE.Mesh
    Body_8: THREE.Mesh
    Body_9: THREE.Mesh
    Interior_Shell: THREE.Mesh
    WheelLF: THREE.Mesh
    WheelLF_1: THREE.Mesh
    WheelLF_2: THREE.Mesh
    WheelLR: THREE.Mesh
    WheelLR_1: THREE.Mesh
    WheelLR_2: THREE.Mesh
    WheelRF: THREE.Mesh
    WheelRF_1: THREE.Mesh
    WheelRF_2: THREE.Mesh
    WheelRR: THREE.Mesh
    WheelRR_1: THREE.Mesh
    WheelRR_2: THREE.Mesh
  }
  materials: {
    Body: THREE.MeshPhysicalMaterial
    LightsInterior: THREE.MeshStandardMaterial
    LightColor: THREE.MeshStandardMaterial
    InteriorLight: THREE.MeshStandardMaterial
    Mirror: THREE.MeshStandardMaterial
    Lights: THREE.MeshStandardMaterial
    ['Handles (Chrome)']: THREE.MeshStandardMaterial
    ['Interior (Tan)']: THREE.MeshStandardMaterial
    Windshield: THREE.MeshStandardMaterial
    Trim: THREE.MeshStandardMaterial
    Shell: THREE.MeshStandardMaterial
    Chrome: THREE.MeshStandardMaterial
    Tire: THREE.MeshStandardMaterial
    WheelInterior: THREE.MeshStandardMaterial
  }
}

type ActionName = 'closeLights' | 'openLights'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function MiataModel(props: JSX.IntrinsicElements['group'] & MiataProps) {
  const { lightsStatus, isDark } = props;
  const [lights, setLights] = useState<boolean>(lightsStatus === 'open');
  const headlightLeft = useRef<THREE.SpotLight>()
  const headlightRight = useRef<THREE.SpotLight>()
  const headlightLeftTarget = useRef<THREE.BoxGeometry>();
  const headlightRightTarget = useRef<THREE.BoxGeometry>();
  const group = useRef<THREE.Group>()
  const grid = useRef<THREE.GridHelper>()
  const wheelLF = useRef<THREE.Mesh>(null)
  const wheelLR = useRef<THREE.Mesh>(null)
  const wheelRF = useRef<THREE.Mesh>(null)
  const wheelRR = useRef<THREE.Mesh>(null)
  const wheelSpeed = 0.175;
  const { nodes, materials, animations } = useGLTF('/miata.glb') as GLTFResult
  const initialLightRotation = isDark ? (-Math.PI  / 4) : 0;

  const actions = useRef<GLTFActions>()
  const [mixer] = useState(() => new THREE.AnimationMixer(null as any))

  // const { intensity, distance, pX, pY, pZ } = useTweaks({
  //   intensity: {
  //     value: 5,
  //     min: 0,
  //   },
  //   distance: {
  //     value: 0.4,
  //     min: 0,
  //     max: 1
  //   },
  //   ...makeFolder('Position', {
  //     pX: {
  //       value: 0.4,
  //     },
  //     pY: {
  //       value: 0.15,
  //     },
  //     pZ: {
  //       value: -1.3,
  //     }
  //   })
  // });

  useFrame((state, delta) => {
    mixer.update(delta);
    if (wheelLF.current) {
      wheelLF.current.rotation.x += wheelSpeed;
    }

    if (wheelRF.current) {
      wheelRF.current.rotation.x += wheelSpeed;
    }

    if (wheelLR.current) {
      wheelLR.current.rotation.x += wheelSpeed;
    }

    if (wheelRR.current) {
      wheelRR.current.rotation.x += wheelSpeed;
    }

    if (grid.current) {
      // grid.current.position.z = (delta);
    }
  })

  useEffect(() => {
    actions.current = {
      closeLights: mixer.clipAction(animations[0], group.current),
      openLights: mixer.clipAction(animations[1], group.current),
    }
    actions.current.closeLights.setLoop(THREE.LoopOnce, 0);
    actions.current.openLights.setLoop(THREE.LoopOnce, 0);
    actions.current.closeLights.clampWhenFinished = true;
    actions.current.openLights.clampWhenFinished = true;

    window.addEventListener('open', (e) => {
      mixer.stopAllAction();
      playAnimation('openLights');
      setLights(true);
    });

    window.addEventListener('close', (e) => {
      mixer.stopAllAction();
      playAnimation('closeLights');
      setLights(false);
    });

    if (headlightLeft.current
      && headlightRight.current
      && headlightLeftTarget.current
      && headlightRightTarget.current) {
       //  @ts-ignore
       headlightLeft.current.target = headlightLeftTarget.current;
       headlightLeft.current.updateMatrixWorld();
       //  @ts-ignore
       headlightRight.current.target = headlightLeftTarget.current;
       headlightRight.current.updateMatrixWorld();
     }

    // return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])

  const playAnimation = (anim:'closeLights' | 'openLights') => {
    if (actions.current) {
      console.log(actions.current[anim]);
      actions.current[anim].play();
    }
  }

  return (
    <group {...props}>
      <pointLight scale={[1, 1, 1]} position={[-0.37, 0.1, 1.3]} color={'orange'} intensity={lights ? 20 : isDark ? 20 : 0} distance={0.1} />
      <pointLight scale={[1, 1, 1]} position={[0.26, 0.1, 1.3]} color={'orange'} intensity={lights ? 20 : isDark ? 20 : 0} distance={0.1} />
      <pointLight scale={[1, 1, 1]} position={[-0.4, 0.15, -1.3]} color={'red'} intensity={lights ? 5 : isDark ? 5 : 0} distance={0.4} />
      <pointLight scale={[1, 1, 1]} position={[0.4, 0.15, -1.3]} color={'red'} intensity={lights ? 5 : isDark ? 5 : 0} distance={0.4} />
      <group ref={group} position={[0.3116, 0.1826, 1.0329]} rotation={[initialLightRotation, 0, 0]}>
        <group position={[-0.3549, 0.3321, -0.4897]}>
          <mesh material={materials.Body} geometry={nodes.Lights_1.geometry} castShadow receiveShadow />
          <mesh material={materials.LightsInterior} geometry={nodes.Lights_2.geometry} castShadow receiveShadow />
          <mesh material={materials.LightColor} geometry={nodes.Lights_3.geometry} castShadow receiveShadow />
          <mesh material={materials.InteriorLight} geometry={nodes.Lights_4.geometry} castShadow receiveShadow />
        </group>
        <spotLight ref={headlightLeft} position={[0, -0.1, 0.1]} intensity={lights ? 3 : 0} penumbra={0.15} castShadow />
        <spotLight ref={headlightRight} position={[-0.7, -0.1, 0.1]} intensity={lights ? 3 : 0} penumbra={0.15} castShadow />
        <pointLight position={[0, -0.15, 0.1]} intensity={lights ? 40 : 0} distance={0.11} decay={1} />
        <pointLight position={[-0.7, -0.15, 0.1]} intensity={lights ? 40 : 0} distance={0.11} decay={1} />
        <Box ref={headlightLeftTarget} scale={[0, 0, 0]} position={[0, -13, 15]} />
        <Box ref={headlightRightTarget} scale={[0, 0, 0]} position={[0, -13, 15]} />
      </group>
      <group position={[-0.0283, 0.152, 0.059]}>
        <mesh material={materials.Body} geometry={nodes.Body_1.geometry} castShadow receiveShadow />
        <mesh material={materials.Mirror} geometry={nodes.Body_2.geometry} castShadow receiveShadow />
        <mesh material={materials.LightsInterior} geometry={nodes.Body_3.geometry} castShadow receiveShadow />
        <mesh material={materials.Lights} geometry={nodes.Body_4.geometry} castShadow receiveShadow />
        <mesh material={materials['Handles (Chrome)']} geometry={nodes.Body_5.geometry} castShadow receiveShadow />
        <mesh material={materials['Interior (Tan)']} geometry={nodes.Body_6.geometry} castShadow receiveShadow />
        <mesh material={materials.Windshield} geometry={nodes.Body_7.geometry} castShadow receiveShadow />
        <mesh material={materials.Trim} geometry={nodes.Body_8.geometry} castShadow receiveShadow />
        <mesh material={materials.Shell} geometry={nodes.Body_9.geometry} castShadow receiveShadow />
      </group>
      <mesh
        material={materials.Shell}
        geometry={nodes.Interior_Shell.geometry}
        position={[-0.0446, -0.0469, 1.2338]}
        rotation={[1.9137, 0, 0]}
        scale={[0.0961, 0.0961, 0.0961]}
      />
      <group
        ref={wheelLF}
        position={[0.4548, -0.0953, 0.8169]}
        rotation={[-0.1556, 0, -Math.PI / 2]}
        scale={[0.0763, 0.0903, 0.0763]}>
        <mesh material={materials.Chrome} geometry={nodes.WheelLF.geometry} castShadow receiveShadow />
        <mesh material={materials.Tire} geometry={nodes.WheelLF_1.geometry} castShadow receiveShadow />
        <mesh material={materials.WheelInterior} geometry={nodes.WheelLF_2.geometry} castShadow receiveShadow />
      </group>
      <group
        ref={wheelLR}
        position={[0.4548, -0.0953, -0.7351]}
        rotation={[-0.1556, 0, -Math.PI / 2]}
        scale={[0.0763, 0.0903, 0.0763]}>
        <mesh material={materials.Chrome} geometry={nodes.WheelLR.geometry} castShadow receiveShadow />
        <mesh material={materials.Tire} geometry={nodes.WheelLR_1.geometry} castShadow receiveShadow />
        <mesh material={materials.WheelInterior} geometry={nodes.WheelLR_2.geometry} castShadow receiveShadow />
      </group>
      <group
        ref={wheelRF}
        position={[-0.5385, -0.0953, 0.8169]}
        rotation={[-0.1556, 0, -Math.PI / 2]}
        scale={[0.0763, 0.0903, 0.0763]}>
        <mesh material={materials.Chrome} geometry={nodes.WheelRF.geometry} castShadow receiveShadow />
        <mesh material={materials.Tire} geometry={nodes.WheelRF_1.geometry} castShadow receiveShadow />
        <mesh material={materials.WheelInterior} geometry={nodes.WheelRF_2.geometry} castShadow receiveShadow />
      </group>
      <group
        ref={wheelRR}
        position={[-0.5385, -0.0953, -0.7351]}
        rotation={[-0.1556, 0, -Math.PI / 2]}
        scale={[0.0763, 0.0903, 0.0763]}>
        <mesh material={materials.Chrome} geometry={nodes.WheelRR.geometry} castShadow receiveShadow />
        <mesh material={materials.Tire} geometry={nodes.WheelRR_1.geometry} castShadow receiveShadow />
        <mesh material={materials.WheelInterior} geometry={nodes.WheelRR_2.geometry} castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('/miata.glb')
