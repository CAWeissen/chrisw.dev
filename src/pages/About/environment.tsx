import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Float, OrbitControls, PerspectiveCamera, Plane, Shadow, useProgress } from '@react-three/drei';
import { LayerMaterial, Base, Depth } from 'lamina'
import { BackSide } from 'three';
import { bgDark, bgLight } from '../../utils/theme';

export default function EnvMap(props) {
    const { darkMode } = props;
    let bgColor:string = darkMode.value ? bgDark.toHexString() : bgLight.toHexString();
    return (
        <>
            <fog attach="fog" args={[bgColor, 5, 15]} />
            <Environment frames={1} background={false} resolution={1024}>
                {/* This environment is "live" (frames={Infinity}), it renders its contents into a HDRI environment. */}
                {/* Ceiling */}
                <Lightformer intensity={darkMode.value ? 0 : 1} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                <MovingLights />
                {/* Sides */}
                <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
                {/* Accent */}
                {darkMode.value ? (
                    <Float speed={5} floatIntensity={2} rotationIntensity={2}>
                        <Lightformer form="ring" color="orange" intensity={1} scale={20} position={[-15, 4, -18]} target={[0, 0, 0]} />
                    </Float>
                ) : null}
                {/* Background */}
                <mesh scale={100}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <LayerMaterial side={BackSide}>
                        <Base color="#444" alpha={1} mode="normal" />
                        <Depth colorA="#333" colorB={darkMode.value ? '#000' : '#fff'} alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
                    </LayerMaterial>
                </mesh>
            </Environment>
        </>
    )
}

function MovingLights() {
    const group = useRef()
    const positions = useRef([2, 0, 2, 0, 2, 0, 2, 0])
    useFrame((state, delta) => {
      if ((group.current.position.z += delta * 15) > 60) group.current.position.z = -60
    })
    return (
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.current.map((x, i) => (
            <Lightformer form="circle" intensity={5} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
    )
  }