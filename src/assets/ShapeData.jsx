import React, { useState, useEffect } from 'react';

const ShapeData = ({ shapeType }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (shapeType !== null) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${shapeType}`);
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching shape data:', error);
      }
    };
    fetchData();
  }, [shapeType]);

  if (shapeType === null) return <p>Select a shape to view data.</p>;
  if (!data) return <p>Loading shape data...</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default ShapeData;
