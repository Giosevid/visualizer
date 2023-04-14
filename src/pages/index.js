import React, { useState, useEffect } from 'react';
import BackGroundImage from '../components/backGroundImage';
import { constants } from '../config';

export default function Home() {
  const [backGroundImage, setBackGroundImage] = useState(null);

  useEffect(() => {
    setBackGroundImage(constants.BackGroundImage);
  }, []);

  if (!backGroundImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <BackGroundImage img={backGroundImage} />
    </div>
  );
}
