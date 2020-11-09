/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Cube015: THREE.Mesh
    ['Cube.015_1']: THREE.Mesh
    ['Cube.015_2']: THREE.Mesh
    ['Cube.015_3']: THREE.Mesh
    Cube001: THREE.Mesh
    ['Cube.001_1']: THREE.Mesh
    ['Cube.001_2']: THREE.Mesh
    ['Cube.001_3']: THREE.Mesh
    ['Cube.001_4']: THREE.Mesh
    ['Cube.001_5']: THREE.Mesh
    ['Cube.001_6']: THREE.Mesh
    ['Cube.001_7']: THREE.Mesh
    Interior_Shell: THREE.Mesh
    Circle004: THREE.Mesh
    ['Circle.004_1']: THREE.Mesh
    ['Circle.004_2']: THREE.Mesh
    Circle003: THREE.Mesh
    ['Circle.003_1']: THREE.Mesh
    ['Circle.003_2']: THREE.Mesh
    Circle005: THREE.Mesh
    ['Circle.005_1']: THREE.Mesh
    ['Circle.005_2']: THREE.Mesh
    Circle006: THREE.Mesh
    ['Circle.006_1']: THREE.Mesh
    ['Circle.006_2']: THREE.Mesh
  }
  materials: {
    Body: THREE.MeshPhysicalMaterial
    Interior: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    Lights: THREE.MeshStandardMaterial
    ['Handles (Chrome)']: THREE.MeshStandardMaterial
    ['Interior (Tan)']: THREE.MeshStandardMaterial
    Windshield: THREE.MeshStandardMaterial
    Trim: THREE.MeshStandardMaterial
    Shell: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Close' | 'Open'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Miata(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF('/miata.glb') as GLTFResult;
  console.log(nodes);

  const actions = useRef<GLTFActions>()
  const [mixer] = useState(() => new THREE.AnimationMixer(null as any))
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = {
      Close: mixer.clipAction(animations[0], group.current),
      Open: mixer.clipAction(animations[1], group.current),
    }
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])
  return (
    <group ref={group} {...props}>
      <group position={[0.31, 0.18, 1.03]} rotation={[-Math.PI / 4, 0, 0]}>
        <group position={[-0.35, 0.33, -0.49]}>
          <mesh material={materials.Body} geometry={nodes.Cube015.geometry} />
          <mesh material={materials.Interior} geometry={nodes['Cube.015_1'].geometry} />
          <mesh material={materials['Material.008']} geometry={nodes['Cube.015_2'].geometry} />
          <mesh material={materials['Material.009']} geometry={nodes['Cube.015_3'].geometry} />
        </group>
      </group>
      <group position={[-0.03, 0.15, 0.06]}>
        <mesh material={materials.Body} geometry={nodes.Cube001.geometry} />
        <mesh material={materials.Interior} geometry={nodes['Cube.001_1'].geometry} />
        <mesh material={materials.Lights} geometry={nodes['Cube.001_2'].geometry} />
        <mesh material={materials['Handles (Chrome)']} geometry={nodes['Cube.001_3'].geometry} />
        <mesh material={materials['Interior (Tan)']} geometry={nodes['Cube.001_4'].geometry} />
        <mesh material={materials.Windshield} geometry={nodes['Cube.001_5'].geometry} />
        <mesh material={materials.Trim} geometry={nodes['Cube.001_6'].geometry} />
        <mesh material={materials.Shell} geometry={nodes['Cube.001_7'].geometry} />
      </group>
      <mesh
        material={materials.Shell}
        geometry={nodes.Interior_Shell.geometry}
        position={[-0.04, -0.05, 1.23]}
        rotation={[1.91, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
      />
      <group position={[0.45, -0.1, 0.82]} rotation={[-0.16, 0, -Math.PI / 2]} scale={[0.08, 0.09, 0.08]}>
        <mesh material={materials['Material.015']} geometry={nodes.Circle004.geometry} />
        <mesh material={materials['Material.014']} geometry={nodes['Circle.004_1'].geometry} />
        <mesh material={materials['Material.017']} geometry={nodes['Circle.004_2'].geometry} />
      </group>
      <group position={[0.45, -0.1, -0.74]} rotation={[-0.16, 0, -Math.PI / 2]} scale={[0.08, 0.09, 0.08]}>
        <mesh material={materials['Material.015']} geometry={nodes.Circle003.geometry} />
        <mesh material={materials['Material.014']} geometry={nodes['Circle.003_1'].geometry} />
        <mesh material={materials['Material.017']} geometry={nodes['Circle.003_2'].geometry} />
      </group>
      <group position={[-0.54, -0.1, 0.82]} rotation={[-0.16, 0, -Math.PI / 2]} scale={[0.08, 0.09, 0.08]}>
        <mesh material={materials['Material.015']} geometry={nodes.Circle005.geometry} />
        <mesh material={materials['Material.014']} geometry={nodes['Circle.005_1'].geometry} />
        <mesh material={materials['Material.017']} geometry={nodes['Circle.005_2'].geometry} />
      </group>
      <group position={[-0.54, -0.1, -0.74]} rotation={[-0.16, 0, -Math.PI / 2]} scale={[0.08, 0.09, 0.08]}>
        <mesh material={materials['Material.015']} geometry={nodes.Circle006.geometry} />
        <mesh material={materials['Material.014']} geometry={nodes['Circle.006_1'].geometry} />
        <mesh material={materials['Material.017']} geometry={nodes['Circle.006_2'].geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/miata.glb')
