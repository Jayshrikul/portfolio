import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AvatarGLB from "./AvatarGLB";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Canvas camera={{ position: [0, 1.2, 2.5], fov: 35 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <AvatarGLB />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
