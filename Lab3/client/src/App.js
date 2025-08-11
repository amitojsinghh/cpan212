import React from 'react';
import './App.css';
import UploadImages from './UploadImages';
import RandomImages from './RandomImages';
import DogImageUploader from './DogImageUploader';

function App() {
  return (
    <div className="container">
      <h1>Lab 3 - Image Upload</h1>

      <div className="section">
        <UploadImages />
      </div>

      <div className="section">
        <RandomImages />
      </div>

      <div className="section">
        <DogImageUploader />
      </div>
    </div>
  );
}

export default App;
