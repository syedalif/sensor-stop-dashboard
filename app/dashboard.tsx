import React, { useEffect, useState } from 'react';
import axios from 'axios';

// export default function Dashboard(){
//     return(
//         <div>
//             <h1>Live Feed of camera</h1>
//             <h1>Speed as car approaches stop sign</h1>
//             <h1>Location</h1>
//             <h1>Laws broken - potentially</h1>
//         </div>
//     )
// }

import Link from 'next/link';

const Dashboard: React.FC = () => {
    const [pictureUrl, setPictureUrl] = useState<string>('');
    const [speed, setSpeed] = useState<number>(0);
  
    // Fetch picture URL from Google Cloud JSON
    useEffect(() => {
      axios.get('https://example.com/google-cloud-api')
        .then(response => {
          const { pictureUrl } = response.data;
          setPictureUrl(pictureUrl);
        })
        .catch(error => {
          console.error('Error fetching picture URL:', error);
        });
    }, []);
  
    // Fetch speed data from JSON
    useEffect(() => {
      axios.get('https://example.com/speed-api')
        .then(response => {
          const { speed } = response.data;
          setSpeed(speed);
        })
        .catch(error => {
          console.error('Error fetching speed data:', error);
        });
    }, []);
  
    return (
      <div className="grid grid-cols-2 gap-4">
        {/* Top Left Quadrant */}
        <div className="bg-gray-200 p-4">
          <h2>Picture from Google Cloud</h2>
          {pictureUrl && <img src={pictureUrl} alt="Camera Picture" />}
        </div>
  
        {/* Bottom Left Quadrant */}
        <div className="bg-gray-200 p-4">
          <h2>Speed Data</h2>
          <p>Speed: {speed}</p>
        </div>
  
        {/* Other Quadrants (Add components as needed) */}
      </div>
    );
};

export default Dashboard;
