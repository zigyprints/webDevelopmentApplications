import React from 'react';
import './canvas.css';

interface SaveLoadProps {
  onSave: (data: string) => void;
  onLoad: (data: string) => void;
}

const SaveLoadComponent: React.FC<SaveLoadProps> = ({ onSave, onLoad }) => {
  const handleSave = () => {
    try {
      const canvasState = JSON.stringify(localStorage.getItem('canvasState'));
      onSave(canvasState);
      console.log('Canvas state saved.');
    } catch (error) {
      console.error('Error saving canvas state:', error);
    }
  };

  const handleLoad = () => {
    try {
      const savedCanvasState = localStorage.getItem('canvasState');
      if (savedCanvasState) {
        onLoad(savedCanvasState);
        console.log('Canvas state loaded.');
      } else {
        console.warn('No saved canvas state found.');
      }
    } catch (error) {
      console.error('Error loading canvas state:', error);
    }
  };

  return (
    <div>
      <button className="button" onClick={handleSave}>Save Canvas</button>
      {/* <button className="button" onClick={handleLoad}>Load Canvas</button> */}
    </div>
  );
};

export default SaveLoadComponent;
