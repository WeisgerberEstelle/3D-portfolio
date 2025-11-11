import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { CoffeeCup } from './CoffeeCup.tsx';

document.addEventListener('keydown', (e) => {
    if (e.key === 'e') {
        console.log(document.getElementById('scene'));
    }
});

const CupExperience = () => {
    const isMobile: boolean = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div className="w-screen h-screen">
            <Canvas
                id="scene"
                camera={{ position: [0, 3, 5], fov: 45 }}
                style={{
                    width: '700px',
                    height: '700px',
                    background: '#b266ff',
                    borderRadius: '20px',
                    overflow: 'hidden'
                }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={5} />
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isMobile}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />
                <CoffeeCup />
            </Canvas>
        </div>
    );
};

export default CupExperience;
