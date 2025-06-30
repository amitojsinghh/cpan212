import React, { useState } from 'react';
import axios from 'axios';

function RandomImages() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await axios.get('http://localhost:5000/random-images');
    setImages(res.data);
  };

  return (
    <div>
      <h3>Random Server Images</h3>
      <button onClick={fetchImages}>Fetch Images</button>
      <div className="image-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`random-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default RandomImages;
