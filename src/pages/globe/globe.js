import React, { useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import './globe.css';
import locationData from './locationdata';

const GlobePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedPoint, setSelectedPoint] = useState(null);

  const locationInfoRef = useRef(null);

  const calculateArcData = (selectedPoint) => {
    const startLat = selectedPoint.arcstartlat;
    const startLng = selectedPoint.arcstartlng;
    const endLat = selectedPoint.arcendlat;
    const endLng = selectedPoint.arcendlng;

    const arcData = {
      startLat,
      startLng,
      endLat,
      endLng,
      color: '#FF0000',
      width: 2,
    };

    return arcData;
  };

  const handlePointClick = (point) => {
    setSelectedPoint(point);

    const arcData = calculateArcData(point);
    setArcsData([arcData]);

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
        locationInfoRef.current.innerHTML += `<Image src=${imgs} style{"width=1000 height=500"} />`;
      }
    }
  };

  // Initialize arc data with an empty array
  const [arcsData, setArcsData] = useState([]);

  return (
    <div className='globe-container'>
      <div>
        <div className='globe-text-container'>
          {/* Display default message if no point is selected */}
          {selectedPoint === null ? (
            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
              - Select a location to see where we've been! -
              <h4
                style={{ fontWeight: 'lighter', textAlign: 'center' }}
              >(click on Denver-Homebase to follow our trail!)</h4>
            </p>
          ) : (
            // Display location information when a point is selected
            <p ref={locationInfoRef} style={{ fontWeight: 'bold' }}></p>
          )}
        </div>
      </div>
      <Globe
        width='100%'
        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        bumbImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
        pointColor={() => 'chartreuse'}
        pointAltitude={0.01}
        pointRadius={0.2}
        pointsData={locationData}
        onPointClick={handlePointClick}
        arcsData={arcsData}
      />
    </div>
  );
};

export default GlobePage;

