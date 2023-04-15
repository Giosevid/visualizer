import React, { useState, useEffect } from 'react';
import { BackGroundImage, Layout } from '../components/';
import Constants from '../config/constants';
import FingerPrint from '../components/FingerPrint';
import useGetMaterials from '../hooks/useGetMaterials';

export default function Home() {
  const [backGroundImage, setBackGroundImage] = useState(null);

  useEffect(() => {
    setBackGroundImage(Constants.BackGroundImage);
  }, []);

  if (!backGroundImage) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <BackGroundImage img={backGroundImage} />
      <FingerPrint />
    </Layout>
  );
}
