import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeDShapes from './assets/ThreeDShapes.jsx'

function App() {
  return (
    <div className="App">
      <h1>Draw 3D Shapes</h1>
      <ThreeDShapes />
    </div>
  );
}

export default App
