import React, { useState, useEffect } from 'react';
import './randompic.css';
import imageUrls from './randompicimages';

  const RandomPic = () => {
    const [imageUrl, setImageUrl] = useState(imageUrls[0]);
  
    const handleImageClick = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const newImageUrl = imageUrls[randomIndex];
      setImageUrl(newImageUrl);
    };
  
    useEffect(() => {
      const selectNewImage = () => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const newImageUrl = imageUrls[randomIndex];
        setImageUrl(newImageUrl);
      };
  
      // Change the image daily
      const intervalId = setInterval(selectNewImage, 86400000); // Change image every day (86400000 milliseconds = 24 hours)
      return () => clearInterval(intervalId); // Clear the interval when the component unmounts
    }, []);
  
    return (
      <div className="randompic-container">
        <div className='randompic-background'>
          <h1 className='randompic-header'>Random photos from our Journey</h1>
          <img src={imageUrl} alt="Pic that changes Daily" onClick={handleImageClick} />
        </div>
      </div>
    );
  };

  export default RandomPic;