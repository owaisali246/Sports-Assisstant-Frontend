import React from 'react'
import './HomePage.css'
import VideoUploader from './VideoUploader'

const HomePage = () => {
  return (
    <div className="homePage">

      <div class="smallDiv">
        <VideoUploader text={"Upload 1st Video (mp4 format)"} />
      </div>
      <div class="smallDiv">
        <VideoUploader text={"Upload 2nd Video (mp4 format)"} />
      </div>
    </div>
  )
}

export default HomePage