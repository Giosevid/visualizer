import React, { useState, useEffect } from 'react'
import { BackGroundImage, Layout } from '../components/'
import Constants from '../config/constants'
import FingerPrint from '../components/FingerPrint'
import Materials from '../components/Materials'

export default function Home () {
  const [backGroundImage, setBackGroundImage] = useState(null)
  const [point, setPoint] = useState({})
  const [material, setMaterial] = useState({})

  useEffect(() => {
    setBackGroundImage(Constants.BackGroundImage)
  }, [])

  if (!backGroundImage) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <BackGroundImage img={backGroundImage} img2={material?.id && material?.layers[point?.id]} />
      <FingerPrint onPress={setPoint} />
      <Materials point={point} setMaterial={setMaterial} />
    </Layout>
  )
}
