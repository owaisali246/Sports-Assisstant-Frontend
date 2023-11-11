// VideoUploader.js

import React, { useState } from 'react';
import './VideoUploader.css';

const VideoUploader = ({text}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  let inputRef;

  // Event handler for when a file is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'video/mp4') {
      setSelectedVideo(file);
    } else {
      // Handle invalid file type or other conditions
      alert('Please select a valid MP4 video file.');
    }
  };

  return (
    <div className="video-uploader" onClick={() => inputRef.click()}>
      <input
        type="file"
        accept="video/mp4"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={(ref) => (inputRef = ref)}
      />
      {selectedVideo ? (
        <video width="320" height="240" controls>
          <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default VideoUploader;
