import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import { csv } from 'd3-fetch';
import './globe.css';

const GlobeComponent = () => {
    const globeEl = useRef(null);

    useEffect(() => {
        // load data
        csv('path_to_your_data.csv').then((data) => {
            // create Globe instance
            const globe = Globe()(globeEl.current)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .pointsData(data)
                .pointAltitude('size')
                .pointColor('color');

            // auto-rotate
            globe.controls().autoRotate = true;
            globe.controls().autoRotateSpeed = 0.2;
        });
    }, []);

    return (
        <div className='globe-container'>
            <div ref={globeEl} style={{ width: '60%'}} />;
        </div>
    )
};

export default GlobeComponent;