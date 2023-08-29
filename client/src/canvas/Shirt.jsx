import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta); //useFrame is used here to apply colour evenly as the frame rerenders frame by frame.
  });
  const stateString = JSON.stringify(snap);
  //   console.log("shirt", nodes.T_Shirt_male.geometry);
  //   console.log("shirt", materials.lambert1);
  return (
    // <></>
    <group key={stateString}>
      {snap.move && (
        <OrbitControls
          enableZoom={false}
          enableDamping
          maxPolarAngle={2}
          minAzimuthAngle={-Math.PI * 0.5}
          maxAzimuthAngle={Math.PI * 0.5}
          x
        />
      )}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0.068, 0.07, 0.1]}
            rotation={[0, 0, 0]}
            scale={0.067}
            map={logoTexture}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
