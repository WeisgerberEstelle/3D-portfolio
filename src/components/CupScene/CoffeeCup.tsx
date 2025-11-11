import { useGLTF } from '@react-three/drei';
import type { JSX } from 'react';
import type { CoffeeCupGLTF } from '../../types/gltf';

export function CoffeeCup(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/models/coffee-cup.glb') as unknown as CoffeeCupGLTF;
    return (
        <group {...props} dispose={null} scale={20} position={[0, -1, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['M_Coffee_Plate.002']} />
            <mesh
                geometry={nodes.Object_6.geometry}
                material={materials['M_Coffee_Cup.002']}
                position={[0, 0.004, 0]}
            />
            <mesh
                geometry={nodes.Object_8.geometry}
                material={materials['M_Coffee_Spoon.002']}
                position={[-0.022, 0.089, -0.027]}
                rotation={[-0.058, -0.921, -1.062]}
            />
        </group>
    );
}

useGLTF.preload('/models/coffee-cup.glb');
