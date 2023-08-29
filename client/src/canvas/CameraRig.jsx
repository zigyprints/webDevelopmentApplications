import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 820;
    const isBreakpoint1 = window.innerWidth <= 526;
    const isMobile = window.innerWidth <= 414;
    let targetPosition = [-0.4, 0, 1.4];

    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0.5, 2];
      if (isBreakpoint1) targetPosition = [0, 1, 2];

      if (isMobile) targetPosition = [0, 0.5, 2];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    {
      !snap.move &&
        easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    }

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
