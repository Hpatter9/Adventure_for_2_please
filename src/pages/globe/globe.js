import React, { useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import './globe.css';
import locationData from './locationdata';

const GlobePage = () => {
  const [showTextContainer, setShowTextContainer] = useState(true);
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

  const calculatePathData = (selectedPoint) => {
    return selectedPoint.paths;
  };



  const handlePointClick = (point) => {
    setSelectedPoint(point);

    if (point.paths) {
      const pathData = calculatePathData(point);
      setPathsData([pathData]);
      setArcsData([]); // Clear any existing arcs
    } else {
      const arcData = calculateArcData(point);
      setArcsData([arcData]);
      setPathsData([]); // Clear any existing paths
    }

    if (locationInfoRef.current) {
      locationInfoRef.current.innerHTML = '';
    
      const { name, date, detail, imgs } = point;
    
      locationInfoRef.current.innerHTML += `<p style="font-size: 30px; text-align: center;">${name}</p>`;
      locationInfoRef.current.innerHTML += `<p>${date}</p>`;
      locationInfoRef.current.innerHTML += `<p>${detail}</p>`;
      if (imgs) {
        locationInfoRef.current.innerHTML += `<Image src=${imgs} style{"width=1000 height=500"} />`;
      }
    
      setShowTextContainer(true);
    }
  };

  const [arcsData, setArcsData] = useState([]);

  const [pathsData, setPathsData] = useState([]);

  const handleTextContainerClick = () => {
    setShowTextContainer(false);
  }

  return (
    <div className='globe-container'>
      <div>
        <div className='globe-text-container' 
          style={{ display: showTextContainer ? 'block' : 'none' }}
          onClick={handleTextContainerClick}>
          {selectedPoint === null ? (
            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
              - Select a location to see where we've been! (click twice) -
              <h4
                style={{ fontWeight: 'lighter', textAlign: 'center' }}
              >(click on Denver-Homebase to follow our trail from the start!!)</h4>
            </p>
          ) : (
            // Display location information when a point is selected
            <p ref={locationInfoRef} style={{ fontWeight: 'bold' }}></p>
          )}
        </div>
      </div>
      <Globe
        globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        bumbImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
        backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
        pointColor={() => 'chartreuse'}
        pointAltitude={0.01}
        pointRadius={.3}
        pointsData={locationData}
        onPointClick={handlePointClick}
        arcsData={arcsData}
        pathsData={pathsData}
        pathColor={() => 'white'}
        pathDashLength = {0.1}
        pathDashGap={0.008}
        pathDashAnimateTime={12000}
      />
    </div>
  );
};

export default GlobePage;

