import React, { useState } from 'react';
import CanvasComponent from './canvas';
import SaveLoadComponent from './saveLoad';
import ApiIntegrationComponent from './apiIntegration';

const HomePage: React.FC = () => {
  

  const handleSaveCanvas = (data: string) => {
    
    localStorage.setItem('canvasState', data);
  };

  const handleLoadCanvas = (data: string) => {
   
  };

  return (
    <div>
      <CanvasComponent />
      <SaveLoadComponent onSave={handleSaveCanvas} onLoad={handleLoadCanvas} />
      <ApiIntegrationComponent />
    </div>
  );
};


export default HomePage;
