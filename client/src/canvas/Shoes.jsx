import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";
import { Object3D } from "three";
import { Group } from "three";
const Shoes = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/nike_tail.glb");
  console.log("shoes", nodes.Sketchfab_model.children[0]);
  //   console.log("shoes material", materials.Material);
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  return (
    // <></>
    <group>
      <Group
        castShadow
        geometry={nodes.Sketchfab_model.children[0]}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
        {/* {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.1]}
            rotation={[0, 0, 0]}
            scale={0.2}
            map={logoTexture}
          />
        )} */}
      </Group>
    </group>
  );
};

export default Shoes;
