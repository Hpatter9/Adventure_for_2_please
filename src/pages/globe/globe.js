import React, { useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import './globe.css';
import locationData from './locationdata';

const GlobePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedPoint, setSelectedPoint] = useState(null);
  const locationInfoRef = useRef(null);

  const handlePointClick = (point) => {
    setSelectedPoint(point);
    if (locationInfoRef.current) {
      // Clear existing content before updating
      locationInfoRef.current.innerHTML = '';

      const { name, date, detail, imgs } = point;

      // Enclose each item in a separate <p> element
      locationInfoRef.current.innerHTML += `<p style="font-size: 30px; text-align: center;">${name}</p>`;
      locationInfoRef.current.innerHTML += `<p>${date}</p>`;
      locationInfoRef.current.innerHTML += `<p>${detail}</p>`;
      // Dynamically add the image tag if imgs property exists
      if (imgs) {
        locationInfoRef.current.innerHTML += `<img src=${imgs} style{width=1000 height=500} />`;
      }
    }
  };

  return (
    <div className='globe-container'>
      <div>
        <div className='globe-text-container'>
          <p ref={locationInfoRef} style={{ fontWeight: 'bold' }}></p>
        </div>
      </div>
      <Globe
        width={1000}
        globeImageUrl={"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}
        bumbImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
        backgroundImageUrl={"//unpkg.com/three-globe/example/img/night-sky.png"}
        pointColor={() => 'chartreuse'}
        pointAltitude={.01}
        pointRadius={.5}
        pointsData={locationData}
        onPointClick= {handlePointClick}
      />
    </div>
  );
};

export default GlobePage;