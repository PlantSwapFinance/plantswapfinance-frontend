/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import Cake from './CAKE'

type GLTFResult = GLTF & {
  nodes: {
    BasicBarnCube: THREE.Mesh
    Roof: THREE.Mesh
    WindoewsLeftFront: THREE.Mesh
    WindoewsLeftBack: THREE.Mesh
    WindowsRightBack: THREE.Mesh
    WindowsRightFront: THREE.Mesh
    DoorFrameLeft: THREE.Mesh
    DoorWindows: THREE.Mesh
    DoorFrameRight: THREE.Mesh
    DoorFrameBackLeft: THREE.Mesh
    DoorFrameBackRight: THREE.Mesh
  }
  materials: {
    PlantswapColorPalette: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/PancakeswapBarn.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.BasicBarnCube.geometry} material={nodes.BasicBarnCube.material} />
      <mesh
        geometry={nodes.Roof.geometry}
        material={nodes.Roof.material}
        position={[0, 1.06, 1.03]}
        rotation={[1.134612, 0, 0]}
        scale={[1.1, -0.01967, 0.57]}
      />
      <mesh
        geometry={nodes.WindoewsLeftFront.geometry}
        material={nodes.WindoewsLeftFront.material}
        position={[-0.47, -0.07, 1.02]}
        scale={[0.31, 0.44, -0.02]}
      />
      <mesh
        geometry={nodes.WindoewsLeftBack.geometry}
        material={nodes.WindoewsLeftBack.material}
        position={[0.507, -0.071, 1.029]}
        scale={[0.312, 0.441, -0.028]}
      />
      <mesh
        geometry={nodes.WindowsRightBack.geometry}
        material={nodes.WindowsRightBack.material}
        position={[0.5, -0.07, -1.02]}
        scale={[0.31, 0.4, 0.02]}
      />
      <mesh
        geometry={nodes.WindowsRightFront.geometry}
        material={nodes.WindowsRightFront.material}
        position={[-0.47, -0.07, -1.02]}
        scale={[0.31, 0.44, 0.02]}
      />
      <mesh
        geometry={nodes.DoorFrameLeft.geometry}
        material={nodes.DoorFrameLeft.material}
        position={[-1.02, -0.2, -0.4]}
        scale={[0.03, 0.79, -0.4]}
      />
      <mesh
        geometry={nodes.DoorWindows.geometry}
        material={nodes.DoorWindows.material}
        position={[-1.03, 0.27, -0.26]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.15, 0.22, -0.02]}
      />
      <mesh
        geometry={nodes.DoorFrameRight.geometry}
        material={nodes.DoorFrameRight.material}
        position={[-1.02, -0.2, 0.4]}
        scale={[0.03, 0.79, 0.4]}
      />
      <mesh
        geometry={nodes.DoorFrameBackLeft.geometry}
        material={nodes.DoorFrameBackLeft.material}
        position={[1.02, -0.2, -0.39]}
        scale={[-0.032761, 0.798012, -0.40453]}
      />
      <mesh
        geometry={nodes.DoorFrameBackRight.geometry}
        material={nodes.DoorFrameBackRight.material}
        position={[1.02, -0.2, 0.41]}
        scale={[-0.03, 0.79, 0.4]}
      />
      <Cake position={[-1, 0.93, 0]} rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]} scale={0.6} />
      <Cake position={[1, 0.93, 0]} rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]} scale={0.6} />
    </group>
  )
}

useGLTF.preload('/PancakeswapImgsimple.glb')
