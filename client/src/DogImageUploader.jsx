import React, { useState } from 'react';
import axios from 'axios';

function DogImageUploader() {
  const [dogImg, setDogImg] = useState('');

  const getDog = async () => {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setDogImg(res.data.message);
  };

  const uploadDog = async () => {
    await axios.post('http://localhost:5000/upload-dog', { url: dogImg });
    alert("Dog image uploaded!");
  };

  return (
    <div>
      <h3>Random Dog Image</h3>
      <button onClick={getDog}>Get Dog</button>
      {dogImg && (
        <div>
          <img src={dogImg} alt="dog" />
          <br />
          <button onClick={uploadDog}>Upload Dog Image</button>
        </div>
      )}
    </div>
  );
}

export default DogImageUploader;
