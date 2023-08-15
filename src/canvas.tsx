
import React, { useEffect, useRef, useState } from 'react';
import './canvas.css'; // Adjust the path to match your file structure

import * as THREE from 'three';

enum ShapeType {
  None,
  Cube,
  Sphere,
  Cone,
  Cylinder,
  Tube,
}

  const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [selectedShape, setSelectedShape] = useState<ShapeType>(ShapeType.None);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [shapes, setShapes] = useState<THREE.Mesh[]>([]);

  useEffect(() => {
    if (canvasRef.current) {
      
      const newScene = new THREE.Scene();
      const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      newCamera.position.z = 5;
      const newRenderer = new THREE.WebGLRenderer();
      newRenderer.setSize(window.innerWidth, window.innerHeight);

     
      canvasRef.current.appendChild(newRenderer.domElement);

      setScene(newScene);
      setCamera(newCamera);
      setRenderer(newRenderer);
    }
  }, []);

  useEffect(() => {
    if (scene && camera && renderer) {
      
      scene.clear();

     
      shapes.forEach(shape => scene.add(shape));

      
      const animate = () => {
      
        shapes.forEach(shape => {
          shape.rotation.x += 0.01;
          shape.rotation.y += 0.01;
        });

      
        renderer.render(scene, camera);

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [shapes, scene, camera, renderer]);

  useEffect(() => {
    if (scene) {
      
      const createShape = (geometry: THREE.BufferGeometry, material: THREE.Material) => {
        const shape = new THREE.Mesh(geometry, material);
        shape.position.x = Math.random() * 5 - 2.5;
        shape.position.y = Math.random() * 5 - 2.5;
        shape.position.z = Math.random() * 5 - 2.5;
        setShapes(prevShapes => [...prevShapes, shape]);
      };

      switch (selectedShape) {
        case ShapeType.Cube:
          createShape(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
          break;
        case ShapeType.Sphere:
          createShape(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
          break;
        case ShapeType.Cone:
          createShape(new THREE.ConeGeometry(1, 2, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
          break;
        case ShapeType.Cylinder:
          createShape(new THREE.CylinderGeometry(1, 1, 2, 32), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
          break;
        case ShapeType.Tube:
          createShape(new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0)), 32, 0.2, 8, false), new THREE.MeshBasicMaterial({ color: 0x00ffff }));
          break;
        default:
          setShapes([]);
          break;
      }
    }
  }, [selectedShape, scene]);

  const clearShapes = () => {
    setShapes([]);
  };

  const clearLastShape = () => {
    if (shapes.length > 0) {
      setShapes(prevShapes => prevShapes.slice(0, -1));
    }
  };
  const [shapeColor, setShapeColor] = useState<string>('');

  const updateShapeColor = (color: string) => {
    if (shapes.length > 0) {
      setShapes(prevShapes => {
        const updatedShapes = [...prevShapes];
        const lastShape = updatedShapes[updatedShapes.length - 1];
        if (lastShape && lastShape.material instanceof THREE.MeshBasicMaterial) {
          lastShape.material = new THREE.MeshBasicMaterial({ color });
        }
        return updatedShapes;
      });
    }
  };

  return (
    <div>
      <div ref={canvasRef} />
      <div className="button-container">
      <button className="button" onClick={() => setSelectedShape(ShapeType.Cube)}>Draw Cube</button>
      <button className="button" onClick={() => setSelectedShape(ShapeType.Sphere)}>Draw Sphere</button>
      <button className="button" onClick={() => setSelectedShape(ShapeType.Cone)}>Draw Cone</button>
      <button className="button" onClick={() => setSelectedShape(ShapeType.Cylinder)}>Draw Cylinder</button>
      <button className="button" onClick={() => setSelectedShape(ShapeType.Tube)}>Draw Tube</button>
    </div>

      <input
        type="color"
        value={shapeColor}
        onChange={e => setShapeColor(e.target.value)}
      />
      <button className="button" onClick={() => updateShapeColor(shapeColor)}>Apply Color</button>

      <button className="button" onClick={clearShapes}>Clear all Shapes</button>
      <button className="button" onClick={clearLastShape}>Clear Last Shape</button>
    </div>
  );
};

export default CanvasComponent;
