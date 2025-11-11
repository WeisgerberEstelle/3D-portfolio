import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/Addons.js';

export type CoffeeCupGLTF = GLTF & {
    nodes: {
        Object_4: THREE.Mesh;
        Object_6: THREE.Mesh;
        Object_8: THREE.Mesh;
    };
    materials: {
        'M_Coffee_Plate.002': THREE.MeshStandardMaterial;
        'M_Coffee_Cup.002': THREE.MeshStandardMaterial;
        'M_Coffee_Spoon.002': THREE.MeshStandardMaterial;
    };
};
