import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Luxury Gift Box with Lid, Silk Ribbons, and Gold Accents
function LuxuryGiftHamper({ mousePos }) {
  const groupRef = useRef();
  const lidRef = useRef();
  const ribbonBowRef = useRef();

  // Premium Materials
  const materials = useMemo(() => {
    // Deep warm obsidian textured box body
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x181615,
      roughness: 0.35,
      metalness: 0.15,
    });

    // Interior luxury cream lining
    const interiorMat = new THREE.MeshStandardMaterial({
      color: 0xf7f1e7,
      roughness: 0.5,
      metalness: 0.05,
    });

    // Metallic Champagne Gold for trims and ribbons
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc9a45c,
      roughness: 0.22,
      metalness: 0.88,
    });

    // Rich Burgundy Satin Ribbon
    const satinRibbonMat = new THREE.MeshStandardMaterial({
      color: 0x6e1b2f,
      roughness: 0.28,
      metalness: 0.45,
    });

    // Pure Champagne Gold Silk alternative for secondary bow
    const champagneRibbonMat = new THREE.MeshStandardMaterial({
      color: 0xd4b06a,
      roughness: 0.25,
      metalness: 0.75,
    });

    return { boxMat, interiorMat, goldMat, satinRibbonMat, champagneRibbonMat };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth subtle idle rotation
    groupRef.current.rotation.y += delta * 0.22;

    // Subtle interactive mouse parallax
    const targetRotX = (mousePos.current.y * 0.3) - 0.15;
    const targetRotZ = -(mousePos.current.x * 0.3);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);

    // Subtle breathing/floating lid animation
    if (lidRef.current) {
      const time = state.clock.getElapsedTime();
      lidRef.current.position.y = 0.95 + Math.sin(time * 1.5) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={[1.12, 1.12, 1.12]}>
      {/* --- BOX BASE --- */}
      {/* Outer Main Box */}
      <mesh material={materials.boxMat} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.4, 2.2]} />
      </mesh>

      {/* Gold Base Trim Line */}
      <mesh material={materials.goldMat} position={[0, -0.66, 0]}>
        <boxGeometry args={[2.22, 0.04, 2.22]} />
      </mesh>

      {/* Box Inner Rim (visible under hovering lid) */}
      <mesh material={materials.goldMat} position={[0, 0.69, 0]}>
        <boxGeometry args={[2.14, 0.03, 2.14]} />
      </mesh>

      {/* Vertical Ribbon (X-axis band) */}
      <mesh material={materials.champagneRibbonMat} position={[0, 0, 0]}>
        <boxGeometry args={[0.34, 1.42, 2.22]} />
      </mesh>

      {/* Vertical Ribbon (Z-axis band) */}
      <mesh material={materials.champagneRibbonMat} position={[0, 0, 0]}>
        <boxGeometry args={[2.22, 1.42, 0.34]} />
      </mesh>

      {/* --- HOVERING LUXURY LID --- */}
      <group ref={lidRef} position={[0, 0.95, 0]}>
        {/* Main Lid Geometry */}
        <mesh material={materials.boxMat} castShadow receiveShadow>
          <boxGeometry args={[2.34, 0.38, 2.34]} />
        </mesh>

        {/* Gold Border on Lid Lip */}
        <mesh material={materials.goldMat} position={[0, -0.17, 0]}>
          <boxGeometry args={[2.36, 0.035, 2.36]} />
        </mesh>

        {/* Top Ribbon on Lid (X-axis) */}
        <mesh material={materials.champagneRibbonMat} position={[0, 0.02, 0]}>
          <boxGeometry args={[0.34, 0.385, 2.36]} />
        </mesh>

        {/* Top Ribbon on Lid (Z-axis) */}
        <mesh material={materials.champagneRibbonMat} position={[0, 0.02, 0]}>
          <boxGeometry args={[2.36, 0.385, 0.34]} />
        </mesh>

        {/* --- LUXURY BOW ON TOP --- */}
        <group ref={ribbonBowRef} position={[0, 0.22, 0]}>
          {/* Central Gold Medallion / Knot */}
          <mesh material={materials.goldMat}>
            <cylinderGeometry args={[0.18, 0.18, 0.14, 24]} />
          </mesh>

          {/* Bow Loop 1 (Right) */}
          <mesh material={materials.champagneRibbonMat} position={[0.42, 0.18, 0.24]} rotation={[0.4, 0.6, 0.7]}>
            <torusGeometry args={[0.32, 0.08, 16, 32, Math.PI * 1.3]} />
          </mesh>

          {/* Bow Loop 2 (Left) */}
          <mesh material={materials.champagneRibbonMat} position={[-0.42, 0.18, -0.24]} rotation={[-0.4, -0.6, -0.7]}>
            <torusGeometry args={[0.32, 0.08, 16, 32, Math.PI * 1.3]} />
          </mesh>

          {/* Bow Loop 3 (Top-Right) */}
          <mesh material={materials.champagneRibbonMat} position={[0.26, 0.22, -0.38]} rotation={[-0.5, 0.8, 0.6]}>
            <torusGeometry args={[0.28, 0.075, 16, 32, Math.PI * 1.2]} />
          </mesh>

          {/* Bow Loop 4 (Bottom-Left) */}
          <mesh material={materials.champagneRibbonMat} position={[-0.26, 0.22, 0.38]} rotation={[0.5, -0.8, -0.6]}>
            <torusGeometry args={[0.28, 0.075, 16, 32, Math.PI * 1.2]} />
          </mesh>

          {/* Elegant Ribbon Tails draping down */}
          <mesh material={materials.champagneRibbonMat} position={[0.48, -0.05, 0.52]} rotation={[0.6, 0.3, -0.4]}>
            <boxGeometry args={[0.22, 0.02, 0.65]} />
          </mesh>

          <mesh material={materials.champagneRibbonMat} position={[-0.42, -0.05, 0.58]} rotation={[0.5, -0.4, 0.3]}>
            <boxGeometry args={[0.22, 0.02, 0.7]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// Background Floating Gold Dust & Shimmer
function DustParticles() {
  return (
    <>
      <Sparkles
        count={50}
        scale={[7, 7, 7]}
        size={2.5}
        speed={0.4}
        color="#E2C589"
        opacity={0.65}
      />
      <Sparkles
        count={30}
        scale={[5, 5, 5]}
        size={3.8}
        speed={0.25}
        color="#F7F1E7"
        opacity={0.4}
      />
    </>
  );
}

export default function GiftBoxScene() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      onPointerMove={handlePointerMove}
    >
      {/* Subtle radial gold glow behind box */}
      <div 
        className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 164, 92, 0.22) 0%, rgba(201, 164, 92, 0.04) 50%, transparent 75%)',
          filter: 'blur(45px)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}
      />

      <Canvas
        shadows
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0.15, 4.3]} fov={38} />

        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.85} color="#FFF8EE" />
        
        {/* Warm Golden Key Light */}
        <directionalLight
          position={[4, 6, 4]}
          intensity={2.2}
          color="#FFE9C2"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />

        {/* Cool Deep Fill Light */}
        <directionalLight
          position={[-5, 3, -3]}
          intensity={0.65}
          color="#A8B4C8"
        />

        {/* Warm Rim Highlight behind box */}
        <pointLight
          position={[0, 3, -3]}
          intensity={1.8}
          color="#C9A45C"
          distance={10}
        />

        {/* Floating Physics & Rotation */}
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.45}>
          <LuxuryGiftHamper mousePos={mousePos} />
        </Float>

        {/* Soft Contact Shadows on Ground */}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.65}
          scale={6.5}
          blur={2.2}
          far={3}
          color="#060505"
        />

        {/* Gold Atmospheric Particles */}
        <DustParticles />
      </Canvas>
    </div>
  );
}
