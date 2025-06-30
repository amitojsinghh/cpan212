import React, { useState } from 'react';
import axios from 'axios';

function UploadImages() {
  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    for (let file of files) {
      formData.append('images', file);
    }

    await axios.post('http://localhost:5000/upload', formData);
    alert("Images uploaded!");
  };

  return (
    <div>
      <h3>Upload Multiple Images</h3>
      <input type="file" multiple onChange={e => setFiles(e.target.files)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadImages;
