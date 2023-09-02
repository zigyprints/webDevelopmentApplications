import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import "./App.css";
import { OrbitControls } from '@react-three/drei'
import ControlPannel from "./component/ControlPannel";
// orbit controls is the motion of the camera arround the object

// import { useSpring, animated } from '@react-spring/three'



function App() {

  const [pos_x, setpos_x] = useState(0)
  const [pos_y, setpos_y] = useState(0)
  const [pos_z, setpos_z] = useState(0)
  const [box_scale_x, setbox_scale_x] = useState(1)
  const [box_scale_y, setbox_scale_y] = useState(1)
  const [box_scale_z, setbox_scale_z] = useState(1)
  const [ambIntemsity, setambIntemsity] = useState(0.5)
  const [directionalIntensity, setdirectionalIntensity] = useState(0.5)
  const [boxColor, setboxColor] = useState("white")


  function Addevents() {
    document.getElementById("pos-X").value = 0
    document.getElementById("pos-Y").value = 0
    document.getElementById("pos-Z").value = 0
    document.getElementById("scale-X").value = 1
    document.getElementById("scale-Y").value = 1
    document.getElementById("scale-Z").value = 1

    document.getElementById("pos-X").addEventListener("change", (e) => {
      setpos_x(e.target.value)
    })
    document.getElementById("pos-Y").addEventListener("change", (e) => {
      setpos_y(e.target.value)
    })
    document.getElementById("pos-Z").addEventListener("change", (e) => {
      setpos_z(e.target.value)
    })
    document.getElementById("scale-X").addEventListener("change", (e) => {
      setbox_scale_x((e.target.value+1))
    })
    document.getElementById("scale-Y").addEventListener("change", (e) => {
      setbox_scale_y((e.target.value+1))
    })
    document.getElementById("scale-Z").addEventListener("change", (e) => {
      setbox_scale_z((e.target.value+1))
    })
    document.getElementById("ambInt").addEventListener("change", (e) => {
      setambIntemsity((e.target.value/100))
    })
    document.getElementById("srcInt").addEventListener("change", (e) => {
      setdirectionalIntensity((e.target.value/100))
    })
    document.getElementById("color").addEventListener("change", (e) => {
      setboxColor((e.target.value))
    })
  }

  function Cube(cubeargs) {

    const ref = useRef()


    useFrame(() => {
      ref.current.rotation.y += 0.002;
    })

    return (
      <mesh ref={ref} {...cubeargs} >
        <boxGeometry attach="geometry" args={[box_scale_x, box_scale_y, box_scale_z]} />
        <meshStandardMaterial attach="material" color={boxColor} />
      </mesh>
    );
  }

  function Scene() {
    return (
      <>
        <ambientLight intensity={ambIntemsity} />
        <directionalLight intensity={directionalIntensity} position={[0, 3, 5]} />
        <Cube rotation={[0, 0, 0]} position={[pos_x, pos_y, pos_z]} />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </>
    );
  }
  return (
    // Addevents
    <div id="App">
      <ControlPannel />
      <Canvas
        onCreated={Addevents}
        style={{ height: "100vh", width: "75vw" }}
        camera={{ fov: 80, near: 0.1, far: 100, position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
