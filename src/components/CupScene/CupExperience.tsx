import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

function Cube() {
    return (
        <mesh>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

const CupExperience = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div className="w-screen h-screen">
            <Canvas camera={{ position: [0, 0, 15] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={5} />
                <Cube />
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isMobile}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};

export default CupExperience;
