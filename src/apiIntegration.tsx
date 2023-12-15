import React, { useState } from 'react';

const ApiIntegrationComponent: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/200');
      const imageUrl = response.url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <h2>API Integration</h2>
      <button onClick={fetchRandomImage}>Fetch Random Image</button>
      {imageUrl && (
        <div>
          <h3>Random Image</h3>
          <img src={imageUrl} alt="Random" />
        </div>
      )}
    </div>
  );
};

export default ApiIntegrationComponent;
