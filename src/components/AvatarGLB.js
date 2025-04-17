import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function AvatarGLB() {
  const modelRef = useRef();
  const { scene } = useGLTF(
    "https://models.readyplayer.me/67f180b99deefb45b6ffaec7.glb"
  );

  
  useFrame(({ mouse }) => {
  if (modelRef.current) {
    modelRef.current.rotation.y = mouse.x * 0.5;
    modelRef.current.rotation.x = mouse.y * 0.2;
  }
});



  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={1.4}
      position={[0, -1.1, 0]} // slightly negative Y to pull avatar up
    />
  );
}
