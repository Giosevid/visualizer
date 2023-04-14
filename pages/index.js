import React, { useState, useEffect } from 'react';
import { Constants } from '../src/config/constants';
import BackGroundImage from '../src/components/backGroundImage';

export default function Home() {
  const [backGroundImage, setBackGroundImage] = useState(null);

  useEffect(() => {
    setBackGroundImage(Constants.BackGroundImage);
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
