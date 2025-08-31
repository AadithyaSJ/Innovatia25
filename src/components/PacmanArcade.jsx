import React, { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";

function Starfield({ count = 500 }) {
  const pointsRef = useRef();

  // Generate points in a cube around origin, spread = 200 units
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spread = 200;
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return pos;
  }, [count]);

  // Animate stars lightly oscillating up/down (twinkle)
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime();
      const array = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        array[i * 3 + 1] += Math.sin(time + i) * 0.001;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color="white"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
        background="black"
      />
    </points>
  );
}


function PacmanModel() {
  const gltf = useGLTF("/model/scene.glb");
  const mixer = useRef();
  const ref = useRef();

  // Animation state: "rotate", "pause", "zoom"
  const [phase, setPhase] = useState("rotate");
  const [pauseTimer, setPauseTimer] = useState(0);

  // Initial/final states
  const initialRotation = 2;
  const targetRotation = Math.PI / 20;
  const initialScale = 0.1;
  const zoomScale = 0.12;
  const initialPosition = [0, -3.4, 0];
  const zoomPosition = [0, -5, 0];
  const zoomRotation = [Math.PI / 17, targetRotation - Math.PI/10, 0];

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = initialRotation;
      ref.current.scale.set(initialScale, initialScale, initialScale);
      ref.current.position.set(...initialPosition);
    }
    if (gltf.animations.length) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        action.setLoop(THREE.LoopRepeat);
      });
    }
    return () => mixer.current?.stopAllAction();
  }, [gltf]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);

    if (!ref.current) return;

    if (phase === "rotate") {
      // Animate rotationY towards targetRotation
      ref.current.rotation.y += (targetRotation - ref.current.rotation.y) * 0.01;
      // When close enough, switch to pause phase
      if (Math.abs(ref.current.rotation.y - targetRotation) < 0.1) {
        setPhase("pause");
        setPauseTimer(0);
      }
    } else if (phase === "pause") {
      // Wait for 2 seconds
      setPauseTimer((t) => {
        if (t > 0.2) {
          setPhase("zoom");
          return t;
        }
        return t + delta;
      });
    } else if (phase === "zoom") {
      // Animate scale and position and rotation towards zoom values
      // Lerp scale
      const newScale = ref.current.scale.x + (zoomScale - ref.current.scale.x) * 0.08;
      ref.current.scale.set(newScale, newScale, newScale);
      // Lerp position
      ref.current.position.x += (zoomPosition[0] - ref.current.position.x) * 0.08;
      ref.current.position.y += (zoomPosition[1] - ref.current.position.y) * 0.08;
      ref.current.position.z += (zoomPosition[2] - ref.current.position.z) * 0.08;
      // Lerp rotation
      ref.current.rotation.x += (zoomRotation[0] - ref.current.rotation.x) * 0.08;
      ref.current.rotation.y += (zoomRotation[1] - ref.current.rotation.y) * 0.08;
      ref.current.rotation.z += (zoomRotation[2] - ref.current.rotation.z) * 0.08;
    }
  });

  return (
    <primitive ref={ref} object={gltf.scene} />
  );
}

export default function PacmanArcade() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute", inset: 0, overflow: "hidden", backgroundColor: '#010000FF' }}>
      <Canvas
        camera={{ position: [0, 1.8, 8], fov: 45, near: 0.1, far: 1000 }}
        shadows={false}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={4} />
        <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.4} />
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        }>
          <Starfield count={20000} position={[0, 0, -50]} />
          <PacmanModel />
          <Preload all />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
