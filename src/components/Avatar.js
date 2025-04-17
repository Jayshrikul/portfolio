import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import "../styles/Avatar.css"; // 📁 make sure to create this file

function AvatarModel({ modelPath }) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive ref={group} object={scene} scale={2} position-y={-1.2} />;
}

export default function Avatar() {
  return (
    <div className="avatar-canvas">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense
          fallback={<div className="loading-text">Loading Avatar...</div>}
        >
          <AvatarModel modelPath="/assets/avatar.glb" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
