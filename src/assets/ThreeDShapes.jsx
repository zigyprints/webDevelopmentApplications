import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ShapeData from './ShapeData';
import './ThreeDShapes.css';

const ThreeDShapes = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef([]);
  const sceneRef = useRef(null);
  let camera, renderer, controls, ambientLight, directionalLight;

  useEffect(() => {
    sceneRef.current = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    ambientLight = new THREE.AmbientLight(0x404040);
    sceneRef.current.add(ambientLight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    animate();

    return () => {
      
      shapesRef.current.forEach((shape) => {
        sceneRef.current.remove(shape);
        shape.geometry.dispose();
        shape.material.dispose();
      });

      renderer.dispose();
      controls.dispose();
    };
  }, []);

  const [selectedShapeType, setSelectedShapeType] = useState(null);

  const createShape = (geometry, color, shapeType) => {
    
    shapesRef.current.forEach((shape) => sceneRef.current.remove(shape));
    shapesRef.current = [];

    const material = new THREE.MeshPhongMaterial({ color });
    const shape = new THREE.Mesh(geometry, material);
    sceneRef.current.add(shape);
    shapesRef.current.push(shape);

    setSelectedShapeType(shapeType);
  };
  const createCube = () => {
    const geometry = new THREE.BoxGeometry();
    createShape(geometry, 0x00ff00, 1);
  };

  const createSphere = () => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    createShape(geometry, 0xff0000, 2);
  };

  const createCylinder = () => {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    createShape(geometry, 0x0000ff, 3);
  };

  const createCone = () => {
    const geometry = new THREE.ConeGeometry(1, 2, 32);
    createShape(geometry, 0xffa500, 4);
  };

  const createTorus = () => {
    const geometry = new THREE.TorusGeometry(1, 0.4, 32, 100);
    createShape(geometry, 0x800080, 5);
  };
 

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(sceneRef.current, camera);
  };

  const handleSave = () => {
    const sceneData = {
      shapes: shapesRef.current.map((shape) => ({
        position: shape.position.toArray(),
        color: shape.material.color.getHex(),
      })),
    };
    localStorage.setItem('threeShapesData', JSON.stringify(sceneData));
    alert('Drawing saved to local storage!');
  };

  return (
    <div>
      <div ref={containerRef}></div>
      <button onClick={createCube}>Create Cube</button>
      <button onClick={createSphere}>Create Sphere</button>
      <button onClick={createCylinder}>Create Cylinder</button>
      <button onClick={createCone}>Create Cone</button>
      <button onClick={createTorus}>Create Torus</button>
      <button onClick={handleSave}>Save</button>

      {selectedShapeType !== null && <ShapeData shapeType={selectedShapeType} />}
    </div>
  );
};

export default ThreeDShapes;
